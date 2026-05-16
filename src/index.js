#!/usr/bin/env node

import { fileURLToPath } from 'node:url';

export function countWords(str) {
  return str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
}

export function firstWord(str) {
  const trimmed = str.trim();
  if (trimmed === '') return '';
  return trimmed.split(/\s+/)[0];
}

export function repeatStr(str, n) {
  const times = n < 0 ? 0 : n;
  return str.repeat(times);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const name = process.argv[2] || 'World';
  console.log(`Hello, ${name}!`);
}
