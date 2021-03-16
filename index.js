
for(var i=0; i<7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {

      map(this.innerHTML);
      addAnimation(this.innerHTML);
  });
}

function map(a) {
  switch (a) {
    case "w":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;
    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;
    case "a":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;
    case "s":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;
    case "j":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
    case "k":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;
    case "l":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;
    default:

  }
}

document.addEventListener("keypress", function (event) {
  map(event.key);
  addAnimation(event.key);
});

function addAnimation (pressedKey) {
  var activeButton = document.querySelector("."+pressedKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
