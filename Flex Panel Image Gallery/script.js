//Model
const Items = document.querySelectorAll('.panel');

//View
function handleToggle() {
  this.classList.toggle('open');
}

function handleActive(e){

  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }

}

//Control
Items.forEach(Items => Items.addEventListener('click', handleToggle));
Items.forEach(Items => Items.addEventListener('transitionend', handleActive));