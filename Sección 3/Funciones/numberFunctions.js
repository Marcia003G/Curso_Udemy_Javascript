var numero = 777
var res = Number.isInteger(numero)

console.log(res)

var numero1 = 777.4
var res1 = Number.parseInt(numero1)

console.log(res1)

var numero2 = "777"
console.log(Number.parseFloat(numero2))

var numero3 = 100
console.log(Number.isFinite(numero3))

var numero4 = 50
console.log(Number.isSafeInteger(numero4))

var numero5 =3.1458238
console.log(Number.parseFloat(numero5).toFixed(2))