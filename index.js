
var num = document.querySelectorAll(".drum").length;
for (let i = 0; i < num; i++) {
  
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

function handleClick() {
var buttonInnerHTML = this.innerHTML;
sound(buttonInnerHTML);
animation(buttonInnerHTML);
}
}

document.addEventListener("keydown", keyboardPress)
function keyboardPress(event){
  
  sound(event.key);
  animation(event.key);
}

function sound(left) {
  switch (left) {
  case "w":
    var crash = new Audio ("sounds/crash.mp3")
    crash.play();
    break;

    case "a":
    var kick = new Audio ("sounds/kick-bass.mp3")
    kick.play();
    break;

    case "s":
    var snare = new Audio ("sounds/snare.mp3")
    snare.play();
    break;

    case "d":
    var tom1 = new Audio ("sounds/tom-1.mp3")
    tom1.play();
    break;

    case "j":
    var tom2 = new Audio ("sounds/tom-2.mp3")
    tom2.play();
    break;

    case "k":
    var tom3 = new Audio ("sounds/tom-3.mp3")
    tom3.play();
    break;

    case "l":
    var tom4 = new Audio ("sounds/tom-4.mp3")
    tom4.play();
    break;
    
   default: console.log(buttonInnerHTML);

    break;
}
}

function animation(currentKey) {
  var activeKey = document.querySelector("." + currentKey).classList
  activeKey.add("pressed");
  setTimeout(function () {
    activeKey.remove("pressed");
  }, 100)
}