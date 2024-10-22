function sumar() {
    realizarOperacion("suma");
}

function restar() {
    realizarOperacion("resta");
}

function multiplicar() {
    realizarOperacion("multiplicacion");
}

function dividir() {
    realizarOperacion("division");
}

function realizarOperacion(operacion) {

    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var resultado;


    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("No se puede dividir por cero.");
                return;
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert("El resultado de la " + operacion + " es: " + resultado);
}
