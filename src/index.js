#!/usr/bin/env node

// Greeting CLI — entry point
// Usage: node src/index.js [name]

const name = process.argv[2] || 'World';
console.log(`Hello, ${name}!`);
