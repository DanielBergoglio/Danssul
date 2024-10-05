let precioUsuario = 350000
let descuentoUsuario = 5%

function calcularDescuento(precio,porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento)/ 100
    const precioConDescuento = precio - descuento

    return precioConDescuento
}

function pedirNumero(mensaje) {
    let numero = parseInt(prompt(mensaje))
    while (isNaN(numero) || (numero < 0)){
        numero = parseInt(prompt(mensaje))

    }

    return numero

}

function simuladorDescuento() {

    precio = pedirNumero ("Ingrese el precio de su producto seleccionado")

    descuentoUsuario =pedirNumero ("ingrese el procentaje de descuento")

    let precioFinal = calcularDescuento(precioUsuario, descuentoUsuario)


    alert(`
        El precio de su maquina agricola es: ${precioUsuario}.
        El descuento que se aplico fue de: ${descuentoUsuario}%.
        El precio final de su producto con el descuento es de: $${precioFinal}.
        `
        
        
        )
}


simuladorDescuento()
