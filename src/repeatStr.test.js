import { test } from 'node:test';
import assert from 'node:assert/strict';
import { repeatStr } from './index.js';

test('repeatStr repeats string n times', () => {
  assert.equal(repeatStr('ab', 3), 'ababab');
});

test('repeatStr with n=1 returns the string unchanged', () => {
  assert.equal(repeatStr('x', 1), 'x');
});

test('repeatStr with n=0 returns empty string', () => {
  assert.equal(repeatStr('hi', 0), '');
});

test('repeatStr with negative n returns empty string', () => {
  assert.equal(repeatStr('hi', -2), '');
});

test('repeatStr with empty string returns empty string', () => {
  assert.equal(repeatStr('', 5), '');
});
