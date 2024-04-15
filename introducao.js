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
console.log(4 .toString(2))
console.log(5 .toString(2))
console.log(6 .toString(2))
console.log(7 .toString(2))
console.log(8 .toString(2))

// 10 -a , 11 - b , 12 ....15 - f
console.log((15).toString(16))