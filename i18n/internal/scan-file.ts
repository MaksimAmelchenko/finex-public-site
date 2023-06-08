import * as fs from 'node:fs';
import * as ts from 'typescript';
import { scanNodes } from './scan-nodes';
import { NodeArray } from 'typescript';
import { Statement } from 'typescript';
import { SyntaxKind } from 'typescript';

const getTFunctionName = 'getT';
const useTFunctionName = 'useT';

export function scanFile(path: string) {
  const content = fs.readFileSync(path, 'utf8');
  const tsFile = ts.createSourceFile(path, content, ts.ScriptTarget.ES5, false, ts.ScriptKind.TSX);
  const fileScanResult = scanNodes(tsFile.statements, path, content);
  if (Object.keys(fileScanResult).length > 0) {
    const namespace = extractScope(tsFile.statements);
    if (!namespace) {
      console.warn(`${path}: cannot find "const t = getT('scope') call!"`);
    }
    return { [namespace]: fileScanResult };
  }
  return {};
}

function extractScope(nodes: NodeArray<Statement>): string {
  const getTCall = nodes.find(
    (node: any) =>
      node.kind === SyntaxKind.VariableStatement &&
      node.declarationList.declarations[0] &&
      node.declarationList.declarations[0].initializer &&
      node.declarationList.declarations[0].initializer.kind === SyntaxKind.CallExpression &&
      node.declarationList.declarations[0].initializer.expression.escapedText === getTFunctionName
  );

  if (getTCall) {
    return (getTCall as any).declarationList.declarations[0].initializer.arguments[0].text;
  }

  for (const node of nodes) {
    const scope = traversal(node);
    if (scope) {
      return scope;
    }
  }

  return '';
}

function traversal(node): string | undefined {
  if (
    node.kind === SyntaxKind.VariableDeclaration &&
    node.name.escapedText === 't' &&
    node.initializer.expression.escapedText === useTFunctionName
  ) {
    return node.initializer.arguments[0].text;
  }

  for (const [, child] of Object.entries(node)) {
    // could be an array of nodes or just a node
    if (Array.isArray(child)) {
      for (let j = 0; j < child.length; j++) {
        const result = traversal(child[j]);
        if (result) {
          return result;
        }
      }
    } else if (isNode(child)) {
      const result = traversal(child);
      if (result) {
        return result;
      }
    }
  }
  return undefined;
}

function isNode(node) {
  return typeof node === 'object';
}
