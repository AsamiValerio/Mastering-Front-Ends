// ** CORRECTION **

let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  if (scrollValue > 0.85 && playOnce) {
    popup.style.transform = "none";
    popup.style.opacity = "1";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateX(400px)";
  popup.style.opacity = "0";
});

// ** PRÉ-CORRECTION **

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 350) {
//     imgImprovise.style.transform = "translateX(0px)";
//     imgImprovise.style.opacity = "1";
//   }
// });

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 850) {
//     popup.style.transform = "translateX(0px)";
//     popup.style.opacity = "1";
//   }
// });

// closeBtn.addEventListener("click", () => {
//   popup.style.transform = "translateX(400px)";
//   popup.style.opacity = "0";
// });

// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
