function turnon() {
    document.getElementById('barrier1').style.animationPlayState = "running";
    document.getElementById('barrier2').style.animationPlayState = "running";
}

function turnoff() {
    document.getElementById('barrier1').style.animationPlayState = "paused";
    document.getElementById('barrier2').style.animationPlayState = "paused";
}

document.addEventListener('keydown',  moveBird);
let posbird = 310;

function moveBird(event){
    switch (event.keyCode) {
        case 38:
            if (posbird > 0){
                posbird -= 25;
                document.getElementById('bird').style.top = `${posbird}px`;
            }
            else {
                posbird -= 0;
                document.getElementById('bird').style.top = `${posbird}px`;  
            }
            break;
        case 40:
            if (posbird < 530){
                posbird += 25;
                document.getElementById('bird').style.top = `${posbird}px`;
            }
            else {
                posbird += 0;
                document.getElementById('bird').style.top = `${posbird}px`;  
            }
            break;
    }
} 

let isAlive = setInterval (function(){
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let barrier1Left = parseInt(window.getComputedStyle(barrier1).getPropertyValue("left"));
    let barrier2Left = parseInt(window.getComputedStyle(barrier2).getPropertyValue("left"));

    if (barrier1Left < 50 && barrier1Left > 0 && birdTop >= 250 || barrier2Left < 50 && barrier2Left > 0 && birdTop <= 250) {
        alert("game over")
        
    }
},10)

