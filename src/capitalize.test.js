import { test } from 'node:test';
import assert from 'node:assert/strict';
import capitalize from './capitalize.js';

test('capitalize lowercase word', () => {
  assert.equal(capitalize('hello'), 'Hello');
});

test('capitalize all-uppercase word', () => {
  assert.equal(capitalize('HELLO'), 'Hello');
});

test('capitalize mixed-case word', () => {
  assert.equal(capitalize('hELLO'), 'Hello');
});

test('capitalize single character', () => {
  assert.equal(capitalize('a'), 'A');
});

test('capitalize empty string throws', () => {
  assert.throws(() => capitalize(''), { message: 'Input required' });
});
