export function greet(name, mode) {
  const resolvedMode = mode == null ? 'casual' : mode;
  if (resolvedMode === 'casual') return `Hey ${name}!`;
  if (resolvedMode === 'formal') return `Good day, ${name}. It is a pleasure.`;
  if (resolvedMode === 'pirate') return `Ahoy, ${name}! Shiver me timbers!`;
  throw new Error(`Unknown mode: ${mode}`);
}
