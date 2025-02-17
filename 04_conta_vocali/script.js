/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vowels = string => {
    let j = 0;
    string.toLowerCase();
    for (let i = 0; i < string.length; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
            j++
        }
    }
    return j;
}

console.log(`nella parola inserita sono presenti ${vowels(word)} vocali`);



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)