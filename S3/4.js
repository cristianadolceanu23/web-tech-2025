const sampleArray = [1, 2, 3, 4, 5];

const map = (array, transformation) => {
  const result = [];
  for (const element of array) {
    result.push(transformation(element));
  }
  return result;
};
console.log(map(sampleArray, (x) => x * 2));

// reimplementați metoda reduce(reduceleft) ca o funcție globală.

const SampleArray = [1, 2, 3, 4, 5];

const reduce = (array, callback, initialValue) => {
  // 1. initializez acumulatorul cu valoarea de start
  let accumulator = initialValue;

  // 2. parcurg fiecare element din array
  for (const element of array) {
    // 3. actualizez acumulatorul pe baza rezultatului functiei callback
    accumulator = callback(accumulator, element);
  }

  // 4. returnez rezultatul final
  return accumulator;
};

console.log(reduce(SampleArray, (acc, x) => acc + x, 0));
