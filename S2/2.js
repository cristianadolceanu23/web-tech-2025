// FUNCTIE CLASICA

function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
  } else {
    return true;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

// 2. Implementează o funcție care returnează numărul de caractere diferite între
//două string-uri de aceeași lungime primite ca parametri.
//Dacă string-urile primite nu sunt de aceeași lungime, funcția va returna -1.

function diffchar(str1, str2) {
  if (str1.length !== str2.length) {
    return -1;
  } else {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) count++;
    }
    return count;
  }
}

console.log(diffchar("ana", "are")); // 2
console.log(diffchar("abc", "abc")); // 0
console.log(diffchar("test", "text")); // 1
console.log(diffchar("ana", "anaaa")); // -1 (lungimi diferite)
