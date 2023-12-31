/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
  rectangleArea = l1 * l2;
};

area(7, 9);

//console.log(rectangleArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (int1, int2) {
  if (int1 !== int2) {
    crazySumRes = int1 + int2;
  } else {
    crazySumRes = (int1 + int2) * 3;
  }
  return crazySumRes;
};

//crazySum(12, 24);
crazySum(22, 22);

//console.log(crazySumRes);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (l1) {
  if (l1 >= 0) {
    if (l1 < 19) {
      crazyDiffRes = 19 - l1;
    } else if (li === 19) {
      crazyDiffRes = 19;
    } else {
      crazyDiffRes = (l1 - 19) * 3;
    }
  } else {
    l1 = Math.abs(l1);
    if (l1 < 19) {
      crazyDiffRes = 19 - l1;
    } else if (l1 === 19) {
      crazyDiffRes = 19;
    } else {
      crazyDiffRes = l1 - 19;
    }
  }
  return crazyDiffRes;
};

crazyDiff(-3);

// console.log(crazyDiffRes);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    bouandaryRes = "true";
  } else {
    bouandaryRes = "false";
  }
  return bouandaryRes;
};

boundary(77);

//console.log(bouandaryRes);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let str = "EPICODE is awesome";
const epify = function (str) {
  if (str.indexOf === "EPICODE ") {
    epifyStr = str;
  } else {
    epifyStr = "EPICODE " + str;
  }
  return epifyStr;
};

epify(str);

//console.log(epifyStr);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (int) {
  if (int % 3 === 0 || int % 7 === 0) {
    checkIs = "good";
  } else {
    checkIs = "bad";
  }
};

check3and7(13);

//console.log("The check is " + checkIs);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (str) {
  revStr = str.split("").reverse().join("");

  return revStr;
};

reverseString("osammot");

//console.log(revStr);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
