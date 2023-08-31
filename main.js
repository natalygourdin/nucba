
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parImpar = (num) =>{
    if (num % 2 === 0) {
        console.log(num + " es un número par.");
      } else {
        console.log(num + " es un número impar.");
      }
}
parImpar(3);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const mayorMenor = (a,b) => {
    if (a > b) {
        console.log("El número " + a + " es mayor que " + b);
    }
    if (a === b) {
        console.log("El número " + a + " es igual que " +  b);

    } else {
        console.log("El número " + b + " es mayor que " +  a);

    }
}

mayorMenor(5,10);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploCinco = (num) => {
    if (num % 5 === 0) {
        console.log("El número " + num + " es múltiplo de 5");
    } else{
        console.log("El número " + num + " no es múltiplo de 5");

    }
}

multiploCinco(5);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const impresoraNumeros = ( num ) => {
    for (let index = 0; index <= num;  index++) {
        console.log("Los números son: " + index);
    }
}

impresoraNumeros(2)

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const numPalabra = (palabra, num) => {
    for (let i = 1; i <= num; i++) {
        console.log( i + " " + palabra );

        
    }
}
numPalabra('hola',5)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const cadena = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
} 


cadena([1,2,3,4,5,'hola']);


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. 
// Ayuda: Recuerden que el primer índice de un array es "0".

const cadenaDiez = (arr10) => {
    for (let i = 0; i < arr10.length; i++) {
       if ( i !==4) {
             console.log(arr10[i]);
            } 

      }

}
cadenaDiez([1,2,3,4,5,6,7,8,9,10]);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const cadenaNumero = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
            console.log("El número " + arr[i] + " multiplicado por "+num+" da como resultado: "+arr[i]*num); 
       }
}

cadenaNumero([1,2,3,4,5], 4);