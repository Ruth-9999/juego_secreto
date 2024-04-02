let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p')
//parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignarTextoElemento(elemento, texto){
    let textoHTML = document.querySelector(elemento)
    textoHTML.innerHTML = texto;
    return;
}
/*
function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(typeof(numeroSecreto));
   console.log(numeroSecreto);
   console.log(typeof(numeroDeUsuario));
   console.log(numeroDeUsuario);
   console.log(numeroDeUsuario===numeroSecreto);
    return;
 };
*/


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    // console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1)? 'vez' : 'veces' } `);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
     return;
 };

 function limpiarCaja() {
    /*let valorCaja= document.querySelector('#valorUsuario');
    valorCaja= '';*/
    //Se puede sintetizar mejor el codigo con esta otra opcion:
    document.querySelector('#valorUsuario').value='';
  }
  
function generarNumeroSecreto() {
   // return Math.floor(Math.random()*numeroMaximo)+1;
   /* _La idea es q no se repitan los numeros generados
   Entonces hacer una condicion de q si el numero generado ya esta en la lista
   volver a llamar la funcion y generar un nuevo numero.
      _Ademas si todos los numeros generados fueron jugados. Detener el juego.
   y mostrar un mensaje  */  

  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados.length);
  //console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p','Ya se jugaron todos los números posibles');  
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); // la funcion se llama a si misma. RECURSIVIDAD
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
 }

function condicionesIniciales(){
    //Reiniciar msj iniciales
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    // Generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // ReInicializar el contador de intentos
    intentos=1
}                                                                            

function reiniciarJuego(){
    // limpiar caja --> ya tenemos una funcion q hace eso 
    limpiarCaja();
    // Indicar las condiciones iniciales
    condicionesIniciales();
    // Deshabilitar boton "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();


