import './style.css';
import { cleanSheetAndOpenGame, printGamesCards } from './src/tools/tools.js';
import { ahorcadoGame } from './src/components/game1/game1.js';
import { guessWhoGame } from './src/components/game2/game2.js';
import { memoryGame} from './src/components/game3/game3.js';



const games = [
    {
        id: "game1",
        img: "./assets/pics/ahorcadoGame.png",
        style: "logo1",
        funcion: ahorcadoGame

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
        funcion: memoryGame 

    }
]




printGamesCards(document.getElementById("gamesDiv"), games);

