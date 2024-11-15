console.log("probando")

/* 

const nombreDeObjeto = {
  nombreDePropiedad: valorDeLaPropiedad,
  key: value,
}

*/

const virtualPet = {
  name: "Fluffy",
  isHappy: true,
  favoriteFoods: ["pescado", "zanahoria", "manzana"],
  color: "naranja",
  ownerName: "Alex",
  "product code": "XGFH3245"
}

console.log(virtualPet)

// notación de punto
console.log(virtualPet.name)

// notación de corchetes
console.log(virtualPet["name"])

console.log(virtualPet["product code"])

let nombreDePropiedad = "product code"
console.log(virtualPet[nombreDePropiedad])

// actualizar y crear propiedades

virtualPet.color = "azul" // modificar (si ya existia)

virtualPet.age = 2 // agregar (si no existia antes)

// palabra reservada delete para borrar propiedades de un objeto
delete virtualPet.ownerName

console.log(virtualPet)

// analizar objetos

// console.log( Object.keys(virtualPet) ) // devuelve array con todas las propiedades

// for in

for ( let key in virtualPet ) {
  console.log(key) // nombre de propiedad

  // console.log(virtualPet.key) // no podemos :(
  console.log(virtualPet[key])

}
