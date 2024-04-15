let numero =1234567.890

console.log(numero.toFixed(5))
console.log(typeof numero.toFixed(5))

console.log(numero.toPrecision(15))
console.log(typeof numero.toPrecision(15))

console.log((123).toPrecision(6))

numero = 12.34567
console.log(numero.toExponential())
console.log(numero.toExponential(4))

numero = 15
console.log(numero.toString())
console.log(typeof numero.toString())

//0 - 0, 1 - 1, 2 -01, 3 -11

console.log(0 .toString(2))
console.log(1 .toString(2))
console.log(2 .toString(2))
console.log(3 .toString(2))