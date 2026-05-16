import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countWords } from './index.js';

test('countWords returns 2 for two-word string', () => {
  assert.equal(countWords('hello world'), 2);
});

test('countWords returns 1 for single word', () => {
  assert.equal(countWords('one'), 1);
});

test('countWords returns 0 for empty string', () => {
  assert.equal(countWords(''), 0);
});

test('countWords returns 0 for whitespace-only string', () => {
  assert.equal(countWords('   '), 0);
});

test('countWords ignores leading, trailing, and multiple spaces', () => {
  assert.equal(countWords('  spaced   out   words  '), 3);
});
