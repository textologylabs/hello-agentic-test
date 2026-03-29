import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs } from './cli.js';

describe('parseArgs()', () => {
  it('PAT-7: no arguments returns defaults', () => {
    assert.deepEqual(parseArgs([]), { name: 'World', mode: 'casual', help: false });
  });

  it('PAT-8: name only', () => {
    assert.deepEqual(parseArgs(['Captain']), { name: 'Captain', mode: 'casual', help: false });
  });

  it('PAT-9: mode flag with name', () => {
    assert.deepEqual(parseArgs(['--mode', 'formal', 'Captain']), { name: 'Captain', mode: 'formal', help: false });
  });

  it('PAT-10: help flag', () => {
    assert.deepEqual(parseArgs(['--help']), { name: 'World', mode: 'casual', help: true });
  });

  it('mode flag before name', () => {
    assert.deepEqual(parseArgs(['--mode', 'pirate', 'Captain']), { name: 'Captain', mode: 'pirate', help: false });
  });

  it('name before mode flag', () => {
    assert.deepEqual(parseArgs(['Captain', '--mode', 'formal']), { name: 'Captain', mode: 'formal', help: false });
  });

  it('unknown flags are ignored', () => {
    assert.deepEqual(parseArgs(['--unknown', 'Captain']), { name: 'Captain', mode: 'casual', help: false });
  });
});
