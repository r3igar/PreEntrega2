// Función costo total
function calcularCostoTotal(producto, cantidad) {
    const precioUnitario = obtenerPrecioUnitario(producto);
    const costoTotal = calcularCosto(precioUnitario, cantidad);

    // Almacenar costo total Storage
    localStorage.setItem('costoTotal', costoTotal);

    return costoTotal;
}

// precio unitario
function obtenerPrecioUnitario(producto) {
    switch (producto) {
        case 1:
            return 100;
        case 2:
            return 150;
        case 3:
            return 200;
        default:
            return 0;
    }
}

// calcular costo total
function calcularCosto(precioUnitario, cantidad) {
    const iva = 0.21;
    const costoConIva = precioUnitario * cantidad * (1 + iva);
    const descuento = 50;
    const costoTotal = costoConIva - descuento;
    return costoTotal;
}

// Lógica principal
document.addEventListener('DOMContentLoaded', function () {
    const calcularButton = document.getElementById('calcularButton');
    calcularButton.addEventListener('click', function () {
        let productoSeleccionado = parseInt(document.getElementById('productoInput').value);
        let cantidadSeleccionada = parseInt(document.getElementById('cantidadInput').value);

 
        if (isNaN(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
            alert("Ingrese una cantidad válida.");
        } else {
            // Calcular y mostrar total
            const costoTotal = calcularCostoTotal(productoSeleccionado, cantidadSeleccionada);
            console.log("El costo total es: " + costoTotal);
            alert("El costo total es: " + costoTotal);
        }
    });

    // Recuperar el costo total del Storage
    const costoTotalGuardado = localStorage.getItem('costoTotal');
    if (costoTotalGuardado) {
        console.log("Costo total recuperado del Storage: " + costoTotalGuardado);
    }
});
