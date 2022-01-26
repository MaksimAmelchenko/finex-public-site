import fs from 'fs';

export function mergeAndSave(
  result: any,
  outDir: string,
  locales: string[],
  originalLocale: string,
  phraseMapFile: string
) {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  const phraseMap = {};

  // merge locale files with the new result
  for (let locale of locales) {
    let newPhrasesCount = 0;
    let previousResult = {};
    const localeResult = {};
    if (fs.existsSync(`${outDir}/${locale}.js`)) {
      previousResult = require(`../${outDir}/${locale}.js`);
    }
    // 1. add new translations
    for (let namespace in result) {
      if (previousResult[namespace]) {
        localeResult[namespace] = {};
        for (let scope in result[namespace]) {
          if (!previousResult[namespace][scope]) {
            newPhrasesCount += 1;
          }

          if (locale != originalLocale || Object(localeResult[namespace][scope]) !== localeResult[namespace][scope]) {
            localeResult[namespace][scope] = previousResult[namespace][scope] || result[namespace][scope];
          } else {
            localeResult[namespace][scope] = result[namespace][scope];
          }
        }
      } else {
        localeResult[namespace] = result[namespace];
      }
    }
    fs.writeFileSync(`${outDir}/${locale}.js`, `module.exports = ` + JSON.stringify(localeResult, null, 2));
    console.log(`Translation file saved: ${outDir}/${locale}.js`);
    if (newPhrasesCount) {
      console.log(`\x1b[37m\x1b[44mNew ${newPhrasesCount} phrases for ${locale}\x1b[0m`);
    }
  }

  for (let namespace in result) {
    phraseMap[namespace] = {};
    for (let scope in result[namespace]) {
      phraseMap[namespace][result[namespace][scope]] = scope;
    }
  }

  fs.writeFileSync(`${outDir}/${phraseMapFile}.js`, 'module.exports = ' + JSON.stringify(phraseMap, null, 2));
  console.log(`Phrases map saved: ${outDir}/${phraseMapFile}`);
}
