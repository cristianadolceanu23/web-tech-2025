const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

if (process.argv.length < 3) {
  console.log("not enough params");
} else {
  console.log(checkPrime(parseInt(process.argv[2])));
}

// 5. Implementează o funcție care calculează elementul de un anumit ordin al
// șirului lui Fibonacci, primind acest ordin ca parametru de linie de comandă.
const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

if (process.argv.length < 3) {
  console.log("not enough params");
} else {
  console.log(fib(parseInt(process.argv[2])));
}
