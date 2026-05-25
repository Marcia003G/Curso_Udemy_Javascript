var user = "Alejo"
var persona = {
    nombre : "Alejo",
    sexo: "Masculino"
}

var miObjeto = {
    nombre : "Ciapfa",
    edad : 2020,
    importante : true,
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a+b,
    otroObjeto : persona,
        /*nombre : "Alejo",
        sexo: "masculino"*/
    fecha: new Date()
}

var {nombre} = miObjeto

var otraFuncion = (text,{otroObjeto}) => {
    console.log(otroObjeto. sexo)
    console.log(text)
}

//console.log(nombre)
//console.log(miObjeto.miFuncion(4,8))
//console.log(miObjeto.fecha.getFullYear())
//console.log(otraFuncion(miObjeto))
otraFuncion(miObjeto.texto, miObjeto)