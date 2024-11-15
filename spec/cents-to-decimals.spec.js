describe("function centsToDecimals", function() {
  it("test 1. Deberian convertir centimos a euros", function() {
    expect( centsToDecimals(100) ).toBe(1)
    expect( centsToDecimals(2453) ).toBe(24.53)
    expect( centsToDecimals(0) ).toBe(0)
    expect( centsToDecimals(-230) ).toBe(-2.3)
  })

  it("test 2. Debe retornar undefined si el argumento no es de tipo numero", function() {
    expect( centsToDecimals("hola") ).toBeUndefined()
  })

  it("test 3. Debe retornar 0 si el argumento no es recibido", function() {
    expect( centsToDecimals() ).toBe(0)
  })

})

