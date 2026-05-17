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

export function lastWord(str) {
  const trimmed = str.trim();
  if (trimmed === '') return '';
  const words = trimmed.split(/\s+/);
  return words[words.length - 1];
}

export function repeatStr(str, n) {
  const times = n < 0 ? 0 : n;
  return str.repeat(times);
}

export function capitalizeWords(str) {
  if (str === '') return '';
  return str.split(/(\s+)/).map((part, i) =>
    i % 2 === 0 && part.length > 0
      ? part[0].toUpperCase() + part.slice(1).toLowerCase()
      : part
  ).join('');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const name = process.argv[2] || 'World';
  console.log(`Hello, ${name}!`);
}
