function turnon() {
    document.getElementById('barrier1').style.animationPlayState = "running";
    document.getElementById('barrier2').style.animationPlayState = "running";
}

function turnoff() {
    document.getElementById('barrier1').style.animationPlayState = "paused";
    document.getElementById('barrier2').style.animationPlayState = "paused";
}

document.addEventListener('keydown',  direction);
let posbird = 310;

function direction(event){
    if (event.keyCode == 38 ) {
        posbird -= 30;
        posbird += "px"   
        document.getElementById('bird').style.top = posbird;
    }

    else if (event.keyCode == 40 ) {
        posbird += 30;
        posbird += "px"   
        document.getElementById('bird').style.top = posbird;
    }
} 