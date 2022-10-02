let palabras = ["vampiro","gato","bogota","navidad","portatil","alegria","vaso","tigre","avion"]

function getRandomArbitrary(min=1, max=palabras.length) {
  let numero = Math.random() * (max - min) + min;
  return Math.floor(numero);
}

function palabraRandom(){
  return palabras[getRandomArbitrary()]
}

function agregarPalabra(palabras, palabra){  
  return palabras.push(palabra);
}

function escogerPalabra(arregloPalabras){
  let max = palabras.length;
  const min = 1
  let numero = Math.random() * (max - min) + min;
  return arregloPalabras[Math.floor(numero)];
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

let btnComenzar = document.querySelector(".botones__comenzar")
if(btnComenzar.textContent == "Iniciar juego"){
  btnComenzar.addEventListener("click",  (evento) => habilitarCanvas2(evento) )
}

function dibujarBase(){
  let x = 30
  let y = 260
  let pantalla = document.querySelector("canvas");
  let pincel = pantalla.getContext("2d");
  pincel.beginPath()
  pincel.lineTo(x,y)
  pincel.lineTo(x+200,y)
  pincel.stroke()
  pincel.closePath()
}

function habilitarCanvas2(evento){ 
  evento.stopPropagation();
  limpiarCanvas()
  reiniciarVariablesGlobales()
  let palabraIngresada = document.querySelector(".inputPalabraNueva")
  if(palabraIngresada.value != ""){
    agregarPalabra(palabras, palabraIngresada.value);
    palabraIngresada.value = ""
  }
  console.log("el conjutno es "+ palabras)
  palabraIngresada.classList.remove("visible")
  palabraIngresada.classList.add("invisible")
  let palabra = ""
  palabra = palabraRandom()
  console.log(palabra.toUpperCase() + " dentro de habilitarCanvas()")

  let canvas = document.querySelector("canvas")
  let letraIngresada = document.querySelector(".inputPalabra")
  letraIngresada.value = ""

  canvas.classList.remove("invisible")
  canvas.classList.add("visible")

  letraIngresada.classList.remove("invisible")
  letraIngresada.classList.add("visible")

  dibujarBase()


  function presionada(evento){
    let letra = evento.key
    letraIngresada.value = "";
    letraIngresada.value = letra;
    ahorca(palabra, evento.key)
  }
  letraIngresada.onkeydown = presionada;

  let botones = document.querySelector(".botones")
  botones.style.paddingTop = "12px"
  let btnComenzar = document.querySelector(".botones__comenzar")
  let btnDesistir = document.querySelector(".botones__agregar")

  btnComenzar.textContent = "Nuevo Juego"
  btnDesistir.textContent = "Desistir"
  // btnDesistir.addEventListener("click", (evento) => desistirAnonimo(evento));

  //prueba
  if (btnComenzar.textContent === "Nuevo Juego"){
    // btnDesistir.addEventListener("click", (evento) => desistirAnonimo(evento)); NO me estaba BOrrando de esta forma 
    btnDesistir.addEventListener("click", desistirAnonimo); 
    console.log("dentro del if donde pregunta si bton comenzar == Nuevo juego") 
  }
}

const desistirAnonimo = () =>{
  reiniciarVariablesGlobales()
  let canvas = document.querySelector("canvas")
  let letraIngresada = document.querySelector(".inputPalabra")
  let btnComenzar = document.querySelector(".botones__comenzar")
  let btnAgregar = document.querySelector(".botones__agregar")
  
  canvas.classList.add("invisible")
  letraIngresada.classList.add("invisible")
  let palabraIngresada = document.querySelector(".inputPalabraNueva")
  palabraIngresada.classList.remove("visible")
  palabraIngresada.classList.add("invisible")
  btnComenzar.textContent = "Iniciar juego"
  btnAgregar.textContent = "Agregar nueva palabra"
  // console.log("Estoy en la desistirAnonimo")
  let botones = document.querySelector(".botones")
  botones.style.paddingTop = "150px"
  // botonAgregar.removeEventListener("click", desistirAnonimo) Esto en teoria no estaba haciendo nada, ya que ese nombre "botonAgregar" no estaba haciendo definido
  btnAgregar.removeEventListener("click", desistirAnonimo)
}

function desistir (){
  reiniciarVariablesGlobales()
  let canvas = document.querySelector("canvas")
  let letraIngresada = document.querySelector(".inputPalabra")
  let btnComenzar = document.querySelector(".botones__comenzar")
  let btnAgregar = document.querySelector(".botones__agregar")
  
  canvas.classList.add("invisible")
  letraIngresada.classList.add("invisible")

  btnComenzar.textContent = "Iniciar juego"
  btnAgregar.textContent = "Agregar nueva palabra"
}
