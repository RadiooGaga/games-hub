
import './tools.css';


// PINTAR LAS TARJETAS DEL MENU

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
    backToGames(parentDiv, games)
    resetGame(parentDiv, gameCreate, games)
    gameCreate(parentDiv);

    })
}



// BOTÓN LLEVARTE DE VUELTA A MENU JUEGOS

const backToGames = (parentDiv, games) => {
   
    const backButton = document.createElement("button");
    backButton.id = "backButton";
    backButton.textContent = "VOLVER AL MENU";

    parentDiv.appendChild(backButton)
  
    backButton.addEventListener("click", () => {
        parentDiv.innerHTML = "";
        printGamesCards(parentDiv, games)
    })
   
}

// BOTÓN DE RESET GAME

const resetGame = (parentDiv, game, games) => {
    const buttonToGame= document.createElement("button");
    buttonToGame.className = "backToGameButton";
    buttonToGame.textContent = "REINICIAR";

    parentDiv.appendChild(buttonToGame)
  
    buttonToGame.addEventListener("click", () => {
        parentDiv.innerHTML = "";
        backToGames(parentDiv, games);
        resetGame(parentDiv, game, games)
        game(parentDiv);   
        
    })
   
}


