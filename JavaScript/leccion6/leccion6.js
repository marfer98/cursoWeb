//ARREGLOS
//let autos = new Array("BMW", "Mercedes");
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos [0]);
console.log(autos [2]);

for (let i = 0;i<autos.length; i++){
    console.log(i + " " +autos [i]);
}
//Modificar arreglos
autos[1]= "MercedesBenz";
console.log(autos [1]);

//agregar valores al array
autos.push("Audi");
console.log(autos);

console.log(autos.length);

autos[autos.length]="Cadillac"
console.log(autos);

autos[6]="Porshe";
console.log(autos);

//saber si es un array
console.log(Array.isArray(autos));
console.log(autos instanceof Array);