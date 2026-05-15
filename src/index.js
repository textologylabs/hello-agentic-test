#!/usr/bin/env node

import { fileURLToPath } from 'node:url';

export function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const name = process.argv[2] || 'World';
  console.log(`Hello, ${name}!`);
}
