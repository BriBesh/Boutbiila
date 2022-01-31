for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    clickedButton = this.innerHTML;
    switch (clickedButton) {
      case "w":
        var a = new Audio("sounds/tom-1.mp3");
        a.play();
        break;
      case "a":
        var a = new Audio("sounds/tom-2.mp3");
        a.play();
        break;

      case "s":
        var a = new Audio("sounds/tom-3.mp3");
        a.play();
        break;

      case "d":
        var a = new Audio("sounds/snare.mp3");
        a.play();
        break;

      case "k":
        var a = new Audio("sounds/crash.mp3");
        a.play();
        break;
      case "j":
        var a = new Audio("sounds/kick-bass.mp3");
        a.play();
        break;
      case "l":
        var a = new Audio("sounds/tom-1.mp3");
        a.play();
        break;

    }
  });

}



document.addEventListener("keydown",createSound);
  function createSound(key){
    switch (key.key) {
      case "w":
        var a = new Audio("sounds/tom-1.mp3");
        a.play();
        break;
      case "a":
        var a = new Audio("sounds/tom-2.mp3");
        a.play();
        break;

      case "s":
        var a = new Audio("sounds/tom-3.mp3");
        a.play();
        break;

      case "d":
        var a = new Audio("sounds/snare.mp3");
        a.play();
        break;

      case "k":
        var a = new Audio("sounds/crash.mp3");
        a.play();
        break;
      case "j":
        var a = new Audio("sounds/kick-bass.mp3");
        a.play();
        break;
      case "l":
        var a = new Audio("sounds/tom-1.mp3");
        a.play();
        break;

    }
  }
