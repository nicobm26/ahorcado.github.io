let palabras = ["vampiro","gato","bogota","navidad","portatil","alegria","vaso","tigre","avion"]

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
  let advertencia = document.querySelector(".bloque")
  if(palabraIngresada.value != ""){
    agregarPalabra(palabras, palabraIngresada.value);
    palabraIngresada.value = ""
  }
  // console.log("el conjutno es "+ palabras)
  hacerInvisible(palabraIngresada)
  hacerInvisible(advertencia)
  let palabra = ""
  palabra = palabraRandom()
  console.log(palabra.toUpperCase() + " dentro de habilitarCanvas()")

  let canvas = document.querySelector("canvas")
  let letraIngresada = document.querySelector(".inputPalabra")

  hacerVisible(canvas)
  hacerVisible(letraIngresada)
  letraIngresada.value = ""

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
    // btnDesistir.addEventListener("click", (evento) => desistirAnonimo(evento)); NO me estaba Borrando de esta forma 
    btnDesistir.addEventListener("click", desistirAnonimo); 
  }
}

const desistirAnonimo = () =>{
  reiniciarVariablesGlobales()
  let canvas = document.querySelector("canvas")
  let letraIngresada = document.querySelector(".inputPalabra")
  let btnComenzar = document.querySelector(".botones__comenzar")
  let btnAgregar = document.querySelector(".botones__agregar")
  let palabraIngresada = document.querySelector(".inputPalabraNueva")
  let advertencia = document.querySelector(".bloque")

  hacerInvisible(canvas)
  hacerInvisible(letraIngresada)
  hacerInvisible(palabraIngresada)
  hacerInvisible(advertencia)

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
  
  hacerInvisible(canvas)
  hacerInvisible(letraIngresada)

  btnComenzar.textContent = "Iniciar juego"
  btnAgregar.textContent = "Agregar nueva palabra"
}
