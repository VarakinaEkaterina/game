function turnon() {
    document.getElementById('barrier1').style.animationPlayState = "running";
    document.getElementById('barrier2').style.animationPlayState = "running";
}

function turnoff() {
    document.getElementById('barrier1').style.animationPlayState = "paused";
    document.getElementById('barrier2').style.animationPlayState = "paused";
}



document.addEventListener('keydown',  direction);

let dir;

function direction(event){
    if (event.keyCode == 38 ) {
        dir="up";
    }
    else if (event.keyCode == 40 ) {
        dir="down";
    }
}
    


  

 