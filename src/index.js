#!/usr/bin/env node

// Greeting CLI — entry point
// Usage: node src/index.js [name] [--mode formal|casual|pirate] [--help]

import { parseArgs } from './cli.js';
import { greet } from './greetings.js';

const { name, mode, help } = parseArgs(process.argv.slice(2));

if (help) {
  console.log(`Usage: greet [name] [--mode formal|casual|pirate] [--help]

Options:
  --mode   Greeting mode (default: casual)
  --help   Show this help message`);
  process.exit(0);
}

try {
  console.log(greet(name, mode));
} catch (err) {
  process.stderr.write(err.message + '\n');
  process.exit(1);
}
