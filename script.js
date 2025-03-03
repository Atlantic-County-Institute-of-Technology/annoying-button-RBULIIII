let text = document.getElementById("text")
let button1 = document.getElementById("button1")

button1.addEventListener("click" , annoy);

function yell_at_user() {
    alert("STOP PRESSING THIS BUTTON!");

}

let clicks= 0;

function annoy (){
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
            }
    else  if( clicks == 20 ) {
        text.innerHTML = "If you stop I'll give you a reward";
            }
    else  if( clicks == 25 ) {
        text.innerHTML = "Okay... catch me if you can.";
            }
}

