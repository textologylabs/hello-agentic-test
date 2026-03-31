import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greetings.js';

// PAT-1: Casual greeting
test('greet returns casual greeting', () => {
  assert.equal(greet('Bob', 'casual'), 'Hey Bob!');
});

// PAT-2: Formal greeting
test('greet returns formal greeting', () => {
  assert.equal(greet('Alice', 'formal'), 'Good day, Alice. It is a pleasure.');
});

// PAT-3: Pirate greeting
test('greet returns pirate greeting', () => {
  assert.equal(greet('Charlie', 'pirate'), 'Ahoy, Charlie! Shiver me timbers!');
});

// PAT-4: Default mode (undefined)
test('greet defaults to casual when mode is undefined', () => {
  assert.equal(greet('Dave'), 'Hey Dave!');
});

// PAT-5: Default mode (null)
test('greet defaults to casual when mode is null', () => {
  assert.equal(greet('Dave', null), 'Hey Dave!');
});

// PAT-6: Unknown mode throws
test('greet throws for unknown mode', () => {
  assert.throws(
    () => greet('Eve', 'unknown'),
    { message: 'Unknown mode: unknown' }
  );
});
