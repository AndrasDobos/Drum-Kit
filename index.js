/*
document.querySelector("button").addEventListener("click", function (){
  alert("Clicked");
});
*/
/*
let buttonLenght = document.querySelectorAll("button").length;
document.querySelector("button").addEventListener("click", function (){
  alert(buttonLenght);
});
*/
/*
//Irassuk ki minden gombra, hogy I got clicked!
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    alert("I got clicked!");
  });
}
*/
/*
//Minden gomb játssza le a tom-1.mp3 file-t
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  });
}
*/
/*
//Minden gomb jelenítse meg a ráírt szöveget, ha ráklikkelek
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    //alert(this);  //ez magát az objektumot jeleníti meg, jelen esetben a saját buttonját
    alert(this.innerHTML);
  });
}
*/
/*
//Mindegyik gomb szövegét változtassuk fehér színűre, ha rákattintunk
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    this.style.color = "white";
  });
}
*/
/*
//Adjunk hangot a gomboknak
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    switch (this.innerHTML) {
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

      case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

      case "k":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;

      case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
      default:
        console.log(this.innerHTML);
    }


  });
}
*/

//Ahhoz hogy a billentyűzethez is lehessen figyelőt/listenert beállítani a switchet külön funkcióba kell tenni
//és ezt a funkciót a két listener (button és keyboard) hívja
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
switch (key) {
  case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

  case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

  case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

  case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

  case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

  case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

  case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
  default:
    console.log(this.innerHTML);
}
}


function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
