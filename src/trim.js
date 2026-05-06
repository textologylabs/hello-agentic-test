const WHITESPACE = new Set([' ', '\t', '\n', '\r', '\f', '\v']);

function trim(str) {
  let start = 0;
  let end = str.length - 1;
  while (start <= end && WHITESPACE.has(str[start])) start++;
  while (end >= start && WHITESPACE.has(str[end])) end--;
  return str.slice(start, end + 1);
}

export default trim;
