import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs } from './cli.js';

describe('parseArgs', () => {
  it('PAT-7: no arguments returns defaults', () => {
    assert.deepStrictEqual(parseArgs([]), { name: 'World', mode: 'casual', help: false });
  });

  it('PAT-8: name only', () => {
    assert.deepStrictEqual(parseArgs(['Captain']), { name: 'Captain', mode: 'casual', help: false });
  });

  it('PAT-9: --mode flag with name', () => {
    assert.deepStrictEqual(parseArgs(['--mode', 'formal', 'Captain']), { name: 'Captain', mode: 'formal', help: false });
  });

  it('PAT-10: --help flag', () => {
    assert.deepStrictEqual(parseArgs(['--help']), { name: 'World', mode: 'casual', help: true });
  });

  it('name before --mode flag', () => {
    assert.deepStrictEqual(parseArgs(['Captain', '--mode', 'pirate']), { name: 'Captain', mode: 'pirate', help: false });
  });

  it('unknown flags are ignored', () => {
    assert.deepStrictEqual(parseArgs(['--unknown', 'Alice']), { name: 'Alice', mode: 'casual', help: false });
  });
});
