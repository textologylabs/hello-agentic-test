import { test } from 'node:test';
import assert from 'node:assert/strict';
import trim from './trim.js';

test('trims leading and trailing spaces', () => {
  assert.equal(trim('  hello  '), 'hello');
});

test('returns unchanged string with no whitespace', () => {
  assert.equal(trim('hello'), 'hello');
});

test('trims leading and trailing tabs and newlines', () => {
  assert.equal(trim('\t\nhello\n\t'), 'hello');
});

test('returns empty string for all-whitespace input', () => {
  assert.equal(trim('   '), '');
});

test('returns empty string for empty input', () => {
  assert.equal(trim(''), '');
});
