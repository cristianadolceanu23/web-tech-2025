// Dat  fiind un array de numere scrieți o funcție pentru a calcula media lor folosind  reduce?

const numbers = [10, 20, 30, 40, 50];

const calculateMean = (array) => {
  // verific daca array-ul este gol pentru a evita impartirea la zero
  if (array.length === 0) {
    return 0;
  }

  // calculez suma tuturor elementelor folosind reduce
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // returnez media impartind suma la lungimea array-ului
  return sum / array.length;
};

// apelez functia pentru a calcula media
const result = calculateMean(numbers);

console.log(result);
