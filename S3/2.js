const getTotalArea = (squareDimensions) => {
  return squareDimensions
    .map((side) => {
      return side * side;
    })
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

const squareDimensions = [3, 5, 12, 3, 5, 3];

const result = getTotalArea(squareDimensions);
console.log("result: ", result);

// Implementați o funcție care primește ca parametrii un array de numere și un număr și returnează suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.

const getDivisibleSum = (numbers, divisor) => {
  return numbers
    .map((number) => {
      // Daca numarul se imparte exact, il returnez pe el.
      // Daca nu, returnez 0 (ca sa nu afecteze suma).
      return number % divisor === 0 ? number : 0;
    })
    .reduce((sum, current) => {
      return sum + current;
    }, 0);
};

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 3;

const results = getDivisibleSum(inputNumbers, n);
console.log("result: ", results);
