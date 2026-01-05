// definesc constanta pentru cursul valutar
const cursEuro = 4.97

// definesc functia care face conversia
const convertesteInEuro = (sumaRon) => {
    // impart suma la curs pentru a afla valoarea in euro
    return sumaRon / cursEuro
}

// export constanta si functia pentru a fi folosite in alte fisiere
export { cursEuro, convertesteInEuro }