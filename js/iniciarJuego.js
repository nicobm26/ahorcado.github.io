let palabras = ["vampiro","gato","bogota","navidad","portatil","alegria","vaso","tigre","avion"]

function getRandomArbitrary(min=1, max=palabras.length) {
  let numero = Math.random() * (max - min) + min;
  return Math.floor(numero);
}

function palabraRandom(){
  return palabras[getRandomArbitrary()]
}

function limpiarCanvas(){
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function reiniciarVariablesGlobales(){
  letrasExistentes = []
  palabraEscrita = 0
  acumulador = 60
  letrasEquivocadas = []
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

function dibujarGuiones(palabra){
  let cantidadGuiones = palabra.length;
  let x = 30
  let y = 310
  for(let i = 0; i<cantidadGuiones; i++){
    pincel.beginPath()
    pincel.lineTo(x,y)
    pincel.lineTo(x+20,y)
    x+= 40
    pincel.stroke()
    pincel.closePath()
  }
}

function hacerVisible(elemento){
  elemento.classList.remove("invisible")
  elemento.classList.add("visible")
}

function hacerInvisible(elemento){
  elemento.classList.remove("visible")
  elemento.classList.add("invisible")
}


const nuevoJuego = () =>{
  habilitarInterfazJuego()
}

const regresarMenu = () =>{
  let btnIniciar = document.querySelector("#btn__iniciar")
  let btnAgregar = document.querySelector("#btn__agregar")
  let btNuevoJuego = document.querySelector("#btn__nuevoJuego")
  let btnDesistir = document.querySelector("#btn__desistir")
  let btnGuardar = document.querySelector("#btn__guardar")
  let btnCancelar = document.querySelector("#btn__cancelar")
  let letraIngresada = document.querySelector(".inputPalabra")
  let inputPalabraNueva = document.querySelector(".inputPalabraNueva")
  let advertencia = document.querySelector("#advertencia")
  let canvas = document.querySelector("canvas")

  hacerVisible(btnIniciar)
  hacerVisible(btnAgregar)

  hacerInvisible(btNuevoJuego)
  hacerInvisible(btnDesistir)
  hacerInvisible(btnGuardar)
  hacerInvisible(btnCancelar)
  hacerInvisible(letraIngresada)
  hacerInvisible(inputPalabraNueva)
  hacerInvisible(advertencia)
  hacerInvisible(canvas)
}


let btnIniciar = document.querySelector("#btn__iniciar")
btnIniciar.addEventListener("click",  (evento) => habilitarInterfazJuego(evento) )

function habilitarInterfazJuego(evento){ 
  limpiarCanvas()
  reiniciarVariablesGlobales()
  let btnIniciar = document.querySelector("#btn__iniciar")
  let btnAgregar = document.querySelector("#btn__agregar")
  let btNuevoJuego = document.querySelector("#btn__nuevoJuego")
  let btnDesistir = document.querySelector("#btn__desistir")
  let btnGuardar = document.querySelector("#btn__guardar")
  let btnCancelar = document.querySelector("#btn__cancelar")
  let inputPalabraNueva = document.querySelector(".inputPalabraNueva")
  let advertencia = document.querySelector("#advertencia")
  let letraIngresada = document.querySelector(".inputPalabra")
  let canvas = document.querySelector("canvas")
  

  hacerInvisible(btnIniciar)
  hacerInvisible(btnAgregar)
  hacerInvisible(btnGuardar)
  hacerInvisible(btnCancelar)
  hacerInvisible(inputPalabraNueva)
  hacerInvisible(advertencia)

  hacerVisible(btNuevoJuego)
  hacerVisible(btnDesistir)
  hacerVisible(letraIngresada)
  hacerVisible(canvas)
  dibujarBase()
  letraIngresada.value = "";

  let palabraAhorcado = palabraRandom()
  // console.log("Palabra ->" + palabraAhorcado)
  dibujarGuiones(palabraAhorcado)

  function presionada(evento){
    //let letra = evento.key
    let letra = evento.data;
    letraIngresada.value = "";
    letraIngresada.value = letra;
    ahorca(palabraAhorcado, letra )
  }
  //letraIngresada.onkeydown = presionada;
  letraIngresada.oninput = presionada;
  
  btNuevoJuego.addEventListener("click", nuevoJuego)
  btnDesistir.addEventListener("click",regresarMenu)
}




