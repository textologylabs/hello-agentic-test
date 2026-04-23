export default function normalizeEmail(email) {
  if (email === '') throw new Error('Input required');

  const trimmed = email.trim();

  const atIndex = trimmed.indexOf('@');
  if (atIndex === -1) throw new Error('Invalid email');

  const local = trimmed.slice(0, atIndex).toLowerCase().replace(/\+.*$/, '').replace(/\.{2,}/g, '.');
  const domain = trimmed.slice(atIndex + 1).toLowerCase();

  return `${local}@${domain}`;
}
