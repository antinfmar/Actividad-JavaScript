/**
 * Implementa la serie de Fibonacci
 * @param {*} n: número de elementos de la serie.
 * @returns vector con la serie de Fibonacci.
 * @author: Sustituye tu nombre y apellidos aquí
 */
function fibonacci(n)
{
    let vector=new Array(1,1); // Creamos un vector para alamcenar el cálculo
    
    
    // ESCRIBE TU CÓDIGO AQUÍ
    for (let i = 2; i<= n; i++) {
        vector[i] = vector[i -1] + vector[i - 2];
    }
    
    return vector; // Retorno de la función
}

/**
 * Aplicación principal Ejercicio 7
 * @author: José Gaspar Sánchez García
 */
function appMain()
{
    const salidaHTML=document.getElementById("salida");
    let x=parseInt(prompt("Indique el número de elementos de la serie de Fibonacci: "));
    let v=fibonacci(x);

    console.log(`Fibonacci(${x}) = [ ${v} ]`);
    // alert("Fibonacci: "+v);
    salidaHTML.innerHTML="Fibonacci("+x+") = ["+v+"].";
}

// Exportamos la funcion fibonacci para poder realizar el Testing
module.exports={
    fibonacci,
};