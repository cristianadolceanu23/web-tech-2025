// function occurences(text, character) {
//   let count = 0;
//   for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === character) count++;
//   }
//   return count;
// }

// function occurences(text, character) {
//   return text.split(character).length - 1;
// }

let occurences = (text, character) => text.split(character).length - 1;

console.log(occurences("sample text", "e"));

// 3. Implementează o funcție care primește ca parametru o listă de numere
// și returnează un array conținând acele numere.

function cerinta3(list) {
  let result = [];
  for (var i = 0; i < list.length; i++) {
    result.push(list[i]);
  }
  return result;
}
console.log(cerinta3([1, 2, 3, 4, 5]));
