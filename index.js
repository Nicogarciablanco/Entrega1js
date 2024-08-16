/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */

console.log("==============EJ1====================")

function ejercicioN1(n){
    if (n % 2 == 0)
        console.log(`${n} Es par`)
    else{
        console.log(`${n} Es impar`)
    }
}

ejercicioN1(3)

/* 2- Crear una función que reciba dos números por parámetro 
e indique en consola que número es mayor, y si ninguno lo es, 
indicar por consola que son iguales. */

console.log("==============EJ2====================")

function ejercicioN2(a,b){
 if(a > b)
    console.log(`${a} es mayor que ${b}`)
    else if(a < b) {
        console.log(`${a} es menor que ${b}`)
    }else{
        console.log(`${a} es igual que ${b}`)
    }
}

ejercicioN2(8,7)

/* 3- Crear una función que reciba un número por parámetro e indique 
en consola si ese número es múltiplo de 5. */

console.log("==============EJ3====================")

function ejercicioN3(n){
    if(n % 5 === 0){
        console.log(`${n} es multiplo de 5`)
    }else{
        console.log(`${n} no es multiplo de 5`)
    }
}

ejercicioN3(250)

/* 4- Crear una función que reciba un número por parámetro e imprima 
por consola todos los números desde el 0 hasta llegar a ese número. */

console.log("==============EJ4====================")

function ejercicioN4(n){
    for (let i = 0; i <= n ;i++){
        console.log(`este numero es ${i}`)
    }
}

ejercicioN4(10)

/* 5 - Crear una función que reciba una palabra y 
un número por parámetro e imprima por consola 
esa palabra la cantidad correspondiente al número indicado. */
console.log("==============EJ5====================")

function multiplicarPalabra2(palabra, num) {
    for (let i = 1; i <= num; i++) {
    }
    console.log(`${palabra.repeat(num)}`);
  }
  
multiplicarPalabra2("hola ", 10);

/* 6 - Crear una función que reciba un array por parámetro 
e imprima por consola todos los valores de ese array. */

console.log("==============EJ6====================")

const numbers = [1, 2, 3, 4, 5, 6, 7, "pepe"]

for (let numero of numbers){
    console.log(numero)
}

/* 7 - Crear una función que reciba un array con 10 números 
e imprima por consola todos los valores de ese array, 
menos el que se encuentre en la 5ta posición del mismo. 
Ayuda: Recuerden que el primer índice de un array es "0". */

console.log("==============EJ7====================")

const numerosHasta10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function saltearNumero(array){
    for (let i = 0; i < array.length ;i++){
        if(i === 4){
            continue;
        }
        console.log(array[i]);
    }
        
        
}

saltearNumero(numerosHasta10)

/* 8 - Crea una función que reciba un array de números 
y un número por parámetro e imprima por consola cada número 
del array multiplicado por el número pasado por parámetro. */

console.log("==============EJ8====================")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function multiplicadoPorN(array,n){
    const porN = array.map(array => array * n)
    console.log(porN)
}

multiplicadoPorN(numeros,5)