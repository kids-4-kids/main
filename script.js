var winSize = window.matchMedia("(max-width: 400px)")

if (winSize.matches) {
  
  mobile();
  
  }
else {
  
  nonMobile();
  
}


function mobile() {
  
  var nonBile = document.getElementsByClassName("not_mobile");
  var isMobile = document.getElementsByClassName("mobile");
  nonBile.style.display = "none";
  isMobile.style.display = "block";
}


function nonMobile() {
  
  var nonBile = document.getElementsByClassName("not_mobile");
  var isMobile = document.getElementsByClassName("mobile");
  nonBile.style.display = "block";
  isMobile.style.display = "none";
}

  
