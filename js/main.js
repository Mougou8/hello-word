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
console.log("2 : " + (2 === "2")); // même valeur mais type différent          => false
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
console.log("true || (true && false) = " + (true || (true && false)));// true
// étapes : true || (true && false) === true || false === true
console.log("(true || true) && false = " + ((true || true) && false));// false
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
switch (action) {
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
    console.log(`3 x ${i} = ${3 * i}`);

}

// le for "n fois"
for (let i = 3; i < 3; i++) {
    console.log("Je serai un bon développeur");

}

//  le for " de a à b inclus avec un pas différent de 1"
for (let i = 3; i <= 10; i += 3) {
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

//  déclaration de la fonction
function nomDeLaFonction(arg1, arg2, arg3) {
    // logique implémentée
    const result = arg1 * arg2 + arg3;
    //  renvoi d'un resultat
    return result;
}

// appel à la fonction déclarée plus haut
const valeurRenvoyee = nomDeLaFonction(1, 2, 3);

// déclaration de  la fonction getNombreFoisTrois, qui prend en argument 
// un nombre et qui renvoi le triple de ce nombre 
function getNombreFoisTrois(nombre) {
    //  nombre est un argument et une variable locale
    return nombre * 3;// la fonction retourne le résultat du calcul
}

//  appel à la fonction getNombreFoisTrois en lui passant 5 en argument
//  et affectation du résultat reçu dans la constante cinqFois Trois
const cinqFoisTrois = getNombreFoisTrois(5); // cinqFoisTrois = 15
// log de cinqFoisTrois dans la console
console.log("cinqFoisTrois = " + cinqFoisTrois);

// une fonction sans résultat retourné
function logPhraseAvecPointDExclamation(phrase) {
    console.log(`${phrase} !`);
}
logPhraseAvecPointDExclamation("Je serai un bon développeur");

//  une fonction sans argument
function getApproximationPi() {
    return 3.14; // 22/7
}
console.log(`360 deg = 2*pi ~= ${2 * getApproximationPi()} rad`);

//  Une fonction qui appelle d'autres fonctions
// fonction qui retourne le résultat de l'addition de 2 nombres
function getResultatAdditionDe2Nombres(nombre1, nombre2) {
    return nombre1 + nombre2;
}

// fonction qui retourne le résultat de la multiplication de 2 nombres
function getResultatMultiplicationDe2Nombres(nombre1, nombre2) {
    return nombre1 * nombre2;
}

// une fonction qui appelle d'autres fonctions, en fonction de l'opération demandée
// et retourne le résultat reçu de la fonction appelée 
//  note : l'instruction "return" met fin à l'eécution de la fonction 
function getResultatCalculEntre2Nombres(nombre1, operation, nombre2) {
    //  en fonction de l'opération demandée
    switch (operation) {
        //  addition et soustraction (a - b = a + -b)
        case "addition":
            return getResultatAdditionDe2Nombres(nombre1, nombre2);
        case "soustraction":
            return getResultatAdditionDe2Nombres(nombre1, -nombre2);

        //  multiplication et division (a / b = a * 1/b)
        case "multiplication":
            return getResultatMultiplicationDe2Nombres(nombre1, nombre2);
        case "division":
            return getResultatMultiplicationDe2Nombres(nombre1, 1 / nombre2);
        //  opérations non gérées par la fonction
        default:
            console.log(`opération "${operation}" non gérée`);
            return null;
    }
}
console.log(`7 + 2 = ${getResultatCalculEntre2Nombres(7, "addition", 2)}`);
console.log(`6 - 1 = ${getResultatCalculEntre2Nombres(6, "soustraction", 1)}`);
console.log(`3 * 4 = ${getResultatCalculEntre2Nombres(3, "multiplication", 4)}`);
console.log(`10 / 2 = ${getResultatCalculEntre2Nombres(10, "division", 2)}`);
console.log(`2 ** 3 = ${getResultatCalculEntre2Nombres(2, "puissance", 3)}`);

// initialiser un tableau vide
const tableauVide = [];

// créer un tableau indexé qui contient des valeurs fournies(ici 7 nombres)
// et l'affecter à une variable:
const tabNums = [11, 22, 33, 44, 55, 66, 77];

// .push(newElement)=>Ajouter un élément à la fin du tableau
tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);
console.log("tableauVide = ", tableauVide);

//  Récupérer un élément par son index (son emplacement,qui commence par 0)
console.log("tableauVide[1] = ", tableauVide[1]);
// console.log("tableauVide[0] = ", tableauVide[0]);
// console.log("tableauVide[2] = ", tableauVide[2]);

// modifier la valeur de l'élément à l'index 2
tableauVide[2] = "abc";
console.log("tableauVide =", tableauVide);

//  Boucler sur un tableau et appliquer une logique pour chaque élément:
//  Boucler sur un tableau ( de 0 à length-1)
for (let i = 0; i < tableauVide.length; i++) {
    //  récupération de l'élément à l'index i
    const elementTableauVide = tableauVide[i];
    //  log de cet élément 
    console.log("tableauVide[" + i + "] = ", elementTableauVide );
}

// Quelques méthodes utiles
// Une méthode est une fonction qui appartient à une classe(Array)
// On écrit:
// unTableau.uneMethode();

// .push(newElement)=>ajouter un élément à la fin du tableau=> .push(newElement)
tableauVide.push(2);

// .join(séparateur):transforme un tableau en string, en concaténant 
// tous les éléments dans l'ordre et en ajoutant un séparateur 
// entre chaque élément
// tabNums transformé en string avec "_|_" entre chaque élément
console.log(`tabNums.join("_|_") = ${tabNums.join("_|_")}`);

// .includes(elementRecherche): renvoi true/false si lélément 
// est présent ou non dans le tableau
console.log(
    `l'élément ${77} ${tabNums.includes(77) ? "est" : "n'est pas"}
    présent dans le tableau [${tabNums.join("_|_")}]`
);
console.log(
    `l'élément ${42} ${tabNums.includes(42) ? "est" : "n'est pas"}
    présent dans le tableau [${tabNums.join("_|_")}]`
);

// .indexOf(elementRecherche): renvoi l'index de lélément
// rechercheé ( entre 0 et length-1 si trouvé, è1 sinon)
const indexOf77 = tabNums.indexOf(77);
if (indexOf77 != -1) {
    console.log(`L'élément ${77} est à l'index ${indexOf77} dans
    le tableau [${ tabNums.join(", ")}]`);
} else {
    console.log(`L'élément ${77} n'est pas présent dansle tableau
    [${ tabNums.join(", ")}]`);
}

// .slice(indexDebutElInclus,indexFinElExclu): renvoi une copie
// (sans impacter le tableau initial) d'un morceau du tableau
// (attention l'index de début est inclus mais l'index de fin 
// est exclu):
const morceau = tabNums.slice(2, 4);
console.log(`morceau (tabNums.slice(2, 4)) = [${morceau.join(", ")}]`);

// Tableau associatif(contient 0 à n clefs)=>éléments par paires(duos)=>clef/valeur
// chaque clef pointe vers une valeur

// les bases de l'utilisation
// initialisation d'un tableau associatif vide
let tabAssocVide = {};

// Ajout d'une paire clef/valeur(ici le prénom Bryan et l'âge 27):
tabAssocVide.prenom = "Bryan";
tabAssocVide.age = 27;
console.log("tabAssocVide = ", tabAssocVide);

// Accéder à une valeur ( ici la propriété "prenom"):
console.log(`Je m'appelle ${tabAssocVide.prenom}`);

// Modification d'une valeur (ici l'âge passe à 28):
tabAssocVide.age = 28;
console.log("tabAssocVide = ", tabAssocVide);

//  initialisation d'un tableau associatif plus riche 
//  affectation à la variable pikachu, stockant ses infos et ses attaques
//  (données sur pikachu récupérées sur internet)
let pikachu = {
    id : 25,         // number (entier)         : identifiant unique
    name: "Pikachu", // string                  : nom du Pokemon
    weightKg: 6.0,   // number (décimal)        : poids
    hpMax: 80,       // number (entier)         : points de vie max
    attacks: [       // Array (tableau indexé)  : liste des attaques
        {
            name : "Vive-Attaque", // string          :nom de l'attaque
            damages: 10,           // number (entier) : puissance de l'attaque
        },
        {
            name : "Boule Elek",
            damages: 20,
        },
    ],
};
console.log("pikachu = ", pikachu);

//  création d'une fonction, ainsi il sera simple d'appeler cette logiqueavec d'autres Pokemons
function listerAttaquesPokemon(pokemon) {
// écriture de la première ligne
console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);

//  pour chaque attaque (dans le tableau indexé pokemon .attacks)
for (let i = 0; i < pokemon.attacks.length; i++) {
    // récupération du tableau associatif de l'attaque (le i-ème élément)
    const attaque = pokemon.attacks[i];

    //  écriture d'une ligne d'attaque
    console.log(`\t"${attaque.name}" (puissance ${attaque.damages})`); 
   }
}

// appel de la fonction lister AtttaquesPokemon en lui passant pikachu comme argument/paramètre
listerAttaquesPokemon(pikachu);


