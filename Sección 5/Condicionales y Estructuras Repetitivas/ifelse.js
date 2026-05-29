var variable = true

if(variable){
    console.log("Verdadero")
}else{
    console.log("Falso")
}

var variable1 = 24

if(variable1){
    console.log("Verdadero")
}else{
    console.log("Falso")
}

var edad = 18

if(edad >= 18 && edad <= 30){
    console.log("Joven adulto")
}else if(edad < 18){
    console.log("Niño o adolescente")
}else if(edad > 30 && edad <= 55){
    console.log("Adulto")
}else if(edad > 55){
    console.log("Indefinido")
}

var nota = 7
if(nota >= 7 && nota <= 10){
    console.log("Pasa")
}else if(nota < 7){
    console.log("No Pasa")
}

var color = "morado"
if(color == "azul" || color == "rojo" || color == "amarillo"){
    console.log("color primario")
}else if(color == "morado" || color == "verde" || color == "naranja"){
    console.log("color secundario")
}else{
    console.log("indefinido")
}

var numero = -1
if(numero >= 0){
    console.log("positivo")
}else if(numero < 0){
    console.log("negativo")
}else{
    console.log("indefinido")
}

var vegetales = "cebolla"
if(vegetales == "cebolla" || vegetales == "papa" || vegetales == "zanahoria"){
    console.log("verdura")
}else if(vegetales =="tomate" || vegetales == "aji" || vegetales == "manzana"){
    console.log("fruta")
}else{
    console.log("indefinido")
}

var animal = "perro"
if(animal =="perro" || animal == "gato" || animal == "conejo"){
    console.log("Animal domestico")
} else if (animal == "leon" || animal == "tigre" || animal == "ballena"){
    console.log("Animal salvaje")
}else{
    console.log(desconocido)
}