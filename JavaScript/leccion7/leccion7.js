//Funciones 
function miFuncion (a,b){
    //console.log("suma: " + (a+b));
    return a+b;
}
//llamado de funcion
let resultado = miFuncion(10,5);
console.log(resultado);

//declaración de una función tipo expresión
let x= function(a,b){return a-b};
resultado = x(3,6);
console.log(resultado);

//funciones que se llaman a si misma, no pueden ser reutilizables
(function (a, b){
    console.log("Ejecutando la funcion: " + (a+b));
})(2,6);

