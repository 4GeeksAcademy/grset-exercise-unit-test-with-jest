

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
module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, 
};

function fromDollarToYen(dollar){
    var c1 = dollar / oneEuroIs["USD"];
    var yen = oneEuroIs["JPY"];
    var calculo =  c1 * yen;
    return calculo;
};
function fromEuroToDolar(euro){
    var c2 = euro * oneEuroIs["USD"];
    return c2;
};
function fromYenToPound(yen){
    var c3 = yen / oneEuroIs["JPY"];
    var pound = oneEuroIs["GBP"];
    var calculo =  c3 * pound;
    return calculo;
};
module.exports = {fromDollarToYen , fromEuroToDolar , fromYenToPound}; 