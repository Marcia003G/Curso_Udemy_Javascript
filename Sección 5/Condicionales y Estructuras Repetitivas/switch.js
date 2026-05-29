var opcion = 1

switch (opcion){
    case 1:
        console.log("Menu de ususario")
        break;
    case 2:
        console.log("Menu administrativo")
        break;
    case 3:
        console.log("Configuracion")
        break;
    case "Nuevo menu":
        let miNuevoMenu = "Salida"
        console.log(miNuevoMenu)
        break;
    default:
        console.log("Break")
        break;
}

var estado = 1
switch(estado){
    case 1:
        console.log("normal")
        break;
    case 2:
        console.log("critico")
        break;
    case 3:
        console.log("fallecido")
        break;
    default:
        console.log("Break")
        break;
}

var dia = 1
switch(dia){
    case 1:
        console.log("lunes")
        break;
    case 2:
        console.log("martes")
        break;
    case 3:
        console.log("miercoles")
        break;
    case 1:
        console.log("jueves")
        break;
    case 2:
        console.log("viernes")
        break;
    case 3:
        console.log("sabado")
        break;
    case 1:
        console.log("domingo")
        break;
    default:
        console.log("Break")
        break;
}

var usuario = "administrador"
switch(estado){
    case "administrador":
        console.log("acceso administrador")
        break;
    case "cliente":
        console.log("acceso cliente")
        break;
    case "trabajador":
        console.log("acceso trabajador")
        break;
    default:
        console.log("sin acceso")
        break;
}

var herramienta = 1
switch(herramienta){
    case 1:
        console.log("agregar")
        break;
    case 2:
        console.log("eliminar")
        break;
    case 3:
        console.log("editar")
        break;
    default:
        console.log("herramienta invalida")
        break;
}

var animal = "gato"
switch(animal){
    case "gato":
        console.log("fuera de riesgo")
        break;
    case "perro":
        console.log("fuera de riesgo")
        break;
    case "koala":
        console.log("fuera de riesgo")
        break;
    case "rinoceronte negro":
        console.log("extinto")
        break;
    default:
        console.log("estado del animal desconocido")
        break;
}
