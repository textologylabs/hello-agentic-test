export default function capitalize(str) {
  if (str === '') throw new Error('Input required');
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
