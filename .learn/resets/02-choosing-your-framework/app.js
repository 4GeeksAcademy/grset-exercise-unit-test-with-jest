// One euro is:
//let oneEuroIs = {
   // "JPY": 156.5, // japan yen
  //  "USD": 1.07, // us dollar
   // "GBP": 0.87, // british pound
//}

// Declaramos una función con el nombre exacto "valueInYen"
const fromDollarToYen = function(valueInYen) {
    // Convertimos el valor a yenes
    let fromDollarToYen = valueInYen * 156.5;
    // Retornamos el valor en yenes
    return fromDollarToYen;
}
// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInPound) {
    // Convertimos el valor a pounds
    let fromYenToPound = valueInPound * 0.87;
    // Retornamos el valor en dólares
    return fromYenToPound;
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Contenido de app.js 
console.log("Hello World")

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar };
module.exports = { sum, fromEuroToDollar }