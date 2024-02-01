/*
    Tipos de Dados:
    1. String -> Textos
    2. Numbers -> Números
    3. Boolean -> Boleano

    Operadores aritméticos:
    + - * /
*/

// String
const texto1 = "Textos com aspas duplas"
const texto2 = 'Textos com aspas simples'
const texto3 = `textos com a crase` // Template literals ou Template string
console.log(texto1)
console.log(texto2)
console.log(texto3)

// Numbers e String
const myIdade = 18
const myCar = 'carro'
const myString = `Minha idade é ${myIdade}, já sou adulto e agora estou estudando e futuramente estarei 
andando de ${myCar}.`
// ${} é código js e com crase eu posso pular linha
console.log(myString)


// Numbers
const numero1 = 3.126 * 2
const fakeNumero = "32 / 4" // aspas conta como textos
console.log(numero1)
console.log(fakeNumero)