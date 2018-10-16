function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndexGallery = 1;
showSlidesGallery(slideIndexGallery);

function plusSlidesGallery(n) {
  showSlidesGallery(slideIndexGallery += n);
}

function currentSlideGallery(n){
  showSlidesGallery(slideIndexGallery = n);
}

function showSlidesGallery(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexGallery = 1}
  if (n < 1) {slideIndexGallery = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexGallery-1].style.display = "block";
}