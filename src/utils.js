export function sum(a, b) {
  return a + b;
}

export function isEven(value) {
  return Number.isFinite(value) && value % 2 === 0;
}

export function capitalize(text) {
  if (typeof text !== "string") {
    return "";
  }

  if (text.length === 0) {
    return "";
  }

  return text[0].toUpperCase() + text.slice(1);
}
