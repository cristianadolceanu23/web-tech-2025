const words = [
  "fox",
  "wolf",
  "snake",
  "crocodile",
  "lion",
  "cat",
  "crocodile",
  "horse",
];

const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords = (words, forbiddenWord, minLength) => {
  const result = words.filter((word) => {
    if (word !== forbiddenWord && word.length >= minLength) {
      return true;
    }
    return false;
  });
  return result;
};

console.log(filterWords(words, forbiddenWord, minLength));

//  folosiți metodele map și filter pentru a procesa un array de numere reprezentând ani de naștere obținând vârstele peste 18 ani.

const birthYears = [2000, 2012, 1985, 2009, 1995, 2020, 1970];

const getAdultAges = (years) => {
  const currentYear = new Date().getFullYear(); // 2026

  // 1. MAP: Transform fiecare an de nastere in varsta curenta
  const ages = years.map((year) => {
    return currentYear - year;
  });

  // 2. FILTER: Pastrez doar varstele mai mari de 18 ani
  const validAges = ages.filter((age) => {
    return age > 18;
  });

  return validAges;
};

console.log(getAdultAges(birthYears));
