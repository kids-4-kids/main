function checkblank() {
     var para = document.getElementsByTagName("p");
     if(para.innerHTML == "") {
          para.id = "isblank";
          para.innerHTML = "if we have any upcoming events, they will be here!";
           
     }
     else { 
          para.id = "_isblank";
     }
}
      
 
