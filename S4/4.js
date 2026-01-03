String.prototype.capitalizedWords = function () {
  return this.replace(/\b[a-z]/g, (match) => match.toUpperCase());
};

console.log("these words will be capitalized".capitalizedWords());

// implementați metoda 'times' pe tipul Number, astfel încât 3.times(() => {}) să execute funcția de 3 ori.

Number.prototype.times = function (callback) {
  for (let i = 0; i < this; i++) {
    callback(i);
  }
};

console.log("--- Exemplu cu variabila ---");
const count = 3;
count.times(() => {
  console.log("functia se executa");
});

// Aici am adaugat punct si virgula la final
console.log("--- Exemplu cu index ---");

// Acum linia care incepe cu paranteza este sigura
(4).times((index) => {
  console.log(`sunt la iteratia ${index}`);
});
