document.addEventListener('DOMContentLoaded', function () {
    const historialCostos = JSON.parse(localStorage.getItem('historialCostos')) || [];

    async function fetchPreciosUnitarios() {
        try {
            const response = await axios.get('./prrecios.json');
            return response.data.preciosUnitarios;
        } catch (error) {
            console.error('Error al obtener los precios unitarios:', error);
            return {};
        }
    }

    function calcularCostoTotal(producto, cantidad, preciosUnitarios) {
        const precioUnitario = preciosUnitarios[producto] || 0;
        const costoTotal = calcularCosto(precioUnitario, cantidad);
        historialCostos.push(costoTotal);
        localStorage.setItem('historialCostos', JSON.stringify(historialCostos));
        return costoTotal;
    }

    function calcularCosto(precioUnitario, cantidad) {
        const iva = 0.21;
        const costoConIva = precioUnitario * cantidad * (1 + iva);
        const descuento = 50;
        const costoTotal = costoConIva - descuento;
        return costoTotal;
    }

    const calcularButton = document.getElementById('calcularButton');
    calcularButton.addEventListener('click', async function () {
        let productoSeleccionado = parseInt(document.getElementById('productoInput').value);
        let cantidadSeleccionada = parseInt(document.getElementById('cantidadInput').value);
        const resultadoElement = document.getElementById('resultado');

        if (isNaN(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
            resultadoElement.textContent = "Ingrese una cantidad válida.";
        } else {
            const preciosUnitarios = await fetchPreciosUnitarios();
            const costoTotal = calcularCostoTotal(productoSeleccionado, cantidadSeleccionada, preciosUnitarios);
            resultadoElement.textContent = "El costo total es: " + costoTotal;

            console.log("Historial de costos: ");
            historialCostos.forEach((costo, index) => {
                console.log(`Costo ${index + 1}: ${costo}`);
            });
        }
    });
});
