function conversorUnidades() {  
    let continuar = true;  

    while (continuar) {  
        const tipo = prompt("¿Qué deseas convertir?\n1: metros a kilómetros\n2: kilómetros a metros\n3: Celsius a Fahrenheit\n4: Fahrenheit a Celsius\n5: Salir");  

        let valor;  
        let resultado;  

        switch (tipo) {  
            case "1":  
                valor = parseFloat(prompt("Ingresa el valor en metros:"));  
                resultado = valor / 1000;  
                alert(valor + " metros son " + resultado + " kilómetros.");  
                break;  
            case "2":  
                valor = parseFloat(prompt("Ingresa el valor en kilómetros:"));  
                resultado = valor * 1000;  
                alert(valor + " kilómetros son " + resultado + " metros.");  
                break;  
            case "3":  
                valor = parseFloat(prompt("Ingresa el valor en grados Celsius:"));  
                resultado = (valor * 9/5) + 32;  
                alert(valor + " grados Celsius son " + resultado + " grados Fahrenheit.");  
                break;  
            case "4":  
                valor = parseFloat(prompt("Ingresa el valor en grados Fahrenheit:"));  
                resultado = (valor - 32) * 5/9;  
                alert(valor + " grados Fahrenheit son " + resultado + " grados Celsius.");  
                break;  
            case "5":  
                continuar = false;  
                alert("Saliendo del conversor.");  
                break;  
            default:  
                alert("Opción inválida. Por favor, elige una opción del 1 al 5.");  
        }  
    }  
}  

//! Llamar a la función para iniciar el conversor  
conversorUnidades();