import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greetings.js';

describe('greet()', () => {
  // PAT-1
  it('returns casual greeting', () => {
    assert.equal(greet('Bob', 'casual'), 'Hey Bob!');
  });

  // PAT-2 / PAT-7 (formal closing phrase confirmed by Johnny: "Welcome aboard")
  it('returns formal greeting', () => {
    assert.equal(greet('Alice', 'formal'), 'Good day, Alice. It is a pleasure. Welcome aboard.');
  });

  // PAT-3
  it('returns pirate greeting', () => {
    assert.equal(greet('Charlie', 'pirate'), 'Ahoy, Charlie! Shiver me timbers!');
  });

  // PAT-4
  it('defaults to casual when mode is undefined', () => {
    assert.equal(greet('Dave'), 'Hey Dave!');
  });

  // PAT-5
  it('defaults to casual when mode is null', () => {
    assert.equal(greet('Dave', null), 'Hey Dave!');
  });

  // PAT-6
  it('throws Error for unknown mode', () => {
    assert.throws(
      () => greet('Eve', 'unknown'),
      (err) => err instanceof Error && err.message === 'Unknown mode: unknown'
    );
  });
});
