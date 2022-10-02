let botonAgregar = document.querySelector(".botones__agregar")

const habilitar2Menu = () => {
  let botones = document.querySelector(".botones")
  botones.style.paddingTop = "60px"

  let botonComenzar = document.querySelector(".botones__comenzar")  //1
  let botonAgregar = document.querySelector(".botones__agregar")   //2
  let letraIngresada = document.querySelector(".inputPalabraNueva")
  
  botonComenzar.textContent = "Guardar y empezar"
  botonAgregar.textContent = "Cancelar"

  letraIngresada.value = ""
  hacerVisible(letraIngresada)

  botonAgregar.addEventListener("click", desistirAnonimo)
}

if(botonAgregar.textContent == "Agregar nueva palabra"){
  botonAgregar.addEventListener("click", habilitar2Menu )
}

