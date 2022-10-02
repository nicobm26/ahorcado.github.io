let botonAgregar = document.querySelector(".botones__agregar")

const habilitar2Menu = () => {
  let botones = document.querySelector(".botones")
  botones.style.paddingTop = "60px"

  let botonComenzar = document.querySelector(".botones__comenzar")  //1
  let botonAgregar = document.querySelector(".botones__agregar")   //2
  botonComenzar.textContent = "Guardar y empezar"
  botonAgregar.textContent = "Cancelar"
  let letraIngresada = document.querySelector(".inputPalabraNueva")
  letraIngresada.value = ""
  letraIngresada.classList.remove("invisible")
  letraIngresada.classList.add("visible")
  console.log("agregar palabra.js")

  botonAgregar.addEventListener("click", desistirAnonimo)
}

if(botonAgregar.textContent == "Agregar nueva palabra"){
  botonAgregar.addEventListener("click", habilitar2Menu )
}

