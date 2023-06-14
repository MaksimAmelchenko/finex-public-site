import { scanDir } from './internal/scan-dir';

const process = require('process');
const fs = require('fs');

const outDir = 'locales';
const defaultScanDir = 'src';
const fileExtensions = ['ts', 'tsx'];
const locales = ['en', 'ru', 'de'];
const originalLocale = 'en';

const path = process.argv.length > 2 && process.argv[2] ? process.argv[2] : defaultScanDir;

console.log(`\x1b[32mGenerate translations:\x1b[0m scan ${path} for ts/tsx files.`);

// Scan codebase for translator function call
const scanResult = scanDir(path, fileExtensions);

if (!fs.existsSync(`${outDir}`)) {
  fs.mkdirSync(outDir);
}
// Merge results with existing translations
for (let locale of locales) {
  let newPhrasesCount = 0;
  let previousResult = {};
  const localeResult = {};
  if (fs.existsSync(`${outDir}/${locale}.ts`)) {
    previousResult = require(`../${outDir}/${locale}.ts`).default;
  }
  // 1. add new translations
  for (let namespace in scanResult) {
    if (previousResult[namespace]) {
      localeResult[namespace] = {};
      for (let scope in scanResult[namespace]) {
        if (!previousResult[namespace][scope]) {
          newPhrasesCount += 1;
        }

        if (locale != originalLocale || Object(localeResult[namespace][scope]) !== localeResult[namespace][scope]) {
          localeResult[namespace][scope] = previousResult[namespace][scope] || scanResult[namespace][scope];
        } else {
          localeResult[namespace][scope] = scanResult[namespace][scope];
        }
      }
    } else {
      localeResult[namespace] = scanResult[namespace];
    }
  }

  // sort result by namespaces
  const result = Object.keys(localeResult)
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
    .reduce((acc, key) => {
      acc[key] = localeResult[key];
      return acc;
    }, {});

  fs.writeFileSync(`${outDir}/${locale}.ts`, `export default ` + JSON.stringify(result, null, 2));
  console.log(`Translation file saved: ${outDir}/${locale}.ts`);
  if (newPhrasesCount) {
    console.log(`\x1b[37m\x1b[44mNew ${newPhrasesCount} phrases for ${locale}\x1b[0m`);
  }
}
