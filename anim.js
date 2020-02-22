var menu = document.getElementsByClassName("menubar");
var tl = new TimelineMax();
tl.fromTo(menu,1,{width: "0%"},{width: "100%"});

function changeColor(object) {
  tl.fromTo(object,1,{color: "blue"},{color: "red"});
