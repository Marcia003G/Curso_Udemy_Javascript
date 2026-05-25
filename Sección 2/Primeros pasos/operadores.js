var a=2
var a2=5
var a3='2'
//a=a+2
//+,-,*,/,$,**,++,-- Operadores aritméticos
//a += 3 (-=, *=, /=, %=, **=) Operadores de asignación
console.log(a)
//==, !=, ===, !==, >, >=, <, <=, Operadores de comparación
console.log(a==a2)
console.log(a==a3)
console.log(a===a3)
console.log(a != a3)
console.log(a !== a3)
console.log(a >= a2)
console.log(a <= a2)

// && (and), || (or), !. Operadores lógicos
var v = true
var f = false
var i = true

console.log(v && f)
console.log(v && i)
console.log(v||f)
console.log(!v)
console.log(!f)

//operadores ternario: condicion ? true : false
var edad = 19
var res = edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad")
console.log(res)