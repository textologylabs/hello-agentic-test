/**
 * Returns a greeting string for the given name and mode.
 * @param {string} name
 * @param {'formal'|'casual'|'pirate'|null|undefined} mode
 * @returns {string}
 */
export function greet(name, mode) {
  const resolved = mode == null ? 'casual' : mode;

  switch (resolved) {
    case 'formal':
      return `Good day, ${name}. It is a pleasure.`;
    case 'casual':
      return `Hey ${name}!`;
    case 'pirate':
      return `Ahoy, ${name}! Shiver me timbers!`;
    default:
      throw new Error(`Unknown mode: ${resolved}`);
  }
}
