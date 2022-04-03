document.addEventListener('DOMContentLoaded', init);

var myInterval = "";

function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
  const caption = document.querySelector(".caption");
  const controls = document.querySelector(".controls");

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide", "abs-pos");
  });
  
  // show the first slide
  slides[0].classList.remove("hide");

  //create next and back button controls 
   next_btn.addEventListener("click", changeSlide);
   back_btn.addEventListener("click", changeSlide);

   //create caption
   //caption.innerHTML= frame.firstElementChild.alt;

   //start timer, chages every 5sec
   myInterval = setInterval(changeSlide, 4000);
}


function changeSlide(e) {
  
    //check to see if function was called by button click or setInterval
    //if the event object passes, that means button was clicked and we will turn off the timer
    if (e) {
        e.preventDefault();
        clearInterval(myInterval);
    }
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    const caption = document.querySelector(".caption");
    let showing = document.querySelector(".current");
    let nextUp = "";
  
    //determine what direction slides are going in
    //if myInterval is called, no event obejct is passed
    if(!e || e.target.className == "next-btn") {
        nextUp = showing.nextElementSibling;
        } else {
            nextUp = showing.previousElementSibling;
        }
    
    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");
    
    //make sure next image is there
    if (!nextUp) {
        nextUp = slides[slides.length - 1];
    }

    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    //change caption text
    //caption.innerHTML = nextUp.alt;
}