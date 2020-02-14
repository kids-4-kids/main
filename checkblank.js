
      function checkblank() {
        var body = document.getElementById("body");
        body.onload = "checkblank();";
        var blank = document.getElementById("blank");
        if (blank.getAttribute("id") == "blank") {
          var para = document.getElementById("isblank");
          para.innerHTML = "if we have any upcoming events, they will be here!";
        }
      }
      
 
