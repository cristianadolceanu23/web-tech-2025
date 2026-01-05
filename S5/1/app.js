// import elementele necesare din modulul currency.js
import { cursEuro, convertesteInEuro } from "./currency.js";

// definesc o suma de test
const sumaRon = 100;

// afisez constanta importata
console.log(`Cursul de azi este: ${cursEuro} RON/EUR`);

// apelez functia importata si salvez rezultatul
const rezultat = convertesteInEuro(sumaRon);

// afisez rezultatul formatat cu 2 zecimale
console.log(`${sumaRon} RON inseamna ${rezultat.toFixed(2)} EUR`);
