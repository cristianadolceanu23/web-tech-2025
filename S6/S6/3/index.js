// selectez toate randurile din corpul tabelului (fara antet)
let rows = document.querySelectorAll("tbody tr")

// parcurg lista de randuri
for (let i = 0; i < rows.length; i++) {
    // verific daca este primul rand (index 0)
    if (i === 0) {
        rows[i].style.backgroundColor = 'blue'
    }
    // verific daca este ultimul rand
    else if (i === rows.length - 1) {
        rows[i].style.backgroundColor = 'green'
    }
    // verific daca este rand impar
    // indexul 0, 2, 4 corespunde randurilor 1, 3, 5
    else if (i % 2 === 0) {
        rows[i].style.backgroundColor = 'violet'
    }
}