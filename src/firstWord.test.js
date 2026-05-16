import { test } from 'node:test';
import assert from 'node:assert/strict';
import { firstWord } from './index.js';

test('firstWord returns first word of a multi-word string', () => {
  assert.equal(firstWord('hello world'), 'hello');
});

test('firstWord ignores leading whitespace', () => {
  assert.equal(firstWord('  spaced start'), 'spaced');
});

test('firstWord returns the single word when input has one word', () => {
  assert.equal(firstWord('single'), 'single');
});

test('firstWord returns empty string for empty input', () => {
  assert.equal(firstWord(''), '');
});

test('firstWord returns empty string for whitespace-only input', () => {
  assert.equal(firstWord('   '), '');
});
