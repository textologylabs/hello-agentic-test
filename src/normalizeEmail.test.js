import { test } from 'node:test';
import assert from 'node:assert/strict';
import normalizeEmail from './normalizeEmail.js';

test("normalizeEmail('User@Example.COM') returns 'user@example.com'", () => {
  assert.equal(normalizeEmail('User@Example.COM'), 'user@example.com');
});

test("normalizeEmail('  alice@example.com  ') returns 'alice@example.com'", () => {
  assert.equal(normalizeEmail('  alice@example.com  '), 'alice@example.com');
});

test("normalizeEmail('bob+promo@example.com') returns 'bob@example.com'", () => {
  assert.equal(normalizeEmail('bob+promo@example.com'), 'bob@example.com');
});

test("normalizeEmail('bob+a+b+c@example.com') returns 'bob@example.com' (first plus only)", () => {
  assert.equal(normalizeEmail('bob+a+b+c@example.com'), 'bob@example.com');
});

test("normalizeEmail('a..b@example.com') returns 'a.b@example.com'", () => {
  assert.equal(normalizeEmail('a..b@example.com'), 'a.b@example.com');
});

test("normalizeEmail('bad-no-at') throws Error 'Invalid email'", () => {
  assert.throws(() => normalizeEmail('bad-no-at'), { message: 'Invalid email' });
});

test("normalizeEmail('') throws Error 'Input required'", () => {
  assert.throws(() => normalizeEmail(''), { message: 'Input required' });
});
