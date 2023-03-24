//Model
const keys = document.querySelectorAll(`.key`);

function playSound(e){
  let key = e.keyCode;
  let audio = document.querySelector(`audio[data-key="${key}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();  

  let beat = document.querySelector(`.key[data-key="${key}"]`);
  beat.classList.add('playing');
};

//View
function removeTransition(e){
  if(e.target.classList.contains('playing')){
    this.classList.remove('playing');
    //console.log(e);
  };
};

//Control
window.addEventListener('keydown', playSound);
keys.forEach( keys => keys.addEventListener('transitionend', removeTransition));