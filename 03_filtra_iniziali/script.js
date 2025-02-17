/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const searchByLetter = (arr, letter) => {
    const finder = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++){
        const currentLetter = arr[i].toLowerCase();
        if(currentLetter[0] == letter){
            finder[j] = currentLetter;
            j++;
        }
    }
    return finder;
}

const userLetter = prompt("inserisci l'iniziale da cercare");
console.log(searchByLetter(names, userLetter));


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]