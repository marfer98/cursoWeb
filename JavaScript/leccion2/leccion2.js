//tipo de dato string
var nombre= "Marcos";
console.log(nombre);

//tipo de dato numerico
var numero= 1998;
console.log(numero);

//tipo de dato object
var objeto ={
    nombre: "Antonio",
    apellido: "Fernández",
    telefono: "0981288060"
}
console.log(typeof objeto);

nombre=10;
console.log(typeof nombre);

//boolean
var bandera = true;
console.log(bandera);

//function
function miFuncion(){}
console.log(miFuncion)

//symbol
var simbolo =Symbol("mi simbolo");
console.log(simbolo);

//clase es una funcion
class persona{
    constructor (nombre,apellido){
        this.nombre= nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

//indefinido
var x;
console.log(x);

// null
var y =null;
console.log(y);

var autos= ['bmw','ford']
console.log(autos);

var z='';
console.log(z);

//concatenar cadenas
var nombre1 ="Marcos";
var nombre2= "Antonio";

var nombreCompleto = nombre1 +' '+ nombre2;
console.log(nombreCompleto);

var x = nombre1 + 1998
console.log(x);

x= nombre1 +(25);
console.log(x);

