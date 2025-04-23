
// ---------------------------------------------------------------
test("One dollar should be 156.5 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen (1.07)).toBe(156.5); 
})
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDolar } = require('./app.js');
    expect(fromEuroToDolar (1)).toBe(1.07); 
})
test("One yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound (156.5)).toBe(0.87); 
})