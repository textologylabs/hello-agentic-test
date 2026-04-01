/**
 * Returns a greeting string for the given name and mode.
 * @param {string} name
 * @param {'formal'|'casual'|'pirate'|null|undefined} mode - defaults to 'casual'
 * @returns {string}
 */
export function greet(name, mode) {
  const resolvedMode = (mode == null) ? 'casual' : mode;

  switch (resolvedMode) {
    case 'casual':
      return `Hey ${name}!`;
    case 'formal':
      return `Good day, ${name}. It is a pleasure. How do you do?`;
    case 'pirate':
      return `Ahoy, ${name}! Shiver me timbers!`;
    default:
      throw new Error(`Unknown mode: ${resolvedMode}`);
  }
}
