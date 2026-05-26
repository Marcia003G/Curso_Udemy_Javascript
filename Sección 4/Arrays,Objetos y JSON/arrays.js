var permitido = "Usuario permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre : "Pepe",
    miAutomovil : [
        pintura = {
            Marca : "Pinturillo",
            precio : 500,
            color : "negro azavache"
        },
        vendedor = {
            nombre : "Marcelo",
            edad : 40,
            celular : 121323
        }
    ]

}

var miArray = ["Ciapfia",2020,3.14,true,["Otro Array", "Array", 99999], miFuncion(permitido),persona]

console.log(miArray[0])
console.log(miArray[4][0])
console.log(miArray[6].nombre)
console.log(miArray[6].miAutomovil[0].color)
console.log(miArray[6].miAutomovil[1].celular)

var colores = ["Rojo","verde","amarillo"]
console.log(colores[2])

var numeros = [1,2,3]
console.log(numeros[1])

var situacion = estado => estado
var animales = ["gato", "perro", "cabra", "T-rex" + situacion(" extinto")]
console.log(animales[3])
 
