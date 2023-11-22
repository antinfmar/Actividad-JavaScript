/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Autor/a
 */
function calcularMedia(v)
{
    // IMPLEMENTA TU CODIGO AQUÍ
    if (v.length==0) {
        return 0;
    }
    let suma=v.reduce((previous,current) => current+=previous);
    let resultado=suma/v.length;
    return resultado;
}
/**
 * Obtiene la nota mínima
 * @param {Array} v 
 * @returns minima
 */
function calcularMinimo(v)
{
    // <-- CORRIGE E IMPLEMENTA EL CODIGO
    if (v.length==0) {
        return 0;
    }
    let minima=Math.min(...v);
    return minima;
}
/**
 * Obtiene la nota Máxima
 * @param {Array} v 
 * @returns maxima
 */
function calcularMaximo(v)
{
    if (v.length==0) {
        return 0;
    }
    let maxima=Math.max(...v); // <-- CORRIGE E IMPLEMENTA EL CODIGO
    return maxima;
}
/**
 * Cuenta el número de aprobados
 * @param {Array} v 
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(v)
{
    let aprobados=v.filter(number => number >= 5);

    // COMPLETA TU CODIGO

    return aprobados.length;
}
/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v)
{
    let suspensos=v.filter(number => number < 5);
    
    // COMPLETA TU CODIGO

    return suspensos.length;
}



/**
 * Aplicacion principal Ejercicio14
 * @author: José Gaspar Sánchez García
 */

function appMain(){

    // Indique cuantas notas desea introducir
    let numeroNotas=parseInt(prompt("¿Cuantas notas desea introdurcir?"));
    let notas=new Array();
    var n=-1;
    // Leemos notas desde teclado
    console.info(`Leemos ${numeroNotas} Notas desde teclado.`)
    for(let i=0; i<numeroNotas;i++)
    {
        do{
            n=parseFloat(prompt("Introduzca la nota número "+(i+1)+": "));
        }while(n<0 || n>10)
        notas[i]=n;
        console.log(`notas[${i}]: ${notas[i]}`);
    }
    console.log("La nota media es "+calcularMedia(notas));
    console.log("La nota mínima es "+calcularMinimo(notas));
    console.log("La nota máxima es "+calcularMaximo(notas));
    console.log("Aprobados: "+contarAprobados(notas));
    console.log("Suspensos: "+contarSuspensos(notas));
    return 0;
}

// Exportamos las funciones para poder realizar el Testing
module.exports={
    calcularMedia,
    calcularMaximo,
    calcularMinimo,
    contarAprobados,
    contarSuspensos,
};