
// creacion de string que contiene el tipo de facuturacion y el porcentaje

const porcentajePorFacturacion = [
    {
        tipo: "Remito",
        porcentaje: 1.82,
    },
    {
        tipo: "Factura A (no gravado)",
        porcentaje: 1.93,
    },
    {
        tipo: "Factura A (gravado)",
        porcentaje: 1.60,
    }
]

//      logica para obtener los valores de los inputs
// declaracion de variables que obtiene los elementos por sus ids
const inputDescripcion = document.getElementById("descripcion");
const inputPrecio = document.getElementById("precio"); 
const selectImpuesto = document.getElementById("impuesto");
const resultado = document.getElementById("resultado"); 

inputDescripcion.addEventListener("change", function () { //evento para obtener lo que ingresa el usuario en el inout de descripcion
    const contenidoDescripcion = this.value; // para obtener el valor del input

    inputPrecio.addEventListener("change", function () { // para cuando el usuario defina el precio de costo que funcionará con el calculo de la funcion
        const valorPrecio = parseInt(this.value); 

        selectImpuesto.addEventListener("change", function () { //lo mismo pero para obtenerlo de la seleccion del select
            const seleccionDeUsuario = this.value; 

            if (seleccionDeUsuario === "Remito") { // si el usuario selecciona remito
                const index = porcentajePorFacturacion[0]; // accedemos al indice [0] del array
                const pocentajesIndividuales = index.porcentaje; //para sacar el valor del indice por "porcentaje"
                const calculo = inputPrecio.value * pocentajesIndividuales; //para calcular el precio
                resultado.textContent = "$ " + parseFloat(calculo).toFixed(2); //para mostrar el resultado en el html concatenando texto con el resultado
            }

            // lo mismo para el segundo indice
            else if (seleccionDeUsuario === "Factura A (no gravado)") {
                const index = porcentajePorFacturacion[1]; //segundo indice
                const pocentajesIndividuales = index.porcentaje;
                const calculo = inputPrecio.value * pocentajesIndividuales;
                resultado.textContent = "$ " + parseFloat(calculo).toFixed(2);
            }
            //y tercero
            else if (seleccionDeUsuario === "Factura A (gravado)") {
                const index = porcentajePorFacturacion[2]; //tercer indice
                const pocentajesIndividuales = index.porcentaje;
                const calculo = inputPrecio.value * pocentajesIndividuales;
                resultado.textContent = "$ " + parseFloat(calculo).toFixed(2);
            }
            else (resultado.textContent = "Defina los valores") // en caso de seleccionar la opcion default de vuelta muestra este mensaje
        });

    });

});

// Para agregar los registros a la tabla
const activarBoton = document.getElementById("registrar"); // se saca el boton por su id
activarBoton.addEventListener('click', // esta vez le decimos que con el click sobre el boton, se ejecute
    function agregarRegistro() { //la funcion que se encargara de eso

        if (inputDescripcion.value !== "" && inputPrecio.value !== "") { //validacion de datos para decidir que se ejecuta
            const tabla = document.getElementById('tablaRegistro').getElementsByTagName('tbody')[0]; //acceso a la tabla y al elemento tbody en el indice [0]
            const nuevaFila = tabla.insertRow(); //indicamos que inserte la fila
            const celdaProducto = nuevaFila.insertCell(); // indicamos que inserten todas las celdas
            const celdaPrecio = nuevaFila.insertCell();
            const celdaFacturacion = nuevaFila.insertCell();
            const celdaResultado = nuevaFila.insertCell();
            const celdaEliminar = nuevaFila.insertCell();

            // los valores que se insertaran en la fila y celdas que se declaran arriba
            celdaProducto.textContent = inputDescripcion.value;
            celdaPrecio.textContent = "$ " + inputPrecio.value;
            celdaFacturacion.textContent = selectImpuesto.value;
            celdaResultado.textContent = resultado.textContent;

            // para eliminar el registro desde la misma tabla 
            celdaEliminar.textContent = "Eliminar"; //indicamos que agregue ese texto
            celdaEliminar.style.color = "red"; // un colorcito para que se vea bonito
            //por ultimo la funcion que elimina el registro cuando se hace click sobre la celda que elimina
            celdaEliminar.addEventListener("click", function () { 
                tabla.deleteRow(nuevaFila);
            });

            // para que despues de que se realice todo lo anterior se limpuien los inputs para seguir agregando cosas
            document.getElementById('descripcion').value = '';
            document.getElementById('precio').value = '';
            document.getElementById('impuesto').value = '';
            document.getElementById('resultado').value = '';
            document.getElementById('registrar').value = '';
        }
        else //alert por si no se cumple la validacion de arriba :D
            alert("complete los datos solicitados");
        ;
    });



