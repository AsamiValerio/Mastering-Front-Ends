// **** SELECTEURS ****

// ** Appliquer un style via JS **

// document.querySelector("h4").style.background = "yellow";

// ** Utiliser un sélecteur pour faciliter la frappe **

const baliseHTML = document.querySelector("h4");

// ** Application du même style via le sélecteur **

// baliseHTML.style.background = "yellow";

// *** Viser une classe ***

const questionContainer = document.querySelector(".click-event");

// Toujours penser à tester son code grâce à "console.log(xxx);"

// *** Click event ***

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");

// * Tester si le code fonctionne *

// questionContainer.addEventListener("click", () => {
//   console.log("Click !");
// });

// * classList recherche uniquement les classes *
// add, remove et toggle (explicite)
// classes dans style.css (transition de .box à .question-clicked)

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "green";
});

btn2.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "red";
});

// <div> > #id > .class > baliseHTML /

//------------------------------------------------

// **** Mouse Events ****

const mousemove = document.querySelector(".mousemove");

// * console.log(e); * <= affiche en direct les informations de la fenêtre dans la console (couplé avec "mousemove" juste en dessous).

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// "transform" agissant déjà dans le style, il faut rappeler les "translates" sinon ils seront écrasé par "scale".

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid teal";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid pink";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(2deg)";
});

//------------------------------------------------

// **** KeyPress event ****

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

// * Créer une boite à musique (voir vidéo du cours). *

// const ring = (key) => {
//   const audio = new Audio();
//   audio.src = key + ".mp3";
//   audio.play();
// };

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "blue";
  }

  // ring(); (normal)

  // ring(e.key); (boite à musique)
});

//------------------------------------------------

// **** Scroll Event ****

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//------------------------------------------------

// **** Form Events ****

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

// Variable avec contenu non défini sera dynamique.
let pseudo = "";
let language = "";

// console.log(pseudo) peut être rentrer dans la console (F12).

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  // console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("veuillez accepter les CGV");
  }
});

//------------------------------------------------

// **** Load Event ****

window.addEventListener("load", () => {
  console.log("Document chargé");
});

//------------------------------------------------

// **** ForEach ****

// getElementsByClassName ne fonctionne que si il y a plusieurs éléments de la même classe

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.style.color = "black";
    box.style.background = "grey";
  });
});

//------------------------------------------------

// **** addEventListener Vs onclick ****

// * un seul élément onclick/onscroll à la fois *

document.body.onclick = () => {
  // console.log("Click !");
};

// * Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)

document.body.addEventListener("click", () => {
  console.log("click 1 !");
});

// * Usecapture => début (Usecapture passera toujours devant Bubbling)

document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//-----------------------------------------------

// **** Stop propagation ****

// Dans cet exemple, intéraction avec Usecapture (voir au-dessus).
// e.stopPropagation va empêcher la lecture du Bubbling, alors que Usecapture qui est prioritaire va tout de même se lire.

questionContainer.addEventListener("click", (e) => {
  // alert("test !");
  e.stopPropagation();
});

// removeEventListener existe (voir google)

//------------------------------------------------

// **** BOM **** (Browser Object Model) (voir dossier "support").

console.log(window.innerHeight);
console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close();

// * Evénements adossés à Window

// alert("hello")

// ** confirm

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// ** prompt

btn1.addEventListener("click", () => {
  let qanswer = prompt("Bien joué, entrez votre nom !");
  questionContainer.innerHTML += "<h3>Bravo " + qanswer + "</h3>";
});

// ** setTimout (Timer, compte à rebours)

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// ** "setInterval" rajoute un élément tous les "x" temps.

// setInterval(() => {
//   document.body.innerHTML += `
//   <div class='box'>
//     <h2>Explosion imminente.</h2>
//     </div>
//   `;
// }, 1000);

// même chose qu'au-dessus, grâce à "interval" et la règle "clearInterval", cliquer sur la fenêtre stop la création de boites.

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//    <div class='box'>
//      <h2>Explosion imminente.</h2>
//      </div>
//    `;
// }, 10000);

// document.body.addEventListener("click", (e) => {
//   // e.target.remove();
//   clearInterval(interval);
// });

// ** Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://google.com");

// ** onload, équivalent de "onclick, onscroll, etc".
// utilisable une seule fois

// window.onload = () => {
//   location.href = "lien.com";
// };

// ** Navigator

// voir données du navigateur et de l'utilisateur.

console.log(navigator.userAgent);

// connaître la position de l'utilisateur.
// copié sur "https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition".

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

// History

// connaître l'historique.
console.log(history);

// forcer un retour en arrière.
// window.history.back();

// retour en arrière précis. (nombre = combien de page)
// history.go(-1);
// history.go(-2);
// history.go(-3);

// ----------------------------------------------

// SetProperty

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
