// *** Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// * "(typeof)" donne le type de la variable.
// console.log(typeof number);

// ** Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);
// * 1er crochets = l'élement (Bordeaux), 2nd crochets = le énième caractère de ce même élément (bor"D"eaux => d).
// * On commence à compter par 0, dans l'exemple du dessus : b = 0 et donc d = 3.

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

// * les tableaux sont entre crochets "[]" et les objets dans des accolades "{}".

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.technos[0][1]);
// * L'exemple du dessus affiche le "a" de "Javascript".

// * ajout d'un élément au tableau.
// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]);

//---------------------------
// *** Les structures de controle
//---------------------------
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// ** While
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w);
}

// ** Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// ** Les boucles for
// grouper/afficher des datas.
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// * on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

// ** Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//----------------
// ** Méthodes String
//----------------
let string2 = "Javascript est un langage orienté objet";

// * "eval" concatène ou additionne des valeurs. (Ex du dessous : (eval("1") + 2) = 12) (car 1 est un string))
// * "parseInt" transforme un "string" en "number". (Ex du dessous : (eval(parseInt("1") + 2) = 3);

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// * isNaN = is Not a Number (identifie par true ou false si la valeur est un chiffre ou non)
// console.log(isNaN(string));

// * connaître la longueur d'une variable avec length.

// console.log(string2.length);
// * Pour cibler le dernier caractère, -1 est ajouté car l'index démarre à 0.
// console.log(string2[string2.length - 1]);

// * indexOf donne à quel index le ("mot recherché") est situé.

// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// slice découpe dans la variable jusqu'à la valeure indiquée.

// let newString = string2.slice(20); (= ngage orienté objet) (voir ligne 115)
// let newString = string2.slice(5, 17); (= cript est un) (commence à 5, s'arrête à 17) (voir ligne 115)
// console.log(newString);

// console.log(string2.split(" ")); (sépare les éléments en retirant une valeur (dans cet ex : barre espace))

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//-----------------
// *** Méthodes Numbers
//-----------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// nombre de chiffre derière la virgule.
// console.log(number2.toFixed(1));

// console.log(parseInt("43"));

// Extrait uniquement le(s) chiffre(s) entier d'une variable.
// console.log(parseInt(numberString));

// Extrait uniquement le(s) chiffre(s) (même les décimals) d'une variable.
// console.log(parseFloat(numberString));

// ** Math

// console.log(Math.PI);
// console.log(Math.round(4.5)); => arrondi
// console.log(Math.floor(4.9)); => arrondi à l'inférieur
// console.log(Math.ceil(4.1)); => arrondi au plus haut
// console.log(Math.pow(2, 7)); => puissance
// console.log(Math.sqrt(16)); => racine²

// * Math.random + Math.floor = chiffre random entre 0 et X mais arrondi (sans décimals)
// console.log(Math.floor(Math.random() * 50));

//-----------------
// *** Méthodes Arrays
//-----------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// ** Fusionner des tableaux

// let newArray = array3.concat(array4);
// console.log(newArray);

// * => fusionner grâce au "spreadOperator => ..."
// let newArray = [...array3, ...array4];
// console.log(newArray);

// ** Ajouter un caractère entre chaque élement.

// console.log(array3.join(' '));

// ** Retirer des éléments

// * retire "Javascript"
// console.log(array3.slice(1));
// * Retire les 3 premiers éléments jusqu'au 5ème (lui-même gardé).
// console.log(newArray.slice(3, 5));
// * Résultat : ["Ruby, Solidity"]

// * connaître l'index
// console.log(array3.indexOf("Python"));

// * énumère les éléments un par un, après les avoir nommés. (languages)
// array3.forEach((languages) => console.log(languages));

// * every = est-ce que dans chaque éléments il y a (== "élément recherché") ?
// console.log(array3.every((language) => language == "Php"));
// * résultat = false

// * some = est-ce que il y a quelque part un élément appelé (== "élément recherché") ?
// console.log(array3.some((language) => language == "Php"));
// * résulat = true

// * enlève le 1er élément d'un tableau.
// let shift = array3.shift();
// console.log(array3);

// * enlève le dernier élément d'un tableau.
// console.log(array3.pop());

// * "splice" remplace les éléments du tableau par un autre.
// const restArray = array3.splice(0 ,1 , "C++");
// * (0, 1, "C++") => (du 1er élément jusqu'au 2eme élément, remplacer par "C++")
// console.log(array3);
// résultat : ["C++, "Php", "Python"]

// * comme au-dessus mais intéraction entre deux tableaux.
// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);
// * résultat : ["Ruby", "Solidity", "Python"]

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];

// ** addition des éléments d'un tableau
// console.log(arrayNumber.reduce((x, y) => x + y));

// ** ajout d'un élément dans un tableau
arrayNumber.push(17);
arrayNumber.push("Bonjour");
// console.log(arrayNumber);

// *** FILTER, SORT, MAP

// ** filtrer
// console.log(arrayNumber.filter((number) => number > 10));

// ** trier (ordre alphabétique)
// console.log(arrayNumber.sort());

// ** trier (croissant / décroissant)
// console.log(arrayNumber.sort((a, b) => a - b));
// * pour trier du plus grand au plus petit : "((a, b) => b - a)";

// ** on peut fusionner les méthodes de tries en une seule commande
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a -b));
// * retire les chiffres inférieurs à 10 tout en triant par ordre croissant

// ** Affiche les éléments du tableau dans une liste, ajoute un espace entre chaque éléments.
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");

//-----------------
// *** Méthodes Objects
//-----------------

// * .map permet de "ranger", "ordonner" des données. également récupérer des données sans devoir tout retaper manuellement.
// * .includes (exclu tout ce qui ne contient pas la veleur de .includes)

// document.body.innerHTML = data
//   .filter((user) => user.pseudo.includes("a"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
//     <div class="user-card">
//       <h2>${user.pseudo}</h2>
//       <p>Age : ${user.age} ans</p>
//       <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//     </div>
//   `
//   )
//   .join("");

//----------
// *** Les dates
//----------

// ** Date classique
let date = new Date();

// ** Timestamp
// * temps écouler entre le 1er janvier 1970 et aujourd'hui (en secondes)
// * "parse" est une méthode associée à "Date".
let timestamp = Date.parse(date);
// console.log(timestamp);

// ** IsoString
// * affiche une date détaillée (A/M/J H/M/S/MS)
let iso = date.toISOString();
console.log(iso);

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//--------------
// *** Destructuring
//--------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

// * permet de gagner du temps, quand on appel { destVar } c'est comme si on appelait moreData.destVar
const { destVar } = moreData;
// * comme ci-dessous.
// const destVar = moreData.destVar;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
// console.log(dateDestructuring(iso));

//-------------
// *** Les Datasets
//-------------

// ** data-value
// * rajouter "data-QuelqueChose" (peut importe) pour rajouter un lien autre qu'une classe, id, etc
// * (voir HTML pour data-lang)
const h3js = document.getElementById("javascript");
// * "dataset" affiche toutes les "data-XXX", rajouter .XXX pour cibler.
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

//----------
// *** Les Regex (expressions régulières)
//----------

// ** search

let mail = "from_s$cratch33@gmail.com";
// console.log(mail.search(/frscceeceom/));
// * quand .search trouve il affiche : 0, quand il ne trouve pas : -1.

// * rechercher une valeure et la remplacer par quelque chose.
// console.log(mail.replace(/from/, "de"));

// * vérifier si une valeure correspond, le i permet d'outrepasser les majuscules.
// console.log(mail.match(/SCratch/i));

// * contrôle si les caractèrs entre crochets sont présents.
// console.log(mail.match(/[zug]/));
// console.log(mail.match(/[12]/));

// * Tous les chiffres
// * "\" !!
// console.log(mail.match(/\d/));

// * Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));

// * vérifier si un email est valide : 
// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));
// * rechercher sur google les regex désirées.

let separator = 265264849;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
// * Cette Regex sépare les chiffres à la centaine, le " " rajoute un espace. (pourrait être un . ou une , comme un /)
