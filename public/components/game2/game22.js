const atributosDisponibles = (characters, features) => {
    
    const listaDeAtributos =   {
        
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
  

    for (const character of characters) {
        if (character.visible === true) {
            for (const key of Object.keys(listaDeAtributos)) {
                listaDeAtributos[key].push(character[key])
                
            }
            
        }
        
    }
  

    for (const key of Object.keys(listaDeAtributos)) {
        listaDeAtributos[key] = [...new Set(listaDeAtributos[key])] 
        console.log(key + " " + listaDeAtributos[key])
        if (listaDeAtributos[key].length <= 1) {
           for (const feature of features) {
            console.log(feature.atributo + " " + key )
            if (feature.atributo === key) {
                
                const greyFeature = document.getElementById(feature.id)
                    greyFeature.style.filter = "opacity(30%)";
            }
           }
            
        }
    }
}




