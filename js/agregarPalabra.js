let btnAgregar = document.querySelector("#btn__agregar")
btnAgregar.addEventListener("click",  (evento) => habilitarInterfazAgregarPalabra(evento) )

function habilitarInterfazAgregarPalabra(evento){ 
  let btnIniciar = document.querySelector("#btn__iniciar")
  let btnGuardar = document.querySelector("#btn__guardar")
  let btnCancelar = document.querySelector("#btn__cancelar")
  let inputPalabraNueva = document.querySelector(".inputPalabraNueva")
  let advertencia = document.querySelector("#advertencia")
  let canvas = document.querySelector("canvas")

  hacerInvisible(btnIniciar)
  hacerInvisible(btnAgregar)

  hacerVisible(btnGuardar)
  hacerVisible(btnCancelar)
  hacerVisible(inputPalabraNueva)
  hacerVisible(advertencia)
  
  btnGuardar.addEventListener("click", guardaYjuega)
  btnCancelar.addEventListener("click",regresarMenu)
}


function agregarPalabra(palabras,palabra){   
  palabras.push(palabra);
}

function esValida(palabra){
  if( palabra == palabra.toLowerCase()){
    console.log("La palabra tiene que ser escrita en minusculas")
  }
  if(palabra.length >= 9){
    console.log("La palabra puede tener maximo 8 letras")
  }
  if(palabra.length == 0){
    console.log("No escribio nada")
  }
  if( /^[a-z]{1,7}[a-z]$/.test(letra)){
    //En teoria esta expresion me valida si esta escrita en minusculas, si son minimo 1 letra y maximo 8
    console.log("Su palabra no puede tener numeros")
  }
}

const guardaYjuega = ()=>{
  let inputPalabraNueva = document.querySelector(".inputPalabraNueva")
  let palabraNueva = inputPalabraNueva.value;
  esValida(palabraNueva)
  agregarPalabra(palabras,palabraNueva)
  console.log("set -> " +palabras)
  habilitarInterfazJuego()
}