//CICLOS
//let contador =0;

/*while(contador < 3){
    console.log(contador);
    contador++;
}

do{
    console.log(contador);
    contador++;  
}while(contador < 3);*/

for(let contador =0; contador < 3; contador++){
    console.log(contador);
   
}


//numeros pares
for (let par =0; par<=10; par++){
    console.log(par);
    if (par % 2==0){
        //continue; ir a la siguiente iteracion
        console.log(par);
    }
    if (par % 2!==0){
        console.log(par);
        //break;
    }
}
for (let par =0; par<=10; par++){
    if (par % 2!==0){
        continue;// ir a la siguiente iteracion
    }
    console.log(par);
}