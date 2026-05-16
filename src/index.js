#!/usr/bin/env node

import { fileURLToPath } from 'node:url';

export function countWords(str) {
  return str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const name = process.argv[2] || 'World';
  console.log(`Hello, ${name}!`);
}
