//Get Elements(Model)
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.player__button.toggle');
const sliderRanges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

let mouseDown = false;


//Build Functions(View)
function togglePlay(){
  const method = video.paused ? 'play' : 'pause'; //Basically an if... else statement
  video[method]();
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
}

function skip(){
  //console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip); //parseFloat  converts it to a number from a string
}

function handleRangeUpdate(){
  video[this.name] =this.value;
}

function handleProgrss(){
  const percent = (video.currentTime/ video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  //console.log(e);
}

//Hook event listeners(Control)
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgrss);

playButton.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

sliderRanges.forEach(range => range.addEventListener('change', handleRangeUpdate));
sliderRanges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));// Updates in real time as long as mouse button is down

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e)); //e is passed to mousemoDown to check initial position of mousemove, up or down. && allows to run the two functions consecutively if the first returns true.
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);


/* Add full screen icon and button for largening video and arrow keys for data skip forward and back  for 5sec edit of video*/