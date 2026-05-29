let pelicula1 = {
    titulo : "La monja",
    anio : 2018,
    valoracion : 4
}

let pelicula2 = {
    titulo : "Annabelle",
    anio : 2014,
    valoracion : 3
}

let pelicula3 = {
    titulo : "Annabelle 2",
    anio : 2017,
    valoracion : 5
}

let pelicula4 = {
    titulo : "El conjuro",
    anio : 2013,
    valoracion : 5
}

let pelicula5 = {
    titulo : "El conjuro 2",
    anio : 2016,
    valoracion : 3
}

let peliculas = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5]

let nuevoObjeto = ({valoracion}) => {
    valoracion  >= 5 ? valoracion += 1 : valoracion += 0
    let objeto = {}
    objeto["valoracion"] = valoracion
    return objeto
}

let miNuevaValoracion = peliculas.map(nuevoObjeto)
console.log(miNuevaValoracion)

let reducirValoracion = (acum, {valoracion}) => acum + valoracion

let miTotalValoracion = peliculas.reduce(reducirValoracion,0)

console.log(miTotalValoracion)

let sumarValoracion = ({valoracion}) => valoracion >= 5 ? valoracion += 1 : valoracion += 0

let valorado = peliculas.map(sumarValoracion)

console.log(valorado)



var numeros = [1,2,3]
var duplicar = numero => numero * 20
var resultado = numeros.map(duplicar)
console.log(resultado)

var frutas = ["manzanas","pera","uva"]
var mayusculas = fruta => fruta.toUpperCase()
var resultado = frutas.map(mayusculas)
console.log(resultado)

var numeros1 = [5,10,15]
var sumar = (acumular,numero1) => acumular + numero1
var total = numeros1.reduce(sumar,0)
console.log(total)

var numeros2 = [8,3,20,11]
var mayor = (acumular2,numeros2) => numeros2 > acumular2 ? numeros2 : acumular2
var resultado = numeros2.reduce(mayor)
console.log(resultado)

var edades = [15,20,18,22]
var aumentar = edad => edad + 1
var nuevasEdades = edades.map(aumentar)
console.log(nuevasEdades)
var sumar = (acum,edad) => acum + edad
var total = nuevasEdades.reduce(sumar,0)
console.log(total)

var precios = [12,8,15]
var iva = precio => precio * 1.15
var preciosFinales = precios.map(iva)
console.log(preciosFinales)
var totalCompra = (acum,precio) => acum + precio
var total = preciosFinales.reduce(totalCompra,0)
console.log(total)