console.log("Hello JS!");
let age = 37;
console.log(age);

// A voir avec Stéphane
// nomBloc (parametrage ) {
    // if (age >= ageMin) {
    // }
    // while (k < 10){

    // }
// }
// console.log(parametrage)

//La variable "let" (sa valeur peut être modifiée autant de fois qu'on le souhaite)
let animal = "chat";
console.log(animal);
animal = "cat";
console.log(animal);
animal = "bird";
console.log(animal);

// La constante "const"(valeur ne peut pas être modifiée)
const deux = 2;
console.log(deux);

// Number (nombre entier ou décimal)
// const deux = 2;
// console.log(deux);
let quantite = 3;
console.log(quantite);
const prix = 1.15;
console.log(prix);

// String (chaîne de caractères)
// const prenom = "John";
// console.log(prenom);
let repas = "pizza";
console.log(repas);
const criDuChien = "aboiement";
console.log(criDuChien);

// Boolean (booléen)
let isAdult = true;
let isTaskDone = false;
const hasBeenToTokyo = true;
console.log(isAdult);
console.log(isTaskDone);
console.log(hasBeenToTokyo);

{
    {// début du bloc dans lequel age est déclarée
        let age = 37;// début de sa portée
        {
            {

            }
        }
    }// fin du bloc dans lequel age est déclrée = fin de sa portée
}
console.log(age);

//  Affectations et Calculs
// L'opérateur d'affectation simple

let price = 1.17;
// const animal = "dog";
// let isAdult = true;
console.log(price);
// console.log(animal);
// console.log(isAdult);

// Les opérations arithmatiques

//let numberToGuess = 2;// 2
// numberToGuess += 3; // numberToGuess = numberToGuess +3 // 5 
// numberToGuess -= 2; // numberToGuess = numberToGuess -2 // 3
// numberToGuess++; // numberToGuess = numberToGuess +1 // 4 
// numberToGuess *= 10; // numberToGuess = numberToGuess 4*10 // 40
// numberToGuess /= 2; // numberToGuess =  numberToGuess /2 // 20
// numberToGuess %= 7; // numberToGuess = numberToGuess %7 // 6 =>(20/7=2=>2/7=14=>20-14=6)
// numberToGuess--; // numberToGuess = numberToGuess -1 // 5 
// console.log("numberToGuess [2 +3 -2 *10 /2 %7 -1] = ", numberToGuess);// 5

// L'opérateur de concaténation

const prenom = "John";
const nom = "Smith";
const nomComplet = prenom + " " + nom;
console.log("Je m'appelle " + nomComplet);
//  Interpolation=> proche de la concaténation => qui sert à fusionner => créer un 
//string ("backticks"=>apostrophes descendantes=> AltGR+7)en y incrustant des valeurs.
console.log(`Je m'appelle ${prenom} ${nom}, soyez le bienvenu!`);

// Comparaison
//  Les opérateurs d'égalités et d'inégalités

console.log("1 : " + (2 == "2")); // même valeur                                => true  
console.log("2 : " + (2 === "2") ); // même valeur mais type différent          => false
console.log("3 : " + (2 != "2")); // valeur non différente                      => false
console.log("4 : " + (2 !== "2")); // valeur non différente mais type différent => true

// Les opérateurs de comparaison

console.log("3 < 7 is " + (3 < 7));
console.log("8 <= 1 is " + (8 <= 1));
console.log("7 >= 7 is " + (7 >= 7));
console.log("7 > 7 is " + (7 > 7));

//  Conditions 
//  Les opérateurs logiques

// Cas simples ( 2 conditions liées)
console.log("true && true = " + (2 > 1 && 3 <= 3));// true (tout est vrai)
console.log("true && false = " + (2 > 1 && 3 < 3));// false (tout n'est pas vrai)
console.log("true || false = " + (2 > 1 || 3 < 3));// true (au moins est vrai)
console.log("true || false = " + (2 <= 1 || 3 < 3));// false (pas un seul n'est vrai)

//  Cas simples (inversion de conditions)
console.log("!true = " + !(2 > 1)); // false
console.log("!false = " + !(2 <= 1)); // true

//  cas avec parenthèses importantes ( 3 conditions liées)
console.log("true || (true && false) = "+ (true || (true && false)));// true
// étapes : true || (true && false) === true || false === true
console.log("(true || true) && false = "+ ((true || true) && false));// false
// étapes : (true || true) && false === true || true && false;// false

//  L'opérateur ternaire(composé de trois éléments de trois unités)

const ageJohn = 20;
console.log("John est " + (ageJohn >= 18 ? "majeur" : "mineur") + " en France.");// concaténation
console.log(`John est ${ageJohn >= 21 ? "majeur" : "mineur"} aux Etats-Unis.`);// interpollation

// la variante if/else (si la condition est vrai, sinon)
if (age >= 18) {
    console.log("la personne est majeure.");
} else {
    console.log("la personne est mineure.");

}
 
//  la variante if /elseif (si une condition est vraie, sinon si une autre condition...)

if (age >= 100) {
    console.log("la personne est centenaire.");
} else if (age >= 80) {
    console.log("la personne est au moins octogénaire.");
} else if (age >= 60) {
    console.log("la personne est au moins sexagénaire.");
} else if (age >= 40) {
    console.log("la personne est au moins quadragénaire.");
}

//  la variante complète if/elseif/else (si la condition est vraie, sinon 
// si une autre condition, sinon si..., sinon)

if (age >= 100) {
    console.log("la personne est centenaire.");
} else if (age >= 80) {
    console.log("la personne est au moins octogénaire.");
} else if (age >= 60) {
    console.log("la personne est au moins sexagénaire.");
} else if (age >= 40) {
    console.log("la personne est au moins quadragénaire.");
} else {
    console.log("la personne n'est pas encore quadragénaire.");
}

let action = " virement";
switch (action){
    case "retrait":
        //instructions de retrait
        break;

    case "virement":
        //  instructions de virement
        break;

    case "cloturerCompte": 
        //  instructions de cloture de compte
        break;
    default:
            
}   

let numberToGuess = 7;
let opération = "foisDeuxPlusTrois";

switch (opération) {
    case "plusUn":
        numberToGuess++;
        break

    case "foisDeuxPlusTrois":
        numberToGuess *= 2;
        break
     
    case "plusTrois":
        numberToGuess += 3;
        break
        
    case "foisZero":
    default:
        numberToGuess = 0;
        break;   
}

//  le for "de a à b inclus"
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i }`);
       
}

// le for "n fois"
for (let i = 3; i < 3; i++) {
    console.log("Je serai un bon développeur");
    
}

//  le for " de a à b inclus avec un pas différent de 1"
for (let i = 3; i <= 10; i +=3) {
    console.log(`${i} est inférieur ou égal à 10 et est divisible par 3`);
}

// le for "inversé" (on décreémente au lieu d'incrémenter)
for (let i = 5; i > 0; i--) {
    console.log(`${i}...`);
}
console.log("Bonne année !");

// while classique 
let kAge = 12;
while (kAge < 18) {
    console.log(`J'ai maintenant ${kAge} ans ...`);
    kAge++;
}
console.log(`J'ai finalement ${kAge} ans.`);
