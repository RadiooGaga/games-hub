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
const attempt = {fallos: 0};

const bodyParts = { 
    pie: { x: 0, y: 8, width: 4, height: 1 },
    barra: { x: 1, y: 0, width: 1, height: 8 },
    base: { x: 2, y: 0, width: 3, height: 1 } ,
    gancho: { x: 4, y: 1, width: 1, height: 1 } ,
    cabeza: { x: 3.5, y: 2, width: 2, height: 1 } ,
    cuello: { x: 4, y: 3, width: 1, height: 1 } ,
    cuerpo: { x: 4, y: 4, width: 1, height: 2 } ,
    brazoDerecho: { x: 5, y: 3.5, width: 2, height: 1 } ,
    brazoIzquierdo: { x: 3, y: 3.5, width: 1.5, height: 1 } ,
    piernaDerecha: { x: 5, y: 5, width: 1, height: 2 } ,
    piernaIzquierda: { x: 3, y: 5, width: 1, height: 2 }
};


// CREANDO AHORCADO
export const ahorcadoGame = (parentDiv) => {

    attempt.fallos = 0; //reinicio de contador libre.
    incompleteWord.valor = "";
    selectedWord = callApi();
 
   
    const ahorcadoDiv = document.createElement("div");
    ahorcadoDiv.id = "ahorcadoDiv";
    const ahorcadoTimer = document.createElement("div");
    ahorcadoTimer.id = "ahorcadoTimer";
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 120;
    ctx.canvas.height = 180;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(34, 34, 37)';
    const wordContainer = document.createElement("div");
    wordContainer.id = "wordContainer";
    const ahorcadoTeclado = document.createElement("div");
    ahorcadoTeclado.id = "ahorcadoTeclado";


    selectedWord.then(word => {
        selectedWord = word.toUpperCase().slice(2, word.length -2);

        
    }).catch(error => {
        console.error('Error en la llamada a la API:', error);
    });

    
    parentDiv.appendChild(ahorcadoDiv);
    ahorcadoDiv.appendChild(ahorcadoTimer);
    ahorcadoTimer.appendChild(canvas);
    ahorcadoDiv.appendChild(wordContainer);
    ahorcadoDiv.appendChild(ahorcadoTeclado);

    

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
   


    while (word.indexOf(pressedLetter, indice) !== -1) {
    let str = incompleteWord.valor;
    str = str.split('');
       
        indice = word.indexOf(pressedLetter, indice);
        str.splice(indice, 1, pressedLetter);
        str = str.join('');
        incompleteWord.valor = str;
        indice +=1;
        
        if (str === word) {
            const win = document.getElementById("ahorcadoTeclado");
                win.innerHTML = "";
                const iFrame = document.createElement("img");
                iFrame.src = "./assets/gif/giphyHellYeah.gif";
                iFrame.className ="giphy-embed"; 
                iFrame.style.width = "480";
                iFrame.style.height = "200px";
                win.appendChild(iFrame)
            console.log("hell yeaaaah!")
            
        }
    }
   
    if (indice > 0) {
        console.log("letra correcta")
        
    } else {
        attempt.fallos += 1;
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        console.log("letra incorrecta")

        let bodyPart;
        switch (attempt.fallos) {
            case 1: bodyPart = bodyParts.pie;
            break;
       
            case 2: bodyPart = bodyParts.barra;
            break;

            case 3: bodyPart = bodyParts.base;
            break;
       
            case 4: bodyPart = bodyParts.gancho;
            break;

            case 5: bodyPart = bodyParts.cabeza;
            break;
       
            case 6: bodyPart = bodyParts.cuello;
            break;

            case 7: bodyPart = bodyParts.cuerpo;
            break;
       
            case 8: bodyPart = bodyParts.brazoDerecho;
            break;

            case 9: bodyPart = bodyParts.brazoIzquierdo;
            break;

            case 10: bodyPart = bodyParts.piernaDerecha;
            break;
       
            case 11: bodyPart = bodyParts.piernaIzquierda;
            break;  
            
            default: bodyPart = null;
        }
        if (bodyPart !== null) {
            context.fillRect(bodyPart.x,bodyPart.y,bodyPart.width,bodyPart.height);
        }
        if (attempt.fallos === 11) {
            const win = document.getElementById("ahorcadoTeclado");
            win.innerHTML = "";
            const skull = document.createElement("img");
            skull.src = "./assets/icons/calavera-y-huesos.png";
            skull.style.width = "200px";
            skull.style.height = "200px";
            win.appendChild(skull)
            console.log("perdiste")
        }
    }
}



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

