var winSize = window.matchMedia("(max-width: 400px)")

if (winSize.matches) {
  
  mobile();
  
  }
else {
  
  nonMobile();
  
}


function mobile() {
  
  var Nonbile = document.getElementsByClassName("not_mobile");
  var isMobile = document.getElementsByClassName("mobile");
  Nonbile.style.display = "none";
  isMobile.style.display = "block";
}


function nonMobile() {
  
  var Nonbile = document.getElementsByClassName("not_mobile");
  var isMobile = document.getElementsByClassName("mobile");
  Nonbile.style.display = "block";
  isMobile.style.display = "none";
}

  
