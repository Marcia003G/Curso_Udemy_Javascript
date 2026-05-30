let funcionParam = () => console.log("Soy una función")
let funcion = (callback) => {
    console.log("hola funcion")
    callback
}
funcion(funcionParam())

/*console.log(1)
setTimeout(() => console.log("hola mundo"),0)
console.log(2)
console.log(3)*/

for (let index = 1; index < 3; index++){
    console.log("Ya termine este bucle")
}

let saludar = () => console.log("Hellow there")
let ejecutar = (callback) => {
    console.log("Antes del callback")
    callback()
    console.log("Despues del callback")
}
ejecutar(saludar)

let sumar = (a,b) => {
    console.log(a+b)
}
let calcular = (callback) => {
    console.log("Calculando operacion ...")
    callback(5,6)
}
calcular(sumar)

for(let i=1; i <= 3; i++){
    setTimeout(() => {console.log(i)},0)}
console.log("Bucle terminado")

console.log("Inicio")
setTimeout(() => {console.log("Mensaje retrasado")},1)
console.log("Fin")

console.log("A")
setTimeout(() => console.log("B"),5)
setTimeout(()=> console.log("C"),2)
console.log("D")

