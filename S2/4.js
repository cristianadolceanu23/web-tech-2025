// function addToArray() {
//   let args = arguments; // functia primeste un numar variabil de argumente
//   let array = args[0]; // primul parametru reprezinta array-ul in care sa concateneze
//   for (var i = 0; i < args.length; i++) {
//     array.push(args[i]); // urmatorii parametri vor fi adaugati in acest array
//   }
//   return array;
// }

function addToArray(array, ...args) {
  for (var i = 1; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));

// 4. Implementează o funcție care primește ca parametrii două array-uri
//de aceeași lungime și returnează un array cu elementele din cele două
//surse intercalate.
function intercalate(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return -1;
  } else {
    let result = [];
    for (var i = 0; i < arr1.length; i++) {
      result.push(arr1[i]);
      result.push(arr2[i]);
    }
    return result;
  }
}

let a1 = [1, 2, 3];
let a2 = [4, 4, 5];
console.log(intercalate(a1, a2));
