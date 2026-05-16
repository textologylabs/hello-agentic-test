import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lastWord } from './index.js';

test('lastWord returns last word of a multi-word string', () => {
  assert.equal(lastWord('hello world'), 'world');
});

test('lastWord ignores trailing whitespace', () => {
  assert.equal(lastWord('trailing space  '), 'space');
});

test('lastWord returns the single word when input has one word', () => {
  assert.equal(lastWord('single'), 'single');
});

test('lastWord returns empty string for empty input', () => {
  assert.equal(lastWord(''), '');
});

test('lastWord returns empty string for whitespace-only input', () => {
  assert.equal(lastWord('   '), '');
});
