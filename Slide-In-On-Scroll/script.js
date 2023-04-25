//Model
const sliderImages = document.querySelectorAll('.slide-in');

//View
function checkSlide(e){ 
  //(window.scrollY + window.innerHeight) gives bottom of the window & page: We use it for when the image enters the page from the bottom, scrollY gives the scroll height from top... 
   sliderImages.forEach(sliderImage => {
   //Halfway through the image on the whole window
   const slideInAt = (window.innerHeight + window.scrollY) + sliderImage.height / 2;
   //Image Bottom position
   const imageBottom = sliderImage.offsetTop + sliderImage.height;
   const isHalfway = slideInAt > sliderImage.offsetTop;
   const isNotScrolledPast = window.scrollY < imageBottom;

   if(isHalfway && isNotScrolledPast){
     sliderImage.classList.add('active');
   } else {
     sliderImage.classList.remove('active');
   }
 })
 //
}

function debounce(func, wait = 5, immediate = true) { //Runs on a function to help with perfomance issues,e.g, running the checkslide function too continuously, and is usually in frameworks
  var timeout; 
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//Control
    window.addEventListener('scroll', debounce(checkSlide));