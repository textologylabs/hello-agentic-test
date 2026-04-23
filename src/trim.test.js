import { test } from 'node:test';
import assert from 'node:assert/strict';
import trim from './trim.js';

test("trim('  hello  ') returns 'hello'", () => {
  assert.equal(trim('  hello  '), 'hello');
});

test("trim('hello') returns 'hello'", () => {
  assert.equal(trim('hello'), 'hello');
});

test("trim('\\t\\nhello\\n\\t') returns 'hello'", () => {
  assert.equal(trim('\t\nhello\n\t'), 'hello');
});

test("trim('   ') returns ''", () => {
  assert.equal(trim('   '), '');
});

test("trim('') returns ''", () => {
  assert.equal(trim(''), '');
});
