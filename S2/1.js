// FUNCTIE ARROW

// un arrow function primeste o lista de argumente si are un corp

// let sayHello = (name) => {
//   return `Hello, ${name}!`;
// };

let sayHello = (name) => `Hello, ${name}!`;

console.log(sayHello(process.argv[0])); // 0 -> calea catre interpreter
console.log(sayHello(process.argv[1])); // 1 -> calea catre script
console.log(sayHello(process.argv[2])); // 2 -> apelarea argumentului din linia de comanda

// 1. Implemetează o funcție arrow care
//primește ca parametru un array de string și îmi returnează un singur string o
//bținut prin concatenarea string-urilor din array-ul primit ca parametru.
let cerinta1 = (strings) => {
  let result = "";
  for (let i = 0; i < strings.length; i++) result = result + strings[i];
  return result;
};
let args = process.argv.slice(2);
console.log(cerinta1(args));
