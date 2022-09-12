//operadores JS
let a =3;
let b= 2;
let z= a+b;
console.log("El resultado de la suma es: "+ z);

z=a-b;
console.log("El resultado de la resta es: "+ z);

z=a*b;
console.log("El resultado de la multiplicación es: "+ z);

z=a/b;
console.log("El resultado de la división es: "+ z);

z=a%b;
console.log("El resultado del modulo es: "+ z);

z=a**b;
console.log("El resultado de la exponente es: "+ z);

//incremento
//pre-incremento (operador ++ antes de la variable)
z= ++a;
console.log(z);


//post-incremento (operador ++ despues de la variable)
z= b++;
console.log(z);
console.log(b); //aumenta en la segunda vez que se utiliza

//decremento
//predecremento
z= --a;
console.log(a);
console.log(z);
//post-decremento
z=b--;
console.log(b);
console.log(z);

let x = 3;
let y = 2;
let w = 1;
let s = 4
let m = x*y+w /s;
console.log(m)

m=(w+x)*y/s;
console.log(m);
//OPERADORES DE ASIGNACIÓN
s+=1
console.log(s); //s= s+1

s-=1
console.log(s); 

//OPERADORES DE COMPARACIÓN
let p=3 , e=2, q="3";
let com= p==e;
console.log(com);

com= a===q
console.log(com);

//disdinto a
com= a!=q;
console.log(com);

com= a!==q
console.log(com);
 
//OPERADORES RELACIONALES
com= p>=e;
console.log(com);

com= p<=e;
console.log(com);

let par = 9;
if(par % 2 == 0){
    console.log("es par");
}else{
    console.log("impar");
}

/*let edad = 20, adulto =18;
if(edad >=adulto){
    console.log("puede quitar chip a su nombre");
}else{
    console.log("sigapy");
}

//OPERADOR AND
let num =15;
let valMin =0, valMax=10;

if (num>=valMin && num<=valMax){
    console.log("dentro del rango");
}else{
    console.log("fuera del rango");
}

//operador or
let vacaciones = false, descanso=true;

if (vacaciones || descanso ){
    console.log("jaha");
}else{
    console.log("hule");
}

//OPERADOR TERNARIO
let resultado=(3>2) ? "verdadero" : "falso"
console.log(resultado)

let numero = 7;
resultado =(numero % 2 == 0) ? "Numero par" : "Numero Impar";
console.log(resultado);*/

//String a numero
let miNumero = "17c";
//console.log(typeof miNumero);

let edad = Number(miNumero); //Number esa función convierte un string a number
console.log(typeof edad);

if (isNaN(edad)){
    console.log("No es numero");
}else{
    if (edad >= 18){
        console.log("Puede votar");
    }else{
        console.log("No puede votar");
    }
}
//ternario
if (isNaN(edad)){
    console.log("No es numero");
}else{
    if (edad >= 18){
        console.log("Puede votar");
    }else{
        miNumero =(edad >= 18) ? "Puede votar" : "No puede votar";
        console.log(miNumero)
    }
}

