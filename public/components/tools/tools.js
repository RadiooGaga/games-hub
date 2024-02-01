import { guessWhoGame } from '../game2/game2';
import './tools.css';


// FUNCIÓN PINTAR LAS TARJETAS DEL MENU

export const printGamesCards = (parentDiv, games) => {

    for (const game of games) {
        
        const gameCard = document.createElement("div");
        gameCard.id = game.id;
        const gameCardLogo = document.createElement("img");
        gameCardLogo.src = game.img;
        gameCardLogo.className = game.style;
        
        parentDiv.appendChild(gameCard);
        gameCard.appendChild(gameCardLogo);
        cleanSheetAndOpenGame(parentDiv, gameCard, games, game.funcion);
    }
}



// LIMPIAR PÁGINA Y ABRIR JUEGO

export const cleanSheetAndOpenGame = (parentDiv, card, games, gameCreate) => {

    card.addEventListener("click", () => {
    parentDiv.innerHTML = "";
    //gameCreate("hola que ase");
    backToGames(parentDiv, games)
    gameCreate(parentDiv)

    })

}



// BOTÓN LLEVARTE DE VUELTA A MENU JUEGOS

export const backToGames = (parentDiv, games) => {
   
    const backButton = document.createElement("button");
    backButton.id = "backButton";
    backButton.textContent = "VOLVER AL MENU";

    parentDiv.appendChild(backButton)
  
    backButton.addEventListener("click", () => {
        parentDiv.innerHTML = "";
        printGamesCards(parentDiv, games)
    })
   
}


/*
export const funcion = (texto) => {
    console.log(texto);
}
*/
