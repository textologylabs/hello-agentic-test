import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capitalizeWords } from './index.js';

test('capitalizeWords capitalizes first letter of each word and lowercases rest', () => {
  assert.equal(capitalizeWords('hello world'), 'Hello World');
});

test('capitalizeWords lowercases an all-caps word', () => {
  assert.equal(capitalizeWords('HELLO'), 'Hello');
});

test('capitalizeWords capitalizes a single lowercase word', () => {
  assert.equal(capitalizeWords('one'), 'One');
});

test('capitalizeWords returns empty string for empty input', () => {
  assert.equal(capitalizeWords(''), '');
});
