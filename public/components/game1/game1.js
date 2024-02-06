import "./game1.css";




// PETICIÓN A PALABRA ALEATORIA EN ESPAÑOL

const callApi = async () => {
    const randomWord = 'https://clientes.api.greenborn.com.ar/public-random-word?c=1';
    const options = {
        method: 'GET' };
    
    try {
        const response = await fetch(randomWord, options);
        const word = await response.text();
        return word;
        
    } catch (error) {
        throw error;  
    }
}


let selectedWord;


// Creando El Ahorcado

export const ahorcadoGame = (parentDiv) => {
    
    selectedWord = callApi();

    selectedWord.then(word => {
        console.log(word); 
    }).catch(error => {
        console.error('Error en la llamada a la API:', error);
    });
    
  
    
    const ahorcadoDiv = document.createElement("div");
    ahorcadoDiv.id = "ahorcadoDiv";

    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    const ctx = canvas.getContext("2d");
    //ctx.canvas.width = "0";
    //ctx.canvas.height = "0";
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d96d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
/*
    const treeParts = [
        [4, 2, 1, 1],
        [4, 3, 2, 2],
        [3, 5, 1, 1],
        [2, 3, 1, 1],
        [5, 3, 1, 1],
    ]
*/
    const ahorcadoTimer = document.createElement("div");
    ahorcadoTimer.id = "ahorcadoTimer";
    const wordContainer = document.createElement("div");
    wordContainer.id = "wordContainer";
    const ahorcadoTeclado = document.createElement("div");
    ahorcadoTeclado.id = "ahorcadoTeclado";
    

    parentDiv.appendChild(ahorcadoDiv);
    ahorcadoDiv.appendChild(ahorcadoTimer);
    ahorcadoTimer.appendChild(canvas);
    //canvas.appendChild(treeParts);
    ahorcadoDiv.appendChild(wordContainer);
    //wordContainer.appendChild(selectedWord);
    ahorcadoDiv.appendChild(ahorcadoTeclado);

    // CREANDO EL MUÑECO
    //-------------------------------------//


    // CREANDO EL WORD CONTAINER 





    // CREANDO EL TECLADO
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const tecladoContainer = document.getElementById("ahorcadoTeclado");

    alphabet.forEach(letter => {
        const letterButton = document.createElement('button');
        letterButton.textContent = letter;
        letterButton.className = "letter";
        tecladoContainer.appendChild(letterButton);
    });
    
}



let usedLetters;
let mistakes;
let hits;




















/*
const printAhorcado = () => {
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d96d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
}
*/


/*

let usedLetters;
let mistakes;
let hits;

const restartGame = (parentDiv) => {

    usedLetters.innerHTML = [];
    mistakes = 0;
    hits = 0;
    startButton.style.display = 'none';
    drawAhorcado();
}
*/











// PETICIÓN A PALABRA ALEATORIA EN INGLÉS
/*
const url = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=1';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f61c6030f8msh0bc1f9a45363c13p16c418jsn3581ab1d50fc',
		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/


/* SWITCH TO ENGLISH */