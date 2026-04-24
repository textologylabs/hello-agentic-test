export default function toUpper(str) {
  return str.replace(/[a-z]/g, c => c.toUpperCase());
}
