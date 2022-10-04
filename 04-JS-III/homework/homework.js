// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length-1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var n = array.length;

  for (x = 0; x < n; x++){
    array[x] = array[x] + 1;
  }
  return(array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  k = palabras.join(" ");
  return(k);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var n = array.length;
  var p = 0;

  for (x = 0; x < n; x++) {
    if (array[x]===elemento){p = p + 1};
  }
  if (p >= 1){return true};
  if (p < 1){return false}; 


}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  n = numeros.length;
  suma = 0;
  for (x = 0; x < n; x++) {
    suma = suma + numeros[x];
  }
  return(suma);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  n = resultadosTest.length;
  suma = 0;
  for (x = 0; x < n; x++) {
    suma = suma + resultadosTest[x];
  }
  return(suma/n);

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var n = numeros.length;
  var  d = numeros[0]; 
  for (x = 1; x < n; x++){ 
   if (d > numeros[x]){d = d;}
   if (d < numeros[x]){d = numeros[x];} 
  }
  return(d);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  n = arguments.length;
  suma = 1;
  if (n===0) {return(n)};
  if (n===1) {return(n)};
  if (n > 1) { 
  for (x = 0; x < n; x++) {
    suma = suma * arguments[x];
  }
  return(suma);
 }
 }

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

n = arreglo.length;
m = 18;
p = 0;
for (x = 0; x<n; x++){
if (arreglo[x] > m) {p = p + 1;}
}
return(p);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  var n = arguments.length;
  var a = "Es dia Laboral";
  var b = "Es fin de semana";
  
  for(x = 0; x < n; x++) { 
   if (arguments[x] === 3){return(a);}
   if (arguments[x] === 2){return(a);}
   if (arguments[x] === 4){return(a);}
   if (arguments[x] === 5){return(a);}
   if (arguments[x] === 6){return(a);}
   if (arguments[x] === 1){return(b);}
   if (arguments[x] === 7){return(b);}
   }
   }



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var numero = n.toString();
  var nueve = numero.charAt(0);
  var num = Number(nueve);

  if (num === 9){return true};
  if (num != 9){return(false);}    
}




function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var r = arreglo.length;
  var p = 0;
  for (x = 0; x < r; x++) { 
  if (arreglo[0] === arreglo[x]) {p = p + 1;}
} 
  if (p === r){return true};
  if (p != r) {return false};
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  n = array.length;
  var meses = [];
  var p = 0; 
  var k = 0;
  
  for (x = 0; x < n; x++){

    if (array[x] === "Enero") { 
       meses[k] = array[x];
       p = p + 1;
       k = k + 1};
    
       if (array[x] === "Marzo") { 
       meses[k] = array[x];
       p = p + 1;
       k = k + 1};
    
       if (array[x] === "Noviembre") { 
       meses[k] = array[x];
       p = p + 1;
       k = k + 1};
  }
    if (p === 3) {return(meses)};
    if (p != 3){return("No se encontraron los meses pedidos")};
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var n = array.length;
  var nuevo = [];
  var k = 0;
  
  for (x = 0; x < n; x++) {
    if (array[x] > 100) {
      nuevo[k] = array[x];
      k = k + 1; }
    } 
    return(nuevo);
  }



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  
  var suma = 0;
  var s = numero;
  var nuevo = [];
  var x = 0;

  while (x < 10){
    nuevo[x] = s + 2;
    suma = suma + nuevo[x];
    s = nuevo[x];
    x = x + 1;
    if (x === suma) {
      break;
    }
  }
  if (x === suma) {return("Se interrumpió la ejecución");}
  if (x != suma) {return(nuevo);}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  var c = numero;
  var nue = [];

  for (x = 0; x < 9; x++) {
    nue[x] = c + 2; 
    c = nue[x];
    }
  return(nue);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
