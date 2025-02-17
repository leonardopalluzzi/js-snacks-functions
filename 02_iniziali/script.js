/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const initialList = arr => {
    const initialArray = [];
    for(let i = 0; i < arr.length; i++){
        const firstLetter = arr[i];
        initialArray.push(firstLetter[0]);
    }
    return initialArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initialList(names));

// SOLUZIONE ABBREVIATA
const shortInitialList = arr => arr.map((index) => index[0]).join('');

console.log(initialList(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]