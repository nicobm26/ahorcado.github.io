function hacerVisible(elemento){
  elemento.classList.remove("invisible")
  elemento.classList.add("visible")
}

function hacerInvisible(elemento){
  elemento.classList.remove("visible")
  elemento.classList.add("invisible")
}

function getRandomArbitrary(min=1, max=palabras.length) {
  let numero = Math.random() * (max - min) + min;
  return Math.floor(numero);
}

function escogerPalabra(arregloPalabras){
  let max = palabras.length;
  const min = 1
  let numero = Math.random() * (max - min) + min;
  return arregloPalabras[Math.floor(numero)];
}

function palabraRandom(){
  return palabras[getRandomArbitrary()]
}

function agregarPalabra(palabras, palabra){  
  return palabras.push(palabra);
}

function limpiarCanvas(){
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function reiniciarVariablesGlobales(){
  letrasExistentes = []
  palabraEscrita = 0
  acumulador= 60
  letrasEquivocadas = []
}