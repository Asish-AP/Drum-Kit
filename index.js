// Handle Mouse Clicks
const numOfDrums = document.querySelectorAll('.drum').length;
for (var i = 0; i < numOfDrums; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        var key = this.innerHTML;
        playSound(key);
        handleButtonFlashing(key)
    });
}

// Handle Keyboard Key Presses
document.addEventListener("keydown", function (event) {
    var key = event.key;
    playSound(key);
});

// Play sound for corresponding key
function playSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log("Wrong Key Pressed!");
    }
    handleButtonFlashing(key);
}
// setup keypress
document.addEventListener("keypress", function(event){
    
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
      case "w":
          let tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;
      case "a":
          let tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;
      case "s":
          let tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
      case "d":
          let tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
      case "j":
          let snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
      case "k":
          let crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;

      case "l":
          let kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;

      default: console.log(buttonInnerHTML)
          break;
  }
}

// Handle Button Flashing
function handleButtonFlashing(key){
    document.querySelector('.'+key).classList.add('pressed')
    window.setTimeout(function (){
        document.querySelector('.'+key).classList.remove('pressed');
    },100);
}