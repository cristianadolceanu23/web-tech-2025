const orderCoffee = (type) => {
  const types = {
    REGULAR: "REGULAR",
    SPECIAL: "SPECIAL",
  };

  if (Object.values(types).indexOf(type) === -1) {
    throw new Error("coffee error");
  } else {
    console.log(`preparing ${type} coffee`);
  }
};

try {
  orderCoffee("REGULAR");
  orderCoffee("SWEET_COFFEE_NO_SUGAR");
} catch (err) {
  console.log(err);
}

// implementați funcția increaseSalary care primește ca parametrii un array de salarii și un număr reprezentând procentul cu care se vor mări (ex 10). Funcția aruncă excepții dacă primul parametru nu este un array sau al doilea parametru nu este un număr.

const increaseSalary = (salaries, percentage) => {
  // verific daca primul parametru este un array
  if (!Array.isArray(salaries)) {
    throw new Error("Primul parametru trebuie sa fie un array de salarii");
  }

  // verific daca al doilea parametru este un numar
  if (typeof percentage !== "number") {
    throw new Error("Al doilea parametru trebuie sa fie un numar");
  }

  // returnez un nou array cu salariile marite
  // aplic formula: salariu curent + (salariu curent * procent / 100)
  return salaries.map((salary) => {
    return salary + (salary * percentage) / 100;
  });
};

// Datele de test
const salariesList = [1000, 2000, 3500];

try {
  // Test 1: Cazul fericit - marire cu 10%
  const increased = increaseSalary(salariesList, 10);
  console.log("Salarii marite:", increased);

  // Test 2: Cazul de eroare (decomenteaza linia de mai jos pentru a testa exceptia)
  // increaseSalary("nu sunt un array", 10)
} catch (err) {
  // prind eroarea si o afisez in consola
  console.log("Eroare:", err.message);
}
