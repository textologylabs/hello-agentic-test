import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from './index.js';

test('isPalindrome returns true for simple palindrome', () => {
  assert.equal(isPalindrome('racecar'), true);
});

test('isPalindrome returns false for non-palindrome', () => {
  assert.equal(isPalindrome('hello'), false);
});

test('isPalindrome is case-insensitive', () => {
  assert.equal(isPalindrome('Racecar'), true);
});

test('isPalindrome ignores punctuation and spaces', () => {
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
});

test('isPalindrome returns true for empty string', () => {
  assert.equal(isPalindrome(''), true);
});
