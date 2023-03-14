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

// function position() {
//     let barrier1Left = parseInt(window.getComputedStyle(barrier1).getPropertyValue("left"));
//     let barrier2Left = parseInt(window.getComputedStyle(barrier2).getPropertyValue("left"));
//     if (barrier1Left >= 900 && barrier1Left <= 999) { 
//         let randomNumber = Math.floor(Math.random() * 10) + 1;
//         let barrier1Top = parseInt(window.getComputedStyle(barrier1).getPropertyValue("top"));
//         let height1 = randomNumber*10+barrier1Top;
//         document.getElementById('barrier1').style.top = `${height1}px`;
//     }
//     else if(barrier2Left >= 900 && barrier2Left <= 999){
//         let randomNumber = Math.floor(Math.random() * 10) + 1;
//         let barrier2Bottom = parseInt(window.getComputedStyle(barrier2).getPropertyValue("bottom"));
//         let height1 = randomNumber*10+barrier2Bottom;
//         document.getElementById('barrier1').style.bottom = `${height1}px`;
//     }

// }
// setInterval(position, 100); 


let score = 0;
let isAlive = setInterval (function(){
    let barrier1Left = parseInt(window.getComputedStyle(barrier1).getPropertyValue("left"));
    let barrier2Left = parseInt(window.getComputedStyle(barrier2).getPropertyValue("left"));
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let barrier1Top = parseInt(window.getComputedStyle(barrier1).getPropertyValue("top"));
    let barrier2Bottom = parseInt(window.getComputedStyle(barrier2).getPropertyValue("bottom"));
    
    if (barrier1Left < 50 && barrier1Left > 0 && birdTop >= barrier1Top || barrier2Left < 50 && barrier2Left > 0 && birdTop <= (barrier2Bottom-100)) {
        document.getElementById('game').style.backgroundImage = "none";
        document.getElementById('barrier1').style.display = "none";
        document.getElementById('barrier2').style.display = "none";
        document.getElementById('bird').style.display = "none";
        document.getElementById('score1').style.display = "none";
        document.getElementById('game').innerHTML = `${'<br>'}Game over! ${'<br>'} You score: ${score}`;
      
        setTimeout (reload,3000)
        function reload(){
            location.reload()
        }
    }
    else if (barrier1Left < 50 && barrier1Left > 0 && birdTop <= barrier1Top || barrier2Left < 50 && barrier2Left > 0 && birdTop >= (barrier1Top-100)) {
        score++;
        document.getElementById("score1").innerHTML = score;
    }
},200)



