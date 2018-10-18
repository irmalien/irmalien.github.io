
//<img id="imgClickAndChange" class="art_shop" name="pic" onClick="changeImage()">



// image sources in array. image[0] will have first image src, image[3] will have last src
var images = [
  "img/02-long-grey.gif",
  "img/07-long-grey.gif",
  "img/06-long-grey.gif",
  "img/03-long-grey.gif",
  "img/04-long-grey.gif",
  "img/05-long-grey.gif"
]

var step = 0;
var img=new Image();



function changeImage() {
  // exit if no images, or step = number of items in array (4)
  if (typeof images == "undefined") 
    return;     
  document.getElementById('imgClickAndChange').src = images[step];
  console.log(step)
    step++;
  //preload image
  if (step < images.length){
    img.src=images[step];
  }
  //if last image, reset count to 0 
  if (step == images.length){step = 0;}

}