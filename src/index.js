#!/usr/bin/env node

export function greet(name) {
  const resolved = name || 'World';
  return `Hello, ${resolved}!`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet(process.argv[2]));
}
