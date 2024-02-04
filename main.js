import './style.css';
import './public/components/StarsBackground/starsBackground.css';
import { cleanSheetAndOpenGame, printGamesCards } from './public/components/tools/tools.js';
import {guessWhoGame} from './public/components/game2/game2.js';



const games = [
    {
        id: "game1",
        img: "./assets/pics/ahorcadoGame.png",
        style: "logo1",
        funcion: guessWhoGame

    },
    {
        id: "game2",
        img: "./assets/pics/guessWhoGame.png",
        style: "logo2",
        funcion: guessWhoGame

    },
    {
        id: "game3",
        img: "./assets/pics/memoryGame.png",
        style: "logo3",
        funcion: guessWhoGame 

    }
]




printGamesCards(document.getElementById("gamesDiv"), games);

