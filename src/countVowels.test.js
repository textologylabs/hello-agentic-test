import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import countVowels from './countVowels.js';

describe('countVowels', () => {
  it('counts vowels in a lowercase string', () => {
    assert.strictEqual(countVowels('hello'), 2);
  });

  it('counts vowels in an uppercase string', () => {
    assert.strictEqual(countVowels('HELLO'), 2);
  });

  it('returns 0 when there are no vowels', () => {
    assert.strictEqual(countVowels('bcdfg'), 0);
  });

  it('returns 0 for an empty string', () => {
    assert.strictEqual(countVowels(''), 0);
  });

  it('counts all vowels when string is all vowels', () => {
    assert.strictEqual(countVowels('aeiou'), 5);
  });
});
