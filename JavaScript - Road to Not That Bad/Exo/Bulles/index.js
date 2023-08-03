const counterDisplay = document.querySelector("h1");
let counter = 0;

const pop = () => {
  const audio = new Audio();
  audio.src = "./pop.mp3"
  audio.volume = 0.1;
  audio.play();
}

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    pop();
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  })

  setTimeout(() => {
    bubble.remove();
  }, 8000)
}

setInterval(bubbleMaker, 300);

// créer un span dans JS et ajouter la classe, ajouter la variable au body

// donner une taille et directions aléatoires aux bulles

// bulles à gauche

// event au click et créer le compteur

// retirer les bulles
