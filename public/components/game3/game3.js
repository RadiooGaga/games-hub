import "./game3.css";


let chosenCategory = "cats";
const options = ["cats", "dogs", "animals", "toy"];



const callApiCollection = async (categoria)=> {

    let id = "74vRF6e1l9a6WTlt7b7Nh9VT5zqNeqK-APQEnqePUHo";
    let url = `https://api.unsplash.com/search/photos?query=${categoria}&per_page=8&client_id=${id}`;
    console.log(categoria)
    console.log(url)
    const options = {
        method: 'GET' };
        try {
    
        const response = await fetch(url, options);
        const res = await response.json()
        const collect = res.results;
        let collection = collect.map(data => {
            return {
              id: data.id,
              pictureUrl: data.urls.small
            };
          });
          console.log(collection); 
          
          let newCollection =[...collection,...collection];   
          return newCollection.sort((a, b) => Math.random() - Math.random());
        
        } catch (error) {
            console.log(error)
            console.log("error en la busqueda")
        }
}


let collection = [];
let counter = 0;
let card1;
let card2;
let puntuacion = 0;



// CREANDO MEMORY GAME
export const memoryGame = (parentDiv) => {

    puntuacion = 0;
    collection = callApiCollection(chosenCategory)
    

    const memoryGameDiv = document.createElement("div");
    memoryGameDiv.id = "memoryGameDiv";
    const divPoints = document.createElement("div");
    divPoints.id = "divPoints";
    const selectDiv = document.createElement("select");
    selectDiv.className = "selectDiv";

    for (const option of options) {
        const selectOption = document.createElement("option");
        selectOption.textContent = option;
        selectOption.value = option;
        selectDiv.appendChild(selectOption);
  
      }
    selectDiv.value = chosenCategory;


    selectDiv.addEventListener("change", () => {
        chosenCategory = selectDiv.value;
        memoryGameDiv.innerHTML = "";
        memoryGame(parentDiv);
        console.log("evento")
    }) 


    const pointsSpan = document.createElement("span");
    pointsSpan.id = "pointsSpan";
    pointsSpan.textContent = `Puntuación:` + " " + puntuacion;
    const divCards = document.createElement("div");
    divCards.id = "divCards";
    

    parentDiv.appendChild(memoryGameDiv);
    memoryGameDiv.appendChild(divPoints);
    divPoints.appendChild(pointsSpan);
    divPoints.appendChild(selectDiv);
    memoryGameDiv.appendChild(divCards);



// PINTAR CARTAS

   collection.then(pictures => {
        pictures.forEach((data) => {

            const divCard = document.createElement("div"); 
            divCard.className = "divCard";
            divCards.appendChild(divCard);
            const picture = document.createElement("img");
        
            picture.src = "";
            divCard.appendChild(picture);
        
    
            divCard.addEventListener("click", () => {
                
                    select(divCard, data, picture)
            });
    
        });
    
    });
}


const resetValues = () => {
  counter = 0;
  card1 = undefined;
  card2 = undefined;
  console.log(puntuacion);
};

const resetCard = (cartaGenerica) => {
    cartaGenerica.nodoHTML.id = "";
    cartaGenerica.nodoHTML.src = "";
    "url(https://www.transparenttextures.com/patterns/argyle.png)";
};


const checkCard = () => {
  if (card1.cardData === card2.cardData) {
    console.log(card1)
    puntuacion++;
    resetValues();
  } else {
    puntuacion--;
    setTimeout(() => {
      //DAR VUELTA SI HAY ERROR
      resetCard(card1);
      resetCard(card2);
      resetValues();
    }, 700); //TARDA CASI UN SEGUNDO EN VOLTEAR
  }

  const points = document.getElementById("pointsSpan");
  points.textContent = `Puntuación:` + " " + puntuacion;
  
};

const select = (divCard, data, picture) => {
    console.log(counter)
  if (counter < 2) {
    counter++;
    divCard.style.backgroundColor = "#5c9bc1d4"; 
    picture.id = "pic";
    picture.src = data.pictureUrl;// aqui meter la foto
  }

  if (counter === 1) {
    card1 = {
      nodoHTML: picture,
      cardData: data.pictureUrl,
    };
    console.log(card1);
  }

  if (counter === 2) {
    // cuándo se ha seleccionado OTRA carta.
    card2 = {
      nodoHTML: picture,
      cardData: data.pictureUrl,
    };
    console.log(card2);
    checkCard();
  }
  // comparar esas dos cartas seleccionadas.
};




