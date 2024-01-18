// Función costo total de productos
function calcularCostoTotal(producto, cantidad) {
    const precioUnitario = obtenerPrecioUnitario(producto);
    const costoTotal = calcularCosto(precioUnitario, cantidad);
    return costoTotal;
}

// Función precio unitario
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

// Función calcular costo total
function calcularCosto(precioUnitario, cantidad) {
    const iva = 0.21;
    const costoConIva = precioUnitario * cantidad * (1 + iva);
    const descuento = 50; 
    const costoTotal = costoConIva - descuento;
    return costoTotal;
}

// Lógica principal
let productoSeleccionado = parseInt(prompt("Seleccione un producto: 1, 2, o 3"));
let cantidadSeleccionada = parseInt(prompt("Ingrese la cantidad deseada"));

// Validar que la cantidad sea un número positivo
if (isNaN(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
    alert("Ingrese una cantidad válida.");
} else {
    // Calcular y mostrar el costo total
    const costoTotal = calcularCostoTotal(productoSeleccionado, cantidadSeleccionada);
    console.log("El costo total es: " + costoTotal);
    alert("El costo total es: " + costoTotal);
}
