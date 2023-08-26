/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
 
  let nuevoArray = [];
  for (let key in objeto) {
   nuevoArray = Object.entries(objeto);
   
  }
  
  return nuevoArray;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let contador = 0;
   let nuevoArray = Array.from(string);
   let letras_contadas = contar_letras(nuevoArray);



function contar_letras (letras) {
  let letras_contadas = {};

  letras.forEach(function (letra) {
    if (letra in letras_contadas) {
      letras_contadas[letra]++;
    }
    else {
      letras_contadas[letra] = 1;
    }
  });

  console.log(Object.entries(letras_contadas));
  return Object.entries(letras_contadas)
}

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let nuevoStringArray = [];
   let arrayMayus = [];
  
   let stringToArray = string.split('');
   let minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   let mayusculas = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O',,'P','Q','R','S','T','U','V','W','X','Y','Z'];
   
   for (let i = 0; i < stringToArray.length; i++) {
      for (let x = 0; x < minusculas.length; x++) {
         if (stringToArray[i] === minusculas[x]) {
            nuevoStringArray.push(stringToArray[i]);
         } 
         
      }
      
   }
    let minusculasTxt = nuevoStringArray.join('');

   for (let j = 0; j < stringToArray.length; j++) {
      for (let k = 0; k < mayusculas.length; k++) {
         if (stringToArray[j] === mayusculas[k]) {
            arrayMayus.push(stringToArray[j]);
         }
      }
      
   }
   let mayusculasTxt = arrayMayus.join('');
   
   nuevoString = mayusculasTxt + minusculasTxt;
  
   return nuevoString;
   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let newArray= [];
   let fraseReverse = '';
   let fraseArray = frase.split(" ");
   for (let i = 0; i < fraseArray.length; i++) {
      let arrayInFrase = fraseArray[i].split("");
      
      let arrayInFraseReverse = arrayInFrase.reverse();
      
      newArray.push(arrayInFraseReverse.join(''));
      
   }
   
   return fraseReverse = newArray.join(' ');
   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroInvertido = '';
   let invertirNumeroComoCadena = numero => {
      let numeroInvertidoComoCadena = numero.toString().split("").reverse().join("");
      
      return numeroInvertidoComoCadena;
  };
  numeroInvertido = invertirNumeroComoCadena(numero);
  
  if (numero == numeroInvertido) {
   return 'Es capicua';
  }
  else{
   return 'No es capicua';
  } 
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let nuevoString = '';
   
   let stringToArray = string.split('');
   
   for (let i = 0; i < stringToArray.length; i++) {
      if (stringToArray[i] === 'a' ||  stringToArray[i] === 'b' || stringToArray[i] === 'c') {
         delete stringToArray[i];
      }
      nuevoString = stringToArray.join('');
      
   }
   return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
     
       return arrayOfStrings.sort(function (a, b) {
          return (a.length - b.length);
        });
      
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];
   
   for (let i = 0; i < array1.length; i++) {
      for (let x = 0; x < array2.length; x++) {
         if (array1[i] === array2[x]) {
            newArray.push(array2[x]);
         } 
         
      }
      
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
