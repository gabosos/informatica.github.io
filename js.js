 const playBoard = document.querySelector(".play-board");

let gameover = false;
  
let foodx, foody;

let snakeX = 5, snakey = 10;

let snakebody = [ ];

let velocityx = 0, velocityY = 0;

let noseparaquemesirveperobueno;

const changethefoodposition  = () => {
    foodx = Math.floor(Math.random() * 30) + 1;
    foody = Math.floor(Math.random() * 30) + 1;
}

const handlegameover = () => {
  clearInterval(noseparaquemesirveperobueno);
    alert("de malas")
     location.reload();
}

const changedirection = (e) => {
    // console.log (e);
    if (e.key ==="ArrowUp" && velocityY != 1) {
        velocityx = 0;
        velocityY = -1;
    }else if (e.key ==="ArrowDown" && velocityY != -1) {
        velocityx = 0;
        velocityY = 1;
    }else if (e.key ==="ArrowLeft" && velocityx != 1) {
        velocityx = -1;
        velocityY = 0;
    }else if (e.key ==="ArrowRight" && velocityx != -1) {
        velocityx = 1;
        velocityY = 0;
    }
    //initgame();
}
const initgame = () => {
  
     if(gameover) return handlegameover ();
    
    let htmlmarkup = `<div class="food" style="grid-area:${foody} / ${foodx}  "></div>`;
 
  if(snakeX === foodx && snakey === foody){
    changethefoodposition()
    snakebody.push([foodx, foody])
  }
    
  for (let i = snakebody.length - 1; i > 0; i--) {
    snakebody[i] = snakebody[i - 1];
}


  snakebody [0] = [snakeX,snakey]

 snakeX += velocityx;
 snakey += velocityY;

 if(snakeX <= 0 || snakeX > 30 || snakey <= 0 || snakey > 30) {
     gameover = true;
 }
 
 for(let i = 0; i < snakebody.length; i++){
    htmlmarkup += `<div class="head" style="grid-area:${snakebody[i][1]} / ${snakebody[i][0]}  "></div>`;

    if (i !== 0 && snakebody[0][1] === snakebody[i][1] && snakebody[0][0] === snakebody[i][0]) {
        gameover = true;
    }
    
 }
 playBoard.innerHTML  = htmlmarkup;
}

changethefoodposition ();
//initgame();
noseparaquemesirveperobueno = setInterval(initgame,125);

 document.addEventListener("keydown",changedirection)