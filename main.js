import './style.css';
import './public/components/StarsBackground/starsBackground.css';


// JUEGO 1
const game1 = document.querySelector("#game1");
const game1Logo = document.createElement("img");
game1Logo.src = "/assets/pics/ahorcadoGame.png";
game1Logo.className = "logo1";

game1.appendChild(game1Logo);


// JUEGO 2
const game2 = document.querySelector("#game2");
const game2Logo = document.createElement("img");
game2Logo.src = "/assets/pics/guessWhoGame.png";
game2Logo.className = "logo2";

game2.appendChild(game2Logo);


// JUEGO 2
const game3 = document.querySelector("#game3");
const game3Logo = document.createElement("img");
game3Logo.src = "/assets/pics/memoryGame.png";
game3Logo.className = "logo3";

game3.appendChild(game3Logo);


