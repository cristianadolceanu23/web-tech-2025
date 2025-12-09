// FRECVENTE RELATIVE

const sampleString = "The quick brown fox jumps over the lazy dog";

const getCounts = (text) => {
  const words = text.split(" ");
  const result = {};
  for (let word of words) {
    if (word in result) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  for (let word in result) {
    result[word] /= words.length;
  }
  return result;
};

console.log(getCounts(sampleString));

// 6. Implementează o funcție care calculează frecvențele relative de apariție
// a unor litere într-un text, excluzând caracterul pentru spațiu.
const litere = (text) => {
  const result = {};
  let total = 0;
  for (let ch of text) {
    if (ch === " ") {
      continue;
    }
    total++;
    if (ch in result) {
      result[ch]++;
    } else {
      result[ch] = 1;
    }
  }
  for (let ch in result) {
    result[ch] /= total;
  }
  return result;
};

console.log(litere(sampleString));
