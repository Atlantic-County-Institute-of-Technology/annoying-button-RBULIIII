let text = document.getElementById("text");
let button1 = document.getElementById("button1");
const button2 = document.createElement("button");
let mouse = new Audio('assests/mouse.mp3');

button1.addEventListener("click" , annoy);

function yell_at_user() {
    alert("STOP PRESSING THIS BUTTON!");

}

let clicks= 0;

function annoy (){
    mouse.play();
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
            }
    else  if( clicks == 20 ) {
        text.innerHTML = "If you stop I'll give you a reward";
        button1.classList.remove("angry");
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
        text.innerHTML = "Okay.... TRY AND PRESS ME NOW >:)";
        button1.classList.add("glitch");
    }

    else  if( clicks == 44) {
        text.innerHTML = "STOP PRESSSING MEEE";
        button1.classList.remove("glitch");
    }
    else if(clicks == 50){ button1.classList.remove("glitch"); 
    text.innerHTML = "OKAY FINE PRESS HIM THEN";
    button2.innerHTML = "PRESS MEEEEEE"; 
    button2.classList.add ("button2"); 
    button2.classList.add ("visib");
    container.appendChild(button2); 
    } 

    else  if( clicks == 67) { 
        text.innerHTML = "WHY DO YOU KEEP PRESSING ME"; 
    }

    else  if( clicks == 70) { 
        text.innerHTML = "IF YOU HAVENT FIGURED IT OUT BY NOW THE GREEN BUTTON DOES NOTHING LOL";
        button2.classList.remove ("visib");
    }

    else  if( clicks == 76) { 
        text.innerHTML = "JUST WAIT UNTIL 100"; 
    }

    else if(clicks == 100 ){
        text.innerHTML = "ALRIGHT YOU MADE ME DO THIS MUAHAHHA >:)";
        button1.classList.add ("ultimate")   
    }

}
