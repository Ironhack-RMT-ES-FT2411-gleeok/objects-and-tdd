// funcion que reciba centimos y los convierta a euros

function centsToDecimals(cent) {

  if (cent === undefined) {
    return 0
  }

  if (typeof cent !== "number") {
    return undefined
  }

  let euros = cent / 100
  return euros

}



console.log("test 1. Deberian convertir centimos a euros")
console.log( centsToDecimals(100) === 1 )
console.log( centsToDecimals(2453) === 24.53 )
console.log( centsToDecimals(0) === 0 )
console.log( centsToDecimals(-230) === -2.3 )

console.log("test 2. Debe retornar undefined si el argumento no es de tipo numero")
console.log( centsToDecimals("hola") === undefined )

console.log("test 3. Debe retornar 0 si el argumento no es recibido")
console.log( centsToDecimals() === 0 )