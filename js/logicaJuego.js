let palabraEscrita = 0  //Para verificar si ya escribio toda la palabra secreta
let letrasExistentes = []

function ahorca(palabra, letra=""){
  let cantidadGuiones = palabra.length;
  let x = 30
  let y = 310
  let flag = false;
  if(cantidadGuiones == 8){
      x = 0
  }
  for(let i = 0; i<cantidadGuiones; i++){
    pincel.beginPath()
    pincel.lineTo(x,y)
    pincel.lineTo(x+20,y)
    if( palabra[i].toLowerCase() === letra.toLowerCase() && !letrasExistentes.includes(letra.toLowerCase()) ){
      // console.log("lista de letras que pertenen -> " + letrasExistentes)
      pincel.fillStyle = "black";
      pincel.font = "25px Arial";
      if(palabra[i].toLowerCase() === "i"){
        pincel.fillText(letra.toUpperCase(), x+6, y-3);
      }else{
        pincel.fillText(letra.toUpperCase(), x, y-3);
      }
      palabraEscrita+=1
      flag=true;
    }
    x+= 40
    pincel.stroke()
    pincel.closePath()
  }
  if(flag){
    letrasExistentes.push(letra)
  }
  y = y + 35
  let intentosMalos = dibujarLetraEquivocada(palabra,letra,y)
  verificar(palabraEscrita, intentosMalos, palabra)
}

function verificar(intentosBuenos, intentosMalos, palabra){
  let letraIngresada = document.querySelector(".inputPalabra")
  if(intentosBuenos === palabra.length){
    hacerInvisible(letraIngresada)
    reiniciarVariablesGlobales()
    pincel.font = "25px Arial";
    pincel.fillStyle = "green";
    pincel.fillText("Ganaste, Felicidades",  50, 40);
  }
  dibujar(50,100,intentosMalos)
  if(intentosMalos === 9){
    hacerInvisible(letraIngresada)
    reiniciarVariablesGlobales()
    pincel.font = "25px Arial";
    pincel.fillStyle = "red";
    pincel.fillText("Fin del juego!", 100, 40);
  }
}


function esLetra(letra){
  let result = /[A-Za-z]/.test(letra); // console.log(result)
  return result  
}


function letraEquivocada(palabra,letra){
  if(! palabra.includes(letra)){
    return letra
  }
}


let acumulador= 60
let letrasEquivocadas = []
function dibujarLetraEquivocada(palabra,letra,y){
  if( !palabra.includes(letra.toLowerCase()) &&  !letrasEquivocadas.includes(letra.toLowerCase()) && letra.length===1 && esLetra(letra)){
    letrasEquivocadas.push(letra.toLowerCase())
    // console.log(letrasEquivocadas)
    pincel.font = "25px Arial";
    pincel.fillStyle = "red";
    pincel.fillText(letra.toUpperCase(), acumulador, y);
    acumulador+=30
  }
  return letrasEquivocadas.length
}