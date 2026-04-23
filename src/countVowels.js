const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (VOWELS.has(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

export default countVowels;
