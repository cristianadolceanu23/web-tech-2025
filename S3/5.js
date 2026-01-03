const sampleDictionary = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
];

const sampleText = `
    best
    read
    on
    windy
    nights
`;
const checkAcrostic = (text, dictionary) => {
  const candidate = text
    .split("\n")
    .filter((e) => e)
    .map((e) => e.trim())
    .map((e) => e[0])
    .join("");

  return dictionary.indexOf(candidate) !== -1;
};

console.log(checkAcrostic(sampleText, sampleDictionary));

// implementați cenzurarea unui text printr-o funcție. Funcția primește un șir de caractere și un dicționar sub forma unui array. De exemplu pentru șirul "javascript este minunat" și dicționarul ["este"] funcția va produce "javascript e**e minunat".

const cenzureazaText = (text, dictionar) => {
  // Impart textul in cuvinte folosind spatiul ca separator
  const cuvinte = text.split(" ");

  const textCenzurat = cuvinte.map((cuvant) => {
    // Verific daca cuvantul curent se afla in lista de cuvinte interzise
    if (dictionar.includes(cuvant)) {
      // Daca cuvantul are mai mult de 2 litere, aplic cenzura
      if (cuvant.length > 2) {
        return (
          cuvant[0] + "*".repeat(cuvant.length - 2) + cuvant[cuvant.length - 1]
        );
      }
      // Daca cuvantul e prea scurt, nu are ce masca la mijloc si il returneaza
      return cuvant;
    }
    // Daca nu e in dictionar, il returneaza neschimbat
    return cuvant;
  });

  // Recompun textul
  return textCenzurat.join(" ");
};

const textInput = "javascript este minunat";
const dictionarInterzis = ["este", "rau"];

console.log(cenzureazaText(textInput, dictionarInterzis));
