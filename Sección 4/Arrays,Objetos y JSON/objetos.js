var user = "Marcia"

var miObjeto = {
    nombre : "mesa",
    edad : 2020,
    importante : true,
    ciudad : "Ibarra",
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : "Alejo", 
    sexo : "Masculino"
}

var {nombre} = miObjeto

var otroFuncion = ({texto}) => texto

console.log(miObjeto.nombre)
console.log(miObjeto.miFuncion(4,2))
console.log(miObjeto.texto)
console.log(nombre)
console.log(otroFuncion(miObjeto))

var auto = {
    marca : "Toyota",
    modelo : 2022,

    encender : () => "Auto enncendido"
}
console.log(auto.encender())

var ciudadano = {
    nombre: "Carlos",
    direccion: {
        ciudad : "Quito",
        pais : "Ecuador"
    }
}
console.log(ciudadano.direccion.pais)

var estudiante = {
    nombre : "Marcia",
    nota : 8,
    materia : "Programacion"
}
var {nombre, nota} = estudiante
console.log(nombre)
console.log(nota)