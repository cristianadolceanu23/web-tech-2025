function fibGen() {
  const cache = [1, 1];
  const fib = (index) => {
    if (index < cache.length) {
      console.log("found " + index);
      return cache[index];
    } else {
      console.log("calculated " + index);
      cache[index] = fib(index - 1) + fib(index - 2);
      return cache[index];
    }
  };
  return fib;
}

const fib = fibGen();
console.log(fib(1));
console.log(fib(5));
console.log(fib(3));

// implementați o variantă recursiva a unei funcții de exponențiere. Atât rezultatele finale cât și cele intermediare vor fi memoizate.

const powerGen = (base) => {
  // folosesc un obiect pentru cache, unde cheia este exponentul
  // initializez cu cazul de baza: baza la puterea 0 este 1
  const cache = {
    0: 1,
  };

  const power = (exponent) => {
    // verific daca am deja rezultatul memorat in cache
    if (cache[exponent] !== undefined) {
      console.log(`found ${base}^${exponent}`);
      return cache[exponent];
    } else {
      console.log(`calculating ${base}^${exponent}`);
      // calculez recursiv folosind formula x^n = x * x^(n-1)
      // salvez rezultatul intermediar in cache inainte de a-l returna
      cache[exponent] = base * power(exponent - 1);
      return cache[exponent];
    }
  };

  return power;
};

// creez o functie specializata pentru puterile lui 2
const powerOfTwo = powerGen(2);

// testez functia
console.log("--- Primul apel: 2^3 ---");
console.log(powerOfTwo(3));

console.log("--- Al doilea apel: 2^5 ---");
console.log(powerOfTwo(5));

console.log("--- Al treilea apel: 2^2 ---");
console.log(powerOfTwo(2));
