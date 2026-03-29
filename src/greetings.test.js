import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greetings.js';

describe('greet()', () => {
  it('PAT-1: returns casual greeting', () => {
    assert.equal(greet('Bob', 'casual'), 'Hey Bob!');
  });

  it('PAT-2: returns formal greeting', () => {
    assert.equal(greet('Alice', 'formal'), 'Good day, Alice. It is a pleasure.');
  });

  it('PAT-3: returns pirate greeting', () => {
    assert.equal(greet('Charlie', 'pirate'), 'Ahoy, Charlie! Shiver me timbers!');
  });

  it('PAT-4: defaults to casual when mode is undefined', () => {
    assert.equal(greet('Dave'), 'Hey Dave!');
  });

  it('PAT-5: defaults to casual when mode is null', () => {
    assert.equal(greet('Dave', null), 'Hey Dave!');
  });

  it('PAT-6: throws on unknown mode', () => {
    assert.throws(
      () => greet('Eve', 'unknown'),
      { message: 'Unknown mode: unknown' }
    );
  });
});
