var slideIndexSlideshow = 1;
showSlidesSlideshow(slideIndexSlideshow);

setInterval(autoPlay,2000)

function autoPlay(){
    plusSlidesSlideshow(1)
}


function plusSlidesSlideshow(n){
    showSlidesSlideshow(slideIndexSlideshow += n);
}

function currentSlide(n){
    showSlidesSlideshow(slideIndexSlideshow = n);
}

function showSlidesSlideshow(n){
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slideIndexSlideshow = 1
    }
    if(n < 1) {
        slideIndexSlideshow = slides.length
    }
    for(i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i<dots.length; i++){
        dots[i].className =
        dots[i].className.replace(" active", "");
    }
    slides[slideIndexSlideshow -1].style.display = "block";
    dots[slideIndexSlideshow -1].className += " active";
}

