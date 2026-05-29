for(i =1; i < 3; i++){
    if(i==1){
        console.log("Hola" + i + " vez")
    }else{
    console.log("Hola" + i + " veces")
    }
}

var miArray = ["Hola",2020,"Adios"]

for(let index = 0; index <= miArray.length; index++){
    const element = miArray[index]
    console.log(element)
}

var persona1 = {
    nombre : "Ciapa",
    edad : 14
}

var persona2 = {
    nombre : "Damian",
    edad : 23
}

var persona3 = {
    nombre : "Lorenzo",
    edad : 40
}

var personas = [persona1,persona2,persona3]
for (let index = 0; index < personas.length; index++){
    if(personas[index].edad >= 20){
        break;
    }
    const element = personas[index].nombre
    console.log(element)
}

personas.forEach(element => console.log(element.edad))
for(var h =3; h >= 1; h--){
    console.log(h)
}

var frutas = [ "manzana", "pera", "uva"]
frutas.forEach(fruta => {
    console.log(fruta.toUpperCase())
})

var colores = ["rojo", "azul", "verde"]
colores.forEach((color,index) => {
    console.log(index + ": " + color)
})

var productos = [
    {nombre: "Mouse", precio: 15},
    {nombre: "Teclado", precio: 25},
    {nombre: "Monitor", precio: 120}
]
productos.forEach(producto => {
    console.log(producto.nombre + " cuesta $" + producto.precio)
})