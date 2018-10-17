
 //Change images with defined interval

 var slideimages = new Array()
 slideimages[0] = new Image()
 slideimages[0].src = "img/01-short.gif"
 slideimages[1] = new Image()
 slideimages[1].src="img/02-short.gif"
 slideimages[2] = new Image()
 slideimages[2].src="img/03-short.gif"
 slideimages[3] = new Image()
 slideimages[3].src="img/03-short.gif"
 
 var step=0

 
 function slideit(){
  if (!document.images)
    return
    document.getElementById('slide').src = slideimages[step].src
  if (step < 3 )
    step++
  else
    step=0
  setTimeout("slideit()", 4000)
 
 }

 slideit()