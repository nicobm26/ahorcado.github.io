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
  // inputPalabraNueva.value=""
  
  btnGuardar.addEventListener("click", guardaYjuega)
  btnCancelar.addEventListener("click",regresarMenu)
}


function agregarPalabra(palabras,palabra){   
  palabras.push(palabra);
}

function esValida(palabra){
  let valido = true;
  let soloLetras = true
  palabra = palabra.trim()
  if(palabra.length == 0){
    console.log("No escribio nada")
    alert("No escribio nada")
    valido = false
  }else if(palabra.length >= 9){
    console.log("La palabra puede tener maximo 8 letras")
    alert("La palabra puede tener maximo 8 letras")
    valido = false
  }
  
  let numeros = [0,1,2,3,4,5,6,7,8,9]
  for (let i = 0; i<palabra.length ; i++){
      if (palabra[i] in numeros ){
        valido = false;
        soloLetras = false
        alert("Su palabra no puede tener numeros")
        break
      }
  }
  
  for(let i = 0; i< palabra.length; i++){
    if( palabra[i] == " " ){
      valido = false;
      alert("Tiene que ser una palabra entera, sin espacios intermedios")
    }
  }
 
  if(soloLetras){
    if( palabra != palabra.toLowerCase()){
      console.log("La palabra tiene que ser escrita en minusculas")
      alert("La palabra tiene que ser escrita en minusculas")
      valido = false
    }
  }
  // console.log(valido)
  return valido
}

const guardaYjuega = ()=>{
  let inputPalabraNueva = document.querySelector(".inputPalabraNueva")
  let palabraNueva = inputPalabraNueva.value;
  let valido = esValida(palabraNueva)
  if(valido){
    agregarPalabra(palabras,palabraNueva)
    // console.log("set -> " +palabras)
    habilitarInterfazJuego()
  }
}