import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import greet from './greet.js';

describe('greet', () => {
  it("greet('Alice') returns 'Hello, Alice!'", () => {
    assert.equal(greet('Alice'), 'Hello, Alice!');
  });

  it("greet('Alice', { upper: true }) returns 'HELLO, ALICE!'", () => {
    assert.equal(greet('Alice', { upper: true }), 'HELLO, ALICE!');
  });

  it("greet('alice', { upper: true }) returns 'HELLO, ALICE!' (input case doesn't matter)", () => {
    assert.equal(greet('alice', { upper: true }), 'HELLO, ALICE!');
  });

  it("greet('') throws Error 'Name required'", () => {
    assert.throws(() => greet(''), { message: 'Name required' });
  });

  it("greet('', { upper: true }) throws Error 'Name required' (option doesn't bypass validation)", () => {
    assert.throws(() => greet('', { upper: true }), { message: 'Name required' });
  });
});
