let text = document.getElementById("text")
let button1 = document.getElementById("button1")
/*let sound = new Audio('assests/sound.mp3')*/
let sigma = new Audio('assests/sigma.mp3')

button1.addEventListener("click" , annoy);

function yell_at_user() {
    alert("STOP PRESSING THIS BUTTON!");

}

let clicks= 0;

function annoy (){
    sigma.play();
    clicks ++;
    console.log(clicks)
    if( clicks == 1 ) {
text.innerHTML = "HEY CUTT IT OUTT!!";
    }
    else  if( clicks == 5 ) {
        text.innerHTML = "I SAID STOPPP!";
            }
    else  if( clicks == 10 ) {
        text.innerHTML = "YOU WILL REGRET ANOTHER PRESS!!";
            }
    else  if( clicks == 15 ) {
        text.innerHTML = "YOU ARE STARTING TO MAKE ME MAD";
        button1.classList.add("angry");
        button1.classList.add("mainDiv");
            }
    else  if( clicks == 20 ) {
        text.innerHTML = "If you stop I'll give you a reward";
        button1.classList.remove("angry");
        button1.classList.remove("mainDiv");
            }
    else  if( clicks == 25 ) {
        text.innerHTML = "Okay... catch me if you can. >:)";
            }
    else  if( clicks == 30 ) {
        button1.classList.add ("movement");
            }   
    else  if( clicks == 33 ) {
        text.innerHTML = "HEHEHE >:)";
        button1.classList.add ("movement2");
            }
            
    else  if( clicks == 25 ) {
        text.innerHTML = "CANT GET ME >:)";
        button1.classList.add ("movement3");
            }
            
    else  if( clicks == 37 ) {
        text.innerHTML = "YOU DONE ? >:)";
        button1.classList.add ("movement4");
            }
            
    else  if( clicks == 39 ) {
        text.innerHTML = "YOU WILL NEVER GET ME >:)";
        button1.classList.add ("movement5");
            }
    else  if( clicks == 40 ) {
        text.innerHTML = "YOU STILL PRESSING ME >:(";
        button1.classList.remove ("movement5");
        button1.classList.remove ("movement4");
        button1.classList.remove ("movement3");
        button1.classList.remove ("movement2");
        button1.classList.remove ("movement");
            }
    else  if( clicks == 43) {
        text.innerHTML = "How about you press him instead";
        const button2 = document.createElement("button");
        button2.innerHTML = "PRESS MEEEEEE";
        button2.classList.add("button1");
        button2.classList.add ("button2")
        container.appendChild(button2);
}
    else if(clicks == 50){
        button1.classList.add ("glitch")
    }

}
