/**
 * Greeting module — returns greeting strings for various modes.
 * @param {string} name
 * @param {string|undefined|null} mode - 'formal' | 'casual' | 'pirate' (defaults to 'casual')
 * @returns {string}
 */
export function greet(name, mode) {
  const resolved = (mode === undefined || mode === null) ? 'casual' : mode;

  switch (resolved) {
    case 'casual':
      return `Hey ${name}!`;
    case 'formal':
      return `Good day, ${name}. It is a pleasure. Welcome aboard.`;
    case 'pirate':
      return `Ahoy, ${name}! Shiver me timbers!`;
    default:
      throw new Error(`Unknown mode: ${resolved}`);
  }
}
