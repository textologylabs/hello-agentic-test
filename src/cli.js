/**
 * Parses CLI arguments for the greeting CLI.
 * @param {string[]} argv - process.argv.slice(2)
 * @returns {{ name: string, mode: string, help: boolean }}
 */
export function parseArgs(argv) {
  let name = 'World';
  let mode = 'casual';
  let help = false;

  let i = 0;
  while (i < argv.length) {
    const arg = argv[i];
    if (arg === '--help') {
      help = true;
    } else if (arg === '--mode') {
      i++;
      if (i < argv.length) {
        mode = argv[i];
      }
    } else if (!arg.startsWith('--')) {
      name = arg;
    }
    i++;
  }

  return { name, mode, help };
}
