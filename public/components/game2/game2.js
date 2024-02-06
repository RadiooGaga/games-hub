import "./game2.css";

const characters = [
    {
        id: "Alex",
        img: "./assets/characters/Alex1.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: true,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "negro",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Anita",
        img: "./assets/characters/Anita2.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "azules",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: true,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "rubio",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Peter",
        img: "./assets/characters/Peter3.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "azules",
        nariz: "grande",
        boca: "grande",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "blanco",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Eric",
        img: "./assets/characters/Eric4.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: true,
        gafas: false,
        pelo: "rubio",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Charles",
        img: "./assets/characters/Charles5.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: true,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "rubio",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Sam",
        img: "./assets/characters/Sam6.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: true,
        pelo: "blanco",
        estilo: "liso",
        calvo: true,
        visible: true
    },
    {
        id: "Joe",
        img: "./assets/characters/Joe7.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: true,
        pelo: "rubio",
        estilo: "rizado",
        calvo: false,
        visible: true
    },
    {
        id: "Maria",
        img: "./assets/characters/Maria8.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: true,
        gafas: false,
        pelo: "castaño",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Phillip",
        img: "./assets/characters/Phillip9.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: false,
        rubor: true,
        barba: true,
        sombrero: false,
        gafas: false,
        pelo: "negro",
        estilo: "rizado",
        calvo: false,
        visible: true
    },
    {
        id: "Richard",
        img: "./assets/characters/Richard10.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: true,
        rubor: false,
        barba: true,
        sombrero: false,
        gafas: false,
        pelo: "castaño",
        estilo: "liso",
        calvo: true,
        visible: true
    },
    {
        id: "Susan",
        img: "./assets/characters/Susan11.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "blanco",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Max",
        img: "./assets/characters/Max12.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "grande",
        boca: "grande",
        bigote: true,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "castaño",
        estilo: "rizado",
        calvo: false,
        visible: true
    },
    {
        id: "Alfred",
        img: "./assets/characters/Alfred13.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "azules",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: true,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "pelirrojo",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Robert",
        img: "./assets/characters/Robert14.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "azules",
        nariz: "grande",
        boca: "grande",
        bigote: false,
        rubor: true,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "castaño",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Frans",
        img: "./assets/characters/Frans15.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "pelirrojo",
        estilo: "rizado",
        calvo: false,
        visible: true
    },
    {
        id: "Claire",
        img: "./assets/characters/Claire16.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: true,
        gafas: true,
        pelo: "pelirrojo",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Paul",
        img: "./assets/characters/Paul17.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: true,
        pelo: "blanco",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Bill",
        img: "./assets/characters/Bill18.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: true,
        barba: true,
        sombrero: false,
        gafas: false,
        pelo: "pelirrojo",
        estilo: "liso",
        calvo: true,
        visible: true
    },
    {
        id: "David",
        img: "./assets/characters/David19.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: false,
        rubor: false,
        barba: true,
        sombrero: false,
        gafas: false,
        pelo: "rubio",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Bernard",
        img: "./assets/characters/Bernard20.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "marrones",
        nariz: "grande",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: true,
        gafas: false,
        pelo: "castaño",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "George",
        img: "./assets/characters/George21.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: true,
        gafas: false,
        pelo: "blanco",
        estilo: "liso",
        calvo: false,
        visible: true
    },
    {
        id: "Tom",
        img: "./assets/characters/Tom22.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "azules",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: true,
        pelo: "negro",
        estilo: "liso",
        calvo: true,
        visible: true
    },
    {
        id: "Herman",
        img: "./assets/characters/Herman23.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "grande",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "pelirrojo",
        estilo: "rizado",
        calvo: true,
        visible: true
    },
    {
        id: "Anne",
        img: "./assets/characters/Anne24.jpeg",
        genero: "femenino",
        estado: "triste",
        ojos: "marrones",
        nariz: "grande",
        boca: "pequeña",
        bigote: false,
        rubor: false,
        barba: false,
        sombrero: false,
        gafas: false,
        pelo: "negro",
        estilo: "rizado",
        calvo: false,
        visible: true
    }
]

const features = [

    {
        id: 0,
        atributo: "genero",
        valor: "masculino",
        img: "./assets/atributos/masculino.png"

    },
    {
        id: 1,
        atributo: "genero",
        valor: "femenino",
        img: "./assets/atributos/femenino.png"

    },
    {
        id: 2,
        atributo: "estado",
        valor: "feliz",
        img: "./assets/atributos/feliz.png"

    },
    {
        id: 3,
        atributo: "estado",
        valor: "triste",
        img: "./assets/atributos/triste.png"

    },
    {
        id: 4,
        atributo: "ojos",
        valor: "marrones",
        img: "./assets/atributos/ojoMarron.png"

    },
    {
        id: 5,
        atributo: "ojos",
        valor: "azules",
        img: "./assets/atributos/ojoAzul.png"

    },
    {
        id: 6,
        atributo: "nariz",
        valor: "grande",
        img: "./assets/atributos/narizota.png"

    },
    {
        id: 7,
        atributo: "nariz",
        valor: "pequeña",
        img: "./assets/atributos/naricita.png"

    },
    {
        id: 8,
        atributo: "boca",
        valor: "grande",
        img: "./assets/atributos/bocaGrande.png"

    },
    {
        id: 9,
        atributo: "boca",
        valor: "pequeña",
        img: "./assets/atributos/bocaPequeña.png"

    },
    {
        id: 10,
        atributo: "bigote",
        valor: true,
        img: "./assets/atributos/bigote.png"

    },
    {
        id: 11,
        atributo: "rubor",
        valor: true,
        img: "./assets/atributos/rubor.png"

    },
    {
        id: 12,
        atributo: "barba",
        valor: true,
        img: "./assets/atributos/barba.png"

    },
    {
        id: 13,
        atributo: "sombrero",
        valor: true,
        img: "./assets/atributos/sombrero.png"

    },
    {
        id: 14,
        atributo: "gafas",
        valor: true,
        img: "./assets/atributos/gafas.png"

    },
    {
        id: 15,
        atributo: "pelo",
        valor: "negro",
        img: "./assets/atributos/peloNegro.jpeg"

    },
    {
        id: 16,
        atributo: "pelo",
        valor: "castaño",
        img: "./assets/atributos/peloCastaño.jpeg"

    },
    {
        id: 17,
        atributo: "pelo",
        valor: "pelirrojo",
        img: "./assets/atributos/peloPelirrojo.jpeg"

    },
    {
        id: 18,
        atributo: "pelo",
        valor: "rubio",
        img: "./assets/atributos/peloRubio.jpeg"

    },
    {
        id: 19,
        atributo: "pelo",
        valor: "blanco",
        img: "./assets/atributos/peloBlanco.jpeg"

    },
    {
        id: 20,
        atributo: "estilo",
        valor: "rizado",
        img: "./assets/atributos/rizado.png"

    },
    {
        id: 21,
        atributo: "estilo",
        valor: "liso",
        img: "./assets/atributos/liso.png"

    },
    {
        id: 22,
        atributo: "calvo",
        valor: true,
        img: "./assets/atributos/calvo.jpeg"

    },
]

const attempt = {intentos: 0};




// CREANDO QUIEN ES QUIEN
export const guessWhoGame = (parentDiv) => {

    const guessWhoDiv = document.createElement("div");
    guessWhoDiv.id = "guessWhoDiv";
    const people = document.createElement("div");
    people.className = "people";
    const atributtes = document.createElement("div");
    atributtes.id = "atributtes";
    parentDiv.appendChild(guessWhoDiv);
    const chosenCharacter = characters[Math.floor(Math.random() * characters.length)] //personaje random

    
   attempt.intentos = 5; //reinicio de contador libre.

    for (const character of characters) { 
        character.visible = true;
        const characterDiv = document.createElement("div");
        characterDiv.id = character.id;
        const characterImg = document.createElement("img");
        characterImg.src = character.img;

        guessWhoDiv.appendChild(people);
        people.appendChild(characterDiv);
        characterDiv.appendChild(characterImg); 
    }


    for (const feature of features) { //rasgos
    
        const featureButton = document.createElement("button");
        featureButton.id = feature.id;
        const featureImg = document.createElement("img");
        featureImg.src = feature.img;

        guessWhoDiv.appendChild(atributtes);
        atributtes.appendChild(featureButton);
        featureButton.appendChild(featureImg);

        const featureButtonClickHandler = (e) => { //Desde aquí ocurre todo: ("click")
            featureButton.style.filter = "opacity(50%)"; 
            checkCharacter(characters, feature.atributo, feature.valor, chosenCharacter);
            featureButton.removeEventListener("click", featureButtonClickHandler);
            eraseUnavailableFeature(characters, features);
            congrats(parentDiv,chosenCharacter, attempt);
            
        }
        featureButton.onclick = featureButtonClickHandler;
    }  
}



/* comprobar en los personajes si el atributo y el valor coinciden con el personaje elegido 
 por la máquina */

const checkCharacter = (characters, atributo, valor, chosenCharacter) => {

    for (const character of characters) {
        if (chosenCharacter[atributo] === valor) {//  (El personaje es rubio?)

            if (character[atributo] !== valor) {
                // si no es rubio...
                const eraseCharacter = document.getElementById(character.id);
                eraseCharacter.style.filter = "opacity(30%)"; //borramos los rubios
                character.visible = false;
            }

        } else 
        
        {   if (character[atributo] === valor) {
            // si es rubio...
                const eraseCharacter = document.getElementById(character.id);
                eraseCharacter.style.filter = "opacity(30%)"; //borramos los NO rubios
                character.visible = false;
            }
        }
    }
}



// borrado de botones que no tiene sentido que estén disponibles

const eraseUnavailableFeature = (characters, features) => {

    const listOfAtributes = { 
        genero: [],
        estado: [],
        ojos: [],
        nariz: [],
        boca: [],
        bigote: [],
        rubor: [],
        barba: [],
        sombrero: [],
        gafas: [],
        pelo: [],
        estilo: [],
        calvo: []
    }
    const newListOfAtributes = Object.keys(listOfAtributes); 
    // nuevo array de atributos únicos disponibles aislados


    for (const character of characters) {
        if (character.visible === true) {
            for ( const atribute of newListOfAtributes) {  
                listOfAtributes[atribute].push(character[atribute]);
                //console.log(character[atribute])
                //console.log(listOfAtributes[atribute])
            }
        }
    } //Si el personaje es visible, recorremos los atributos y añadimos el personaje con 
     //los atributos coincidentes a la nueva lista.

    
    for (const atribute of newListOfAtributes) { 
        if ([...new Set(listOfAtributes[atribute])].length <= 1) {
            for (const feature of features) {
                if (feature.atributo === atribute) {
                    const eraseFeature = document.getElementById(feature.id);
                    eraseFeature.style.filter = "opacity(30%)";
                    eraseFeature.onclick = null; /* se inhabilitan los que están
                    en gris para que no cuenten como punto adicional si se pulsan
                    por accidente */
                    
                }
            }
        }
    }   
}




// CONTADOR DE INTENTOS Y MENSAJE A GANADOR / PERDEDOR
const congrats = (parentDiv, character, attempt) => {

    const trySpan = document.createElement("span");
    trySpan.id = "intentos"; 
    parentDiv.appendChild(trySpan);
  
    
    let counter = 0;

    for (const character of characters) { 
        if (character.visible === true) {
            counter += 1;  
        }      
    }
    
    attempt.intentos -= 1;
    trySpan.textContent = `TE QUEDAN ${attempt.intentos} INTENTOS`;

    if (counter === 1 && attempt.intentos >= 0) {
        const divWinner = document.getElementById("guessWhoDiv");
        divWinner.innerHTML = "";
        divWinner.classList.add("divWinner");
        const divWinnerP = document.createElement("p");
        divWinnerP.className = "divWinnerParagraph";
        divWinnerP.textContent = `ENHORABUENA! El personaje es "${character.id}"`;
        const imgWinner = document.createElement("img");
        imgWinner.src = character.img;

        parentDiv.appendChild(divWinner);
        divWinner.appendChild(divWinnerP);
        divWinner.appendChild(imgWinner);
    

    } else if (counter > 1 && attempt.intentos <= 0)
    
    {
        const divWinner = document.getElementById("guessWhoDiv");
        divWinner.innerHTML = "";
        divWinner.classList.add("divWinner");
        const divWinnerP = document.createElement("p");
        divWinnerP.className = "divWinnerParagraph";
        divWinnerP.textContent = `HAS PERDIDO! INTÉNTALO OTRA VEZ!`;

        parentDiv.appendChild(divWinner);
        divWinner.appendChild(divWinnerP);
        
    }
    
}
   
    

   





