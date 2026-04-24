export default function greet(name, opts = {}) {
  if (!name) throw new Error('Name required');
  const greeting = `Hello, ${name}!`;
  return opts.upper ? greeting.toUpperCase() : greeting;
}
