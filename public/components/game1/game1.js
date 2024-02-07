import "./game1.css";


// PETICIÓN A PALABRA ALEATORIA EN ESPAÑOL

const callApi = async () => {
    const randomWord = 'https://clientes.api.greenborn.com.ar/public-random-word?c=1';
    const options = {
        method: 'GET' };
    
    try {
        const response = await fetch(randomWord, options);
        const word = await response.text();
        console.log(word)
        return word;
          
    } catch (error) {
        throw error;  
    }
}



let selectedWord;
const incompleteWord = {
    valor: ""
};




// Creando El Ahorcado

export const ahorcadoGame = (parentDiv) => {
    
    selectedWord = callApi();
   
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


    selectedWord.then(word => {
        selectedWord = word.toUpperCase().slice(2, word.length -2);
        console.log(selectedWord) 
        
    }).catch(error => {
        console.error('Error en la llamada a la API:', error);
    });

    
    parentDiv.appendChild(ahorcadoDiv);
    ahorcadoDiv.appendChild(ahorcadoTimer);
    ahorcadoTimer.appendChild(canvas);
    //canvas.appendChild(treeParts);
    ahorcadoDiv.appendChild(wordContainer);
    ahorcadoDiv.appendChild(ahorcadoTeclado);

    // CREANDO EL MUÑECO
    //-------------------------------------//


    // CREANDO EL WORD CONTAINER 
  
    

    // CREANDO EL TECLADO
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const tecladoContainer = document.getElementById("ahorcadoTeclado");


    alphabet.forEach(letra => {
        
        const letterButton = document.createElement('button');
        letterButton.textContent = letra;
        letterButton.className = "letterButton";
        tecladoContainer.appendChild(letterButton);
    
        const clickOnLetter = (e) => { //Desde aquí ocurre todo: ("click")
            
            letterButton.style.filter = "opacity(50%)"; 
            letterButton.onclick = null; 
            guessLetter(selectedWord, letra, incompleteWord)
            printWord(wordContainer, incompleteWord)
            
        }
        letterButton.onclick = clickOnLetter;
    });

    createWord(wordContainer, incompleteWord)
   
}



const createWord = (parentDiv) => {
    parentDiv.innerHTML = "";
    
      selectedWord.then(word => {
        for (const letter of selectedWord) {
            const uniqueLetter = document.createElement("span");
            uniqueLetter.id = "uniqueLetter";
            uniqueLetter.innerHTML = "_";
            incompleteWord.valor += "_";
    
            parentDiv.appendChild(uniqueLetter);
        }
    })
}


const printWord = (parentDiv, incompleteWord) => {
    parentDiv.innerHTML = "";
      
        for (const letter of incompleteWord.valor) {
            const uniqueLetter = document.createElement("span");
            uniqueLetter.id = "uniqueLetter";
            uniqueLetter.innerHTML = letter;
            
    
            parentDiv.appendChild(uniqueLetter);
        }
    
}


 // comprobar en la palabra si coincide con el indexOf del abecedario pulsada


 const guessLetter = (selectedWord, pressedLetter, incompleteWord) => {
    let indice = 0;

    const word = selectedWord.replaceAll(/[ÁÉÍÓÚ]/g, letra => ({
        'Á': 'A',
        'É': 'E',
        'Í': 'I',
        'Ó': 'O',
        'Ú': 'U'
    })[letra]);
    console.log(word)


    while (word.indexOf(pressedLetter, indice) !== -1) {
    let str = incompleteWord.valor;
    str = str.split('');

            
        indice = word.indexOf(pressedLetter, indice);
        str.splice(indice, 1, pressedLetter);
        str = str.join('');
        incompleteWord.valor = str;
        console.log(incompleteWord)
        console.log(indice);
        indice +=1;
    }

}











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