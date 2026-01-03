// Implementați o funcție care face deep clone unui obiect. Funcția creează o copie a întregii structuri a obiectului, la o adâncime arbitrară.

const deepClone = (obj) => {
  // pasul 1: verific daca valoarea este null sau nu este un obiect
  // daca e numar, string, boolean sau null, o returnez direct (nu trebuie clonata)
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // pasul 2: tratez cazul in care obiectul este un Array
  if (Array.isArray(obj)) {
    // creez un nou array si apelez recursiv deepClone pentru fiecare element
    return obj.map((element) => deepClone(element));
  }

  // pasul 3: tratez cazul unui Obiect standard
  // initializez un obiect gol
  const clone = {};

  // iterez prin toate cheile obiectului original
  for (let key in obj) {
    // verific daca cheia apartine direct obiectului (nu prototipului)
    if (obj.hasOwnProperty(key)) {
      // aici este cheia recursivitatii:
      // asignez noii chei rezultatul apelarii deepClone pe valoarea veche
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
};

// Obiect complex pentru testare (cu array-uri si obiecte imbricate)
const original = {
  nume: "Student",
  note: [10, 9, 8],
  detalii: {
    varsta: 22,
    adresa: {
      oras: "Bucuresti",
      strada: "Victoriei",
    },
  },
};

// creez copia
const copie = deepClone(original);

// modific copia pentru a demonstra ca originalul ramane intact
copie.detalii.adresa.oras = "Cluj";
copie.note[0] = 5;

console.log("--- Original ---");
console.log(original);

console.log("--- Copie Modificata ---");
console.log(copie);
