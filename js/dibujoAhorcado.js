let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

function dibujar(x,y,intentos){
  pincel.beginPath()
  switch (intentos) {
    case 1:
      pincel.lineTo(x, y); //1
      pincel.lineTo(x, y+160); //2
    break;
    case 2:
      pincel.lineTo(x, y+160); //2
      pincel.moveTo(x, y); //cursor
      pincel.lineTo(x+40, y-40)  // 3
      pincel.lineTo(x+130, y-40) //4
    break;
    case 3:
      pincel.lineTo(x+130, y-40) //4
      pincel.lineTo(x+130, 100) //5  
    break;

    case 4:
      pincel.moveTo(x+150, 120)
      pincel.arc(x+130, y+20, 20, 0, Math.PI*2); 
    break;
    
    case 5:
      pincel.moveTo(x+130, 140);
      pincel.lineTo(x+130, 210) //tronco del muñeco
    break;    

    case 6:
      pincel.lineTo(x+130, 210) //tronco del muñeco
      pincel.lineTo(160, 230) //pie izquierdo
    break;
    
    case 7:
      pincel.moveTo(x+130, 210);// cursor 
      pincel.lineTo(x+150, 230) //pie derecho
    break;    

    case 8:
      pincel.moveTo(x+130, 150);// cursor 
      pincel.lineTo(160, 170) //mano izquierda
    break;    

    case 9:
      pincel.moveTo(x+130, 150);// cursor
      pincel.lineTo(x+150, 170) //mano derecha
    break;    

    default:
      break;
  }
  pincel.stroke()
}

// function dibujarBase(){
//   pincel.beginPath()
//   let x1 = 30
//   let y1 = 260
//   pincel.lineTo(x1,y1)
//   pincel.lineTo(x1+200,y1)
//   pincel.stroke()
//   pincel.closePath()
// }

function dibujarAhorcado(){
  pincel.lineTo(x, y); //1
  pincel.lineTo(x, y+160); //2
  pincel.moveTo(x, y); //cursor
  pincel.lineTo(x+40, y-40)  // 3      // pincel.moveTo(50, 100);

  pincel.lineTo(x+130, y-40) //4
  pincel.lineTo(x+130, 100) //5  
  pincel.moveTo(x+150, 120)
  pincel.arc(x+130, y+20, 20, 0, Math.PI*2); //6 cabeza

  pincel.moveTo(x+130, 140);
  pincel.lineTo(x+130, 210) //tronco del muñeco

  pincel.lineTo(160, 230) //pie izquierdo

  pincel.moveTo(x+130, 210);// cursor 
  pincel.lineTo(x+150, 230) //pie derecho

  pincel.moveTo(x+130, 150);// cursor 
  pincel.lineTo(160, 170) //mano izquierda

  pincel.moveTo(x+130, 150);// cursor
  pincel.lineTo(x+150, 170) //mano derecha

  pincel.stroke()
}

function dibujarAhorcadoInicialmente(){
  pincel.beginPath()
  // pincel.moveTo(50, 0);
  pincel.lineTo(50, 100); //1
  pincel.lineTo(50, 260); //2
  pincel.moveTo(50, 100); //cursor
  
  pincel.lineTo(90,60)  // 3
  // pincel.moveTo(50, 100);
  
  pincel.lineTo(180,60) //4
  pincel.lineTo(180,100) //5
  pincel.moveTo(200,120)
  pincel.arc(180, 120, 20, 0, Math.PI*2); //6 cabeza
  pincel.moveTo(180, 140);  
  pincel.lineTo(180,210) //tronco del muñeco
  pincel.lineTo(160,230) //pie izquierdo
  pincel.moveTo(180, 210);// cursor
  pincel.lineTo(200,230) //pie derecho
  pincel.moveTo(180, 150);// cursor
  pincel.lineTo(160,170) //mano izquierda
  pincel.moveTo(180, 150);// cursor
  pincel.lineTo(200,170) //mano derecha 
  pincel.stroke()
}

// let intentos = 0
// for (let i = 1 ; i<=intentos; i++){
//   dibujar(50,100,i)
// }
