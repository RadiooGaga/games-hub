import "./game2.css";


const characters = [
    {
        id: "Alex",
        img: "/public/assets/characters/Alex1.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: "true",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "negro",
        estilo: "rizado",
        calvo: "false"
    },
    {
        id: "Anita",
        img: "/public/assets/characters/Anita2.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "azules",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "true",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "rubio",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Peter",
        img: "/public/assets/characters/Peter3.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "azules",
        nariz: "grande",
        boca: "grande",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "blanco",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Eric",
        img: "/public/assets/characters/Eric4.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "true",
        gafas: "false",
        pelo: "rubio",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Charles",
        img: "/public/assets/characters/Charles5.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: "true",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "rubio",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Sam",
        img: "/public/assets/characters/Sam6.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "true",
        pelo: "blanco",
        estilo: "liso",
        calvo: "true"
    },
    {
        id: "Joe",
        img: "/public/assets/characters/Joe7.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "true",
        pelo: "rubio",
        estilo: "rizado",
        calvo: "false"
    },
    {
        id: "Maria",
        img: "/public/assets/characters/Maria8.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "true",
        gafas: "false",
        pelo: "castaño",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Phillip",
        img: "/public/assets/characters/Phillip9.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: "false",
        rubor: "true",
        barba: "true",
        sombrero: "false",
        gafas: "false",
        pelo: "negro",
        estilo: "rizado",
        calvo: "false"
    },
    {
        id: "Richard",
        img: "/public/assets/characters/Richard10.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "true",
        rubor: "false",
        barba: "true",
        sombrero: "false",
        gafas: "false",
        pelo: "castaño",
        estilo: "liso",
        calvo: "true"
    },
    {
        id: "Susan",
        img: "/public/assets/characters/Susan11.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "blanco",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Max",
        img: "/public/assets/characters/Max12.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "grande",
        boca: "grande",
        bigote: "true",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "castaño",
        estilo: "rizado",
        calvo: "false"
    },
    {
        id: "Alfred",
        img: "/public/assets/characters/Alfred13.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "azules",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "true",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "pelirrojo",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Robert",
        img: "/public/assets/characters/Robert14.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "azules",
        nariz: "grande",
        boca: "grande",
        bigote: "false",
        rubor: "true",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "castaño",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Frans",
        img: "/public/assets/characters/Frans15.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "pelirrojo",
        estilo: "rizado",
        calvo: "false"
    },
    {
        id: "Claire",
        img: "/public/assets/characters/Claire16.jpeg",
        genero: "femenino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "true",
        gafas: "true",
        pelo: "pelirrojo",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Paul",
        img: "/public/assets/characters/Paul17.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "true",
        pelo: "blanco",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Bill",
        img: "/public/assets/characters/Bill18.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "true",
        barba: "true",
        sombrero: "false",
        gafas: "false",
        pelo: "pelirrojo",
        estilo: "liso",
        calvo: "true"
    },
    {
        id: "David",
        img: "/public/assets/characters/David19.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: "false",
        rubor: "false",
        barba: "true",
        sombrero: "false",
        gafas: "false",
        pelo: "rubio",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Bernard",
        img: "/public/assets/characters/Bernard20.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "marrones",
        nariz: "grande",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "true",
        gafas: "false",
        pelo: "castaño",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "George",
        img: "/public/assets/characters/George21.jpeg",
        genero: "masculino",
        estado: "triste",
        ojos: "marrones",
        nariz: "pequeña",
        boca: "grande",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "true",
        gafas: "false",
        pelo: "blanco",
        estilo: "liso",
        calvo: "false"
    },
    {
        id: "Tom",
        img: "/public/assets/characters/Tom22.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "azules",
        nariz: "pequeña",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "true",
        pelo: "negro",
        estilo: "liso",
        calvo: "true"
    },
    {
        id: "Herman",
        img: "/public/assets/characters/Herman23.jpeg",
        genero: "masculino",
        estado: "feliz",
        ojos: "marrones",
        nariz: "grande",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "pelirrojo",
        estilo: "rizado",
        calvo: "true"
    },
    {
        id: "Anne",
        img: "/public/assets/characters/Anne24.jpeg",
        genero: "femenino",
        estado: "triste",
        ojos: "marrones",
        nariz: "grande",
        boca: "pequeña",
        bigote: "false",
        rubor: "false",
        barba: "false",
        sombrero: "false",
        gafas: "false",
        pelo: "negro",
        estilo: "rizado",
        calvo: "false"
    }
]


const facialButtons = [

    {
        id: 0,
        atributo: "genero",
        valor: "masculino",
        img: "./public/assets/atributos/masculino.png"

    },
    {
        id: 1,
        atributo: "genero",
        valor: "femenino",
        img: "./public/assets/atributos/femenino.png"

    },
    {
        id: 2,
        atributo: "estado",
        valor: "feliz",
        img: "./public/assets/atributos/feliz.png"

    },
    {
        id: 3,
        atributo: "estado",
        valor: "triste",
        img: "./public/assets/atributos/triste.png"

    },
    {
        id: 4,
        atributo: "ojos",
        valor: "marrones",
        img: "./public/assets/atributos/ojoMarron.png"

    },
    {
        id: 5,
        atributo: "ojos",
        valor: "azules",
        img: "./public/assets/atributos/ojoAzul.png"

    },
    {
        id: 6,
        atributo: "nariz",
        valor: "grande",
        img: "./public/assets/atributos/narizota.png"

    },
    {
        id: 7,
        atributo: "nariz",
        valor: "pequeña",
        img: "./public/assets/atributos/naricita.png"

    },
    {
        id: 8,
        atributo: "boca",
        valor: "grande",
        img: "./public/assets/atributos/bocaGrande.png"

    },
    {
        id: 9,
        atributo: "boca",
        valor: "pequeña",
        img: "./public/assets/atributos/bocaPequeña.png"

    },
    {
        id: 10,
        atributo: "bigote",
        valor: "true",
        img: "./public/assets/atributos/bigote.png"

    },
    {
        id: 11,
        atributo: "rubor",
        valor: "true",
        img: "./public/assets/atributos/rubor.png"

    },
    {
        id: 12,
        atributo: "barba",
        valor: "true",
        img: "./public/assets/atributos/barba.png"

    },
    {
        id: 13,
        atributo: "sombrero",
        valor: "true",
        img: "./public/assets/atributos/sombrero.png"

    },
    {
        id: 14,
        atributo: "gafas",
        valor: "true",
        img: "./public/assets/atributos/gafas.png"

    },
    {
        id: 15,
        atributo: "pelo",
        valor: "negro",
        img: "./public/assets/atributos/peloNegro.jpeg"

    },
    {
        id: 16,
        atributo: "pelo",
        valor: "castaño",
        img: "./public/assets/atributos/peloCastaño.jpeg"

    },
    {
        id: 17,
        atributo: "pelo",
        valor: "pelirrojo",
        img: "./public/assets/atributos/peloPelirrojo.jpeg"

    },
    {
        id: 18,
        atributo: "pelo",
        valor: "rubio",
        img: "./public/assets/atributos/peloRubio.jpeg"

    },
    {
        id: 19,
        atributo: "pelo",
        valor: "blanco",
        img: "./public/assets/atributos/peloBlanco.jpeg"

    },
    {
        id: 20,
        atributo: "estilo",
        valor: "rizado",
        img: "./public/assets/atributos/rizado.png"

    },
    {
        id: 21,
        atributo: "estilo",
        valor: "liso",
        img: "./public/assets/atributos/liso.png"

    },
    {
        id: 22,
        atributo: "calvo",
        valor: "true",
        img: "./public/assets/atributos/calvo.jpeg"

    },
]




export const guessWhoGame = (parentDiv) => {
   
    const guessWhoDiv = document.createElement("div");
    guessWhoDiv.id = "guessWhoDiv";
    const atributtes = document.createElement("div");
    atributtes.id = "atributtes";

    parentDiv.appendChild(guessWhoDiv);
  
   

   
    for (const character of characters) {

        const characterDiv = document.createElement("div");
        characterDiv.id = "characterDiv";
        const characterImg = document.createElement("img");
        characterImg.src = character.img;

        guessWhoDiv.appendChild(characterDiv);
        characterDiv.appendChild(characterImg);
        
    }

    for (const facialButton of facialButtons) {

        const uniqueFacialAtributte = document.createElement("button");
        uniqueFacialAtributte.id = "facialButton";
        const facialImg = document.createElement("img");
        facialImg.src = facialButton.img;

        guessWhoDiv.appendChild(atributtes);
        atributtes.appendChild(uniqueFacialAtributte);
        uniqueFacialAtributte.appendChild(facialImg);
        
    }
    
}

