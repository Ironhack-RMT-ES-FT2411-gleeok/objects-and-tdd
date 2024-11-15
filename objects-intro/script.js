console.log("probando")

/* 

const nombreDeObjeto = {
  nombreDePropiedad: valorDeLaPropiedad,
  key: value,
}

*/

// const virtualPet = {
//   name: "Fluffy",
//   isHappy: true,
//   favoriteFoods: ["pescado", "zanahoria", "manzana"],
//   color: "naranja",
//   ownerName: "Alex",
//   "product code": "XGFH3245",
//   saludar() {
//     console.log("Fluffy te dice hola!")
//   }
// }

// console.log(virtualPet)

// // notación de punto
// console.log(virtualPet.name)

// // notación de corchetes
// console.log(virtualPet["name"])

// console.log(virtualPet["product code"])

// let nombreDePropiedad = "product code"
// console.log(virtualPet[nombreDePropiedad])

// // actualizar y crear propiedades

// virtualPet.color = "azul" // modificar (si ya existia)

// virtualPet.age = 2 // agregar (si no existia antes)

// // palabra reservada delete para borrar propiedades de un objeto
// delete virtualPet.ownerName



// // analizar objetos

// // console.log( Object.keys(virtualPet) ) // devuelve array con todas las propiedades

// // for in

// for ( let key in virtualPet ) {
//   console.log(key) // nombre de propiedad

//   // console.log(virtualPet.key) // no podemos :(
//   console.log(virtualPet[key])

// }

const virtualPet = {
  name: "Fluffy",
  isHappy: true,
  favoriteFoods: ["pescado", "zanahoria", "manzana"],
  color: "naranja",
  ownerName: "Alex",
  "product code": "XGFH3245",
  saludar() {
    // this => cuando lo usamos en objetos, apunta al objeto donde se està llamando.
    // console.log(this)
    console.log(`${this.name} te dice hola!`)
  },
  changeMood() {
    if (this.isHappy) {
      this.isHappy = false;
      console.log(`${this.name} ahora está triste :(`)
    } else {
      this.isHappy = true;
      console.log(`${this.name} ahora está feliz :)`)
    }
  },
  eatRandomFood() {
    // busca una comida aleatoria de las favoritas
    let randomNumber = Math.random() * this.favoriteFoods.length// 0 - 2.9999
    let randomPosition = Math.floor(randomNumber)
    // console.log(randomPosition)
    let randomFood = this.favoriteFoods[randomPosition]
    
    // hace console.log para comerla
    console.log(`${this.name} se está comiendo un@ ${randomFood}`)
  }
}

virtualPet.name = "patatita"

virtualPet.saludar()

virtualPet.changeMood()

virtualPet.eatRandomFood()

// console.log(virtualPet)



// Estructura de data

const usuarios = [

  {
    username: "Victor",
    bitcoin: 2,
    hasNFTs: false
  },
  {
    username: "Miguel",
    bitcoin: 0,
    hasNFTs: true
  },
  {
    username: "Mariluz",
    bitcoin: 1.4,
    hasNFTs: true
  }

]

console.log(usuarios[0].username)

// cambiar nfts a falso del ultimo usuario

usuarios[usuarios.length - 1].hasNFTs = false

// console.log(usuarios[usuarios.length -1])

// agregar 2 bitcoins al valor anterior del primer usuario

// usuarios[0].bitcoin = usuarios[0].bitcoin + 2
usuarios[0].bitcoin += 2

// console.log(usuarios[0])

// agregar 2 bitcoins a Miguel
for (let i = 0; i < usuarios.length; i++) {

  let cadaUsuario = usuarios[i]

  if (cadaUsuario.username === "Miguel") {
    cadaUsuario.bitcoin += 2
  }

}

// console.log(usuarios)

usuarios.push({
  username: "Kurt",
  bitcoin: 400,
  hasNFTs: false
})

console.log(usuarios)