// Función principal del juego
function jugarJuego() {
    // Pedir al jugador que elija el tipo de juego
    const opcion = prompt("Elige el tipo de juego:\n\n1. Adivinar el número\n2. Resolver una suma\n3. Concatenar palabras");

    switch (opcion) {
        case "1":
            jugarAdivinaElNumero();
            break;
        case "2":
            resolverSuma();
            break;
        case "3":
            concatenarPalabras();
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción válida.");
            jugarJuego(); // Volver a pedir la opción
            break;
    }
}

// Función para jugar a adivinar el número
function jugarAdivinaElNumero() {
    // Generar un número aleatorio entre 1 y 100
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Array para almacenar los intentos del jugador
    const intentos = [];

    let intento;
    let intentoNumero;

    do {
        // Pedir al jugador que introduzca un número
        intento = prompt("Adivina el número secreto (entre 1 y 100):\n\nIntentos realizados: " + intentos.join(", ") + "\n\nEscribe 'salir' para abandonar el juego.");

        // Salir del juego si el jugador escribe "salir"
        if (intento === "salir") {
            alert("¡Gracias por jugar! El número secreto era " + numeroSecreto + ".");
            return; // Salir de la función
        }

        // Convertir el intento a número
        intentoNumero = parseInt(intento);

        // Validar el intento
        if (isNaN(intentoNumero) || intentoNumero < 1 || intentoNumero > 100) {
            alert("Por favor, introduce un número válido entre 1 y 100.");
        } else {
            // Agregar el intento al array
            intentos.push(intentoNumero);

            // Comprobar si el número coincide con el número secreto
            if (intentoNumero === numeroSecreto) {
                alert("¡Felicidades! ¡Has adivinado el número secreto en " + intentos.length + " intentos!");
                return; // Salir de la función
            } else {
                // Mostrar pista al jugador
                if (intentoNumero < numeroSecreto) {
                    alert("El número secreto es mayor que " + intentoNumero + ".");
                } else {
                    alert("El número secreto es menor que " + intentoNumero + ".");
                }
            }
        }
    } while (true); // Repetir el proceso hasta que el jugador adivine el número o decida salir
}

// Función para resolver una suma con números proporcionados por el usuario
function resolverSuma() {
    // Pedir al jugador que introduzca dos números
    const numero1 = parseFloat(prompt("Introduce el primer número:"));
    const numero2 = parseFloat(prompt("Introduce el segundo número:"));

    // Validar si se ingresaron números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, introduce números válidos.");
    } else {
        // Calcular la suma
        const suma = sumarNumeros(numero1, numero2);

        // Mostrar el resultado al jugador
        alert("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
    }
}

// Función para sumar dos números
function sumarNumeros(num1, num2) {
    return num1 + num2;
}
// Función principal del juego
function jugarJuego() {
    do {
        // Pedir al jugador que elija el tipo de juego
        const opcion = prompt("Elige el tipo de juego:\n\n1. Adivinar el número\n2. Resolver una suma\n3. Concatenar palabras\n\nEscribe 'salir' para abandonar el juego.");

        switch (opcion) {
            case "1":
                jugarAdivinaElNumero();
                break;
            case "2":
                resolverSuma();
                break;
            case "3":
                concatenarPalabras();
                break;
            case "salir":
                alert("¡Gracias por jugar!");
                return; // Salir del programa
            default:
                alert("Opción no válida. Por favor, elige una opción válida.");
                break;
        }
    } while (confirm("¿Quieres jugar de nuevo?"));
}

// Resto del código de las funciones de los juegos...

// Iniciar el juego
jugarJuego();


// Función para concatenar palabras
function concatenarPalabras() {
    // Pedir al jugador que introduzca dos palabras
    const palabra1 = prompt("Introduce la primera palabra:");
    const palabra2 = prompt("Introduce la segunda palabra:");

    // Concatenar las palabras
    const resultado = palabra1 + " " + palabra2;

    // Mostrar el resultado al jugador
    alert("La concatenación de las palabras es:\n\n" + resultado);
}

// Iniciar el juego
jugarJuego();
