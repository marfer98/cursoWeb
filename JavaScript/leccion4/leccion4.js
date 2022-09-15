let condicion = true;

if (condicion){
    console.log("Verdadero");
}else{
    console.log("falso");
}

let numero = 5;

if (numero ==1){
    console.log("numero 1");
}else if(numero == 2){
    console.log("numero 2");
}else if (numero == 3){
    console.log ("es tre");
}else if (numero == 4){
    console.log ("es 4");
}else{
    console.log("numero desconocido")
}

let mes ='12';
let estacion;

if (mes == 12||mes== 1 || mes == 2){
    estacion= "Verano";
}else if(mes == 3||mes== 4 || mes ==5){
    estacion= "Otoño";
}else if(mes == 6||mes== 7 || mes ==8){
    estacion= "Invierno";
}else if(mes == 9||mes== 10 || mes ==11){
    estacion= "Primavera";
}else{
    estacion="Valor incorrecto";
}
console.log(estacion);

/*
6am - 11 am Buenos días
12pm - 18pm Buenas Tardes
19pm - 24pm Buenas Noches 
0am - 6am Durmiendo
*/
let hora = 12;
let mensaje;
if(hora==6 && hora <=11){
    mensaje="Buenos días";
}else if(hora==12 && hora <=18){
    mensaje="Buenas Tardes";
}else if(hora==19 && hora <=24){
    mensaje="Buenas Noches ";
}else if(hora==0 && hora <6){
    mensaje="No molestar, estoy durmiendo, krj";
}else{
    mensaje="Valor incorreto";
}
console.log(mensaje);

let numero1 = 2;
let numeroTexto= "Valor desconocido";

switch(numero1 ){
    case 1:
        numeroTexto= "Numero Uno";
        break;
    case 2: 
        numeroTexto= "Numero Dos";
        break;
    case 3:
        numeroTexto= "Numero tres";
        break;
    case 4:
        numeroTexto= "Numero cuatro";
        break;
    default:
        numeroTexto ="Caso no encontrado";
}
console.log(numeroTexto);

let mesS= 4;
let estacionS;

switch(mesS){
    case 12:  case 1: case 2:
        estacionS = "Verano";
        break;
    case 3:  case 4: case 5:
        estacionS = "Otoño";
        break;
    case 7:  case 6: case 8:
        estacionS = "Invierno";
        break;
    case 9:  case 10: case 11:
        estacionS = "Primavera";
        break;
    default:
        numeroTexto ="Caso no encontrado";
}
console.log(estacionS)