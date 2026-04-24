import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './index.js';

describe('greet', () => {
  it("greet('Alice') returns 'Hello, Alice!'", () => {
    assert.equal(greet('Alice'), 'Hello, Alice!');
  });

  it("greet(undefined) returns 'Hello, World!'", () => {
    assert.equal(greet(undefined), 'Hello, World!');
  });

  it("greet('') returns 'Hello, World!'", () => {
    assert.equal(greet(''), 'Hello, World!');
  });
});
