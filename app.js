let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;
let numeroJuegos = 2;
let numero = parseInt('123abc');
let numero2 = Number('123abc');
console.log(numero);
console.log(numero2);

let listasNumerosSorteados = [];


function asignarTextoElemento(elemento, texto) {
    //selecciona la etiqueta en el parametro elemento
    let elementoHTML = document.querySelector(elemento);
    //asigna valor al parametro, cambiando su contenido
    elementoHTML.innerHTML = texto;
    return;
}

function  verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value= "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);
    //Si ya sorteamos todos lo números
    if (listasNumerosSorteados.length == numeroMaximo) {
        if (numeroJuegos > 1) {
            numeroJuegos--;
            listasNumerosSorteados = [];
            asignarTextoElemento('p',`Aún te queda ${numeroJuegos} ${numeroJuegos === 1 ? 'intento' : 'intentos'}` )
        } else {
            asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        }
       
    } else {
    //Si el número generado está incluido en la lista
        if (listasNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar numero aleatorio
    //Deshabilitar el boton de nuevo juego
    //Inicializar el núevo intento
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


