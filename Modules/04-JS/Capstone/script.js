function missingLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentCharCode = str.charCodeAt(i);
    const nextCharCode = str.charCodeAt(i + 1);
    if (nextCharCode - currentCharCode > 1) {
      // There is a missing character between the current and next characters
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return undefined; // No missing character found
}

console.log(missingLetter("abce"));
