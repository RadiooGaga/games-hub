import "./game3.css";

// 10 cartas. 5 tipos de cartas distintas, porque serán 5 parejas.

const collection = [
  {
    id: "",
    picture: "red",
  },
  {
    id: "",
    picture: "orange",
  },
  {
    id: "",
    picture: "blue",
  },
  {
    id: "",
    picture: "pink",
  },
  {
    id: "",
    picture: "grey",
  },
  {
    id: "",
    picture: "red",
  },
  {
    id: "",
    picture: "orange",
  },
  {
    id: "",
    picture: "blue",
  },
  {
    id: "",
    picture: "pink",
  },
  {
    id: "",
    picture: "grey",
  },
];

let counter = 0;
let card1;
let card2;
let puntuacion = 0;

collection.sort((a, b) => Math.random() - Math.random());
/* sort para coger un num aleatorio y num aleatorio y los resta, y esto significa que va a 
coger una posición y otra y las va a ordenar según si uno es mayor que otro, y que eso 
dependerá de una aleatoriedad que le estamos dando con el.random */


// CREANDO MEMORY GAME
export const memoryGame = (parentDiv) => {

    callApiCollection();

    const memoryGameDiv = document.createElement("div");
    memoryGameDiv.id = "memoryGameDiv";
    const divPoints = document.createElement("div");
    divPoints.id = "divPoints";
    const pointsSpan = document.createElement("span");
    pointsSpan.className = "pointsSpan";
    pointsSpan.textContent = `Puntuación:` + " " + puntuacion;
    //document.body.insertBefore(points, memoryGameDiv);
    const divCards = document.createElement("div");
    divCards.id = "divCards";
    /*const imgCard = document.createElement("img");
    imgCard.id = "imgCard";*/


    parentDiv.appendChild(memoryGameDiv);
    memoryGameDiv.appendChild(divPoints);
    divPoints.appendChild(pointsSpan);
    memoryGameDiv.appendChild(divCards);
   


/* recorrer el array de cartas para meter las cartas y pintarlas en el juego */

   collection.forEach((data) => {

    const divCard = document.createElement("div"); 
    divCard.className = "card";
    divCards.appendChild(divCard);

    divCard.addEventListener("click", () =>
        select(divCard, data)
    );
    
    
    //divCard.appendChild(imgCard);
    });

}




const callApiCollection = async ()=> {

    let id = "74vRF6e1l9a6WTlt7b7Nh9VT5zqNeqK-APQEnqePUHo";
    let url = `https://api.unsplash.com/search/photos?query=cats&per_page=12&client_id=${id}`
        const response = await fetch(url);
        const collection = await response.json()
        const cardCollection = collection.results;
        console.log(cardCollection);
        

        for (let i = 0; i < collection.results.length; i++) {
            const picture = collection[i];
            console.log(picture)
            
        }
    }











const resetValues = () => {
  counter = 0;
  card1 = undefined;
  card2 = undefined;
  console.log(puntuacion);
};


const resetCard = (cartaGenerica) => {
  cartaGenerica.nodoHTML.style.backgroundColor = "#e0776c";
  cartaGenerica.nodoHTML.style.backgroundImage = "";
    "url(https://www.transparenttextures.com/patterns/argyle.png)";
};



const checkCard = () => {
  if (card1.cardData.picture === card2.cardData.picture) {
    puntuacion++;
    resetValues();
  } else {
    puntuacion--;
    setTimeout(() => {
      //aquí, dar la vuelta si no se acierta, y cambiar el bckgr color y bckgr image.
      resetCard(card1);
      resetCard(card2);
      resetValues();
    }, 500); //si no acierto, tarda medio segundo en que se den la vuelta de nuevo.
  }

  pointsSpan.textContent = `Puntuación:` + " " + puntuacion;
};

const select = (divCard, data) => {
  if (counter < 2) {
    counter++;
    divCard.style.backgroundColor = data.picture; // aqui meter la foto
    divCard.style.backgroundImage = "none";
  }

  if (counter === 1) {
    card1 = {
      nodoHTML: divCard,
      cardData: data,
    };
    console.log(card1);
  }

  if (counter === 2) {
    //2. necesitamos saber cuándo se ha seleccionado OTRA carta.
    card2 = {
      nodoHTML: divCard,
      cardData: data,
    };
    console.log(card2);
    checkCard();
  }
  // necesitamos comparar esas dos cartas seleccionadas.
};




