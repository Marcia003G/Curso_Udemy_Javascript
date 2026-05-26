//>=<
var acceso = true
var accesoU = a => a 

accesoU(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")

var accesoN = (b,n) => console.log(`Usuario ${n} Acceso ${b}`)
accesoN(acceso,"Ciapfa")

var accesoM= () => {
    console.log("Usuario en ejecución")
    return true
}
accesoM(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")

var suma = (a,b) => console.log(a + b)
suma(5,3)

var saludo = nombre => console.log(`Hola ${nombre}`)
saludo("Isaac")

var numero = n => console.log(n % 2 == 0 ? "par" : "impar")
numero(7)