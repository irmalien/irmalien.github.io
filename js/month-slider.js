    //Display image based on month:
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;

    if (month == 1 || month == 7){
      document.getElementById('imgClickAndChange').src = "img/02-long-grey.gif";
    }
    if (month == 2 || month == 8){
      document.getElementById('imgClickAndChange').src = "img/07-long-grey.gif";
    }
    if (month == 3 || month == 9){
      document.getElementById('imgClickAndChange').src = "img/06-long-grey.gif";
    }
    if (month == 4 || month == 10){
      document.getElementById('imgClickAndChange').src = "img/03-long-grey.gif";
    }
    if (month == 5 || month == 11){
      document.getElementById('imgClickAndChange').src = "img/04-long-grey.gif";
    }
    if (month == 6 || month == 12){
      document.getElementById('imgClickAndChange').src = "img/05-long-grey.gif";
    }