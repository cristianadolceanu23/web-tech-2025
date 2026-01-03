const getFilteredObjects = (array, object) => {
  return array.filter((element) => {
    let result = false;
    Object.keys(object).forEach((key) => {
      if (!element[key] || element[key] !== object[key]) {
        result = true;
      }
    });
    return result;
  });
};

const laptops = [
  {
    brand: "HP",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Lenovo",
    processor: "i5",
    ram: 16,
  },
  {
    brand: "Acer",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Asus",
    processor: "i7",
    ram: 8,
  },
];

const result = getFilteredObjects(laptops, { processor: "i5", ram: 8 });
console.log("result ", result);

// scrieți o funcție care primește un array de obiecte și un string și returnează array-ul sortat după cheia specificată prin string.

const laptop = [
  {
    brand: "HP",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Lenovo",
    processor: "i5",
    ram: 16,
  },
  {
    brand: "Acer",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Asus",
    processor: "i7",
    ram: 8,
  },
];

const sortObjectsByKey = (array, key) => {
  // creez o copie a array-ului pentru a nu modifica datele originale
  return [...array].sort((a, b) => {
    // compar valorile pentru a determina ordinea crescatoare
    if (a[key] < b[key]) {
      return -1; // a vine inaintea lui b
    }
    if (a[key] > b[key]) {
      return 1; // b vine inaintea lui a
    }
    return 0; // valorile sunt egale
  });
};

// apelez functia pentru a sorta dupa cheia 'brand'
const results = sortObjectsByKey(laptop, "brand");

console.log(results);
