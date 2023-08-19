//Tipos de dato:
//string:"palabras"
//number:1,2,3
//boleans:true,false
//arrays:[lista de datos]
//objects:{lista de clave:valor}

//typeof:se usa para definir que tipo de dato es.

//FUNCIONES

//Declarativas:function nombre de la funcion(parametros){}
//expresion:var nombre de la variable=function(parametros){}
//
//return:sirven para devolver un valor como por ejemplo:
    function multiply(a, b = 1) {
        return a * b;
    }
    console.log(multiply(5, 2));
//     Expected output: 10

    console.log(multiply(5));
//     Expected output: 5

//CONDICIONALES:
//if:es para validar un dato,el cual si se valida se hara alguna accion,por ejemplo: 
//  if(condicion a cumplir){
//    accion si si se cumplue}
//
//else:es para hacer una accion por defecto si ningun if se cumple,ejemplo:
//  else{
//    accion por defecto}
//
//else if:lo mismo que el if para no poner mas de uno
//
//switch:sirve para validar muchos valores posibles de una variable,por ejemplo:  
//  switch(variable a la que se le va a validar que dato/s tiene){
//    case "posible valor de la variable":
//      accion
//      break
//    case "otro posible valor de la variable"
//      accion
//      break
//  default:
//      accion por defecto si ninguna cumple
//}






//EXTRAS:
//Math.random:sirve para sacar un numero aletorio:Math.random()*limite de numeros
//si se quiere tener un numero entre un maximo y un minimo,por ejemplo:
//  Math.random() * (max - min) + min
//
//Math.floor:sirve para definir un numero flotante 
//parse.int:sirve para definir un numero entero
//
//
