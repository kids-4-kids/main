var winSize = window.matchMedia("(max-width: 1024px)")

if (winSize.matches) {
  
  mobile();
  
  }
else {
  
  nonMobile();
  
}


function mobile() {
  var Nobile = document.getElementsByClassName("not_mobile");
  var isMobile = document.getElementsByClassName("mobile");
  Nobile.style.display = "none";
  isMobile.style.display = "block";
}


function nonMobile();
  var Nobile = document.getElementsByClassName("not_mobile");
  var isMobile = document.getElementsByClassName("mobile");
  Nobile.style.display = "block";
  isMobile.style.display = "none";

  
