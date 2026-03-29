// CLI argument parser
// Usage: parseArgs(process.argv.slice(2)) => { name, mode, help }

export function parseArgs(argv) {
  let name = 'World';
  let mode = 'casual';
  let help = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help') {
      help = true;
    } else if (arg === '--mode') {
      if (i + 1 < argv.length) {
        mode = argv[++i];
      }
    } else if (!arg.startsWith('--')) {
      name = arg;
    }
  }

  return { name, mode, help };
}
