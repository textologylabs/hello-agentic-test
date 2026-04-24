import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import toUpper from './toUpper.js';

describe('toUpper', () => {
  it('uppercases all lowercase letters', () => {
    assert.equal(toUpper('hello'), 'HELLO');
  });

  it('uppercases mixed case with punctuation', () => {
    assert.equal(toUpper('Hello, World!'), 'HELLO, WORLD!');
  });

  it('uppercases letters and leaves digits unchanged', () => {
    assert.equal(toUpper('abc123'), 'ABC123');
  });

  it('returns empty string unchanged', () => {
    assert.equal(toUpper(''), '');
  });
});
