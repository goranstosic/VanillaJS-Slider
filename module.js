const slider = document.querySelector('#slider');
var slideIndex = 0;
var autostart_value = slider.dataset.autostart;
var millis = slider.dataset.timer;
var pause = slider.dataset.pause; // get data-pause by default
var localPause; // create a local pause flag fot detecting hover
var interval;
console.log(autostart_value)
slidesAlt();

function slidesAlt() {
    var i;
    var slides = document.getElementsByClassName("slide-unit-container");

    // hide inactive slide
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      console.log(i)
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";

    // if autostrart is true then set timeout for changing images every N seconds
    if (autostart_value == 'true') {
      interval = setTimeout(slidesAlt, millis); 
    }

}

const stopSlider = () => {
    clearTimeout(interval);
}

slider.addEventListener("mouseenter", () => {
  // if default pause is set to true then execute the listener
  if (pause == 'true') {
    localPause = true;
    stopSlider();
    console.log('pause', pause)
  } 
})

slider.addEventListener("mouseleave", () => {
  if (localPause) {
    localPause = false;
    slidesAlt();
    console.log('pause', pause)
  }
})

