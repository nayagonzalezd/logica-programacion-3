
const campoNumero = document.getElementById("numero");
const botonCalcular = document.getElementById("botonCalcular");
const valorResultado = document.getElementById("valorResultado");
const operacion = document.getElementById("operacion");

botonCalcular.addEventListener("click", function () {
    const texto = campoNumero.value.trim();

    if (texto === "") {
        valorResultado.textContent = "¡Ups!";
        operacion.textContent = "Por favor, ingresa un número.";
        return;
    }

    const numero = Number(texto);

    if (!Number.isSafeInteger(numero) || numero < 0) {
        valorResultado.textContent = "¡Ups!";
        operacion.textContent = "Ingresa un entero no negativo.";
        return;
    }

    let factorial = 1;
    const pasos = [];

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
        pasos.push(i);
    }

    valorResultado.textContent =
        factorial.toLocaleString("es-CO");

    if (numero === 0) {
        operacion.textContent = "0! = 1";
    } else {
        operacion.textContent =
            numero + "! = " + pasos.join(" × ") +
            " = " + factorial.toLocaleString("es-CO");
    }
});
