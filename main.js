// precios unitarios por producto
const preciosUnitarios = {
    1: 100,
    2: 150,
    3: 200
};

// historial de costos totales
const historialCostos = [];

// Función costo total
function calcularCostoTotal(producto, cantidad) {
    const precioUnitario = obtenerPrecioUnitario(producto);
    const costoTotal = calcularCosto(precioUnitario, cantidad);

    // costo total en el historial
    historialCostos.push(costoTotal);

    return costoTotal;
}

// precio unitario
function obtenerPrecioUnitario(producto) {
    return preciosUnitarios[producto] || 0;
}

// calcular costo total
function calcularCosto(precioUnitario, cantidad) {
    const iva = 0.21;
    const costoConIva = precioUnitario * cantidad * (1 + iva);
    const descuento = 50;
    const costoTotal = costoConIva - descuento;
    return costoTotal;
}

// Lógica
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

            // Mostrar historial de costos
            console.log("Historial de costos: ");
            historialCostos.forEach((costo, index) => {
                console.log(`Costo ${index + 1}: ${costo}`);
            });
        }
    });
});



