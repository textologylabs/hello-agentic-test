import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { greet } from './index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

describe('CLI', () => {
  it('running with no args prints Hello, World!', () => {
    const result = spawnSync(process.execPath, [join(__dirname, 'index.js')], { encoding: 'utf8' });
    assert.equal(result.stdout, 'Hello, World!\n');
    assert.equal(result.status, 0);
  });
});
