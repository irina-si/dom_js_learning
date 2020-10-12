var audio = document.getElementById("audio");
console.log(audio);
audio.volume = 0.2;
audio.removeAttribute("muted");

var slideInterval = 5300;

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
   }

function moveForward() {
    var pointer = 0;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
      if (figures[i].className == "visible") {
        figures[i].className = "hidden";
        pointer = i;
        }
      }
      if (++pointer == figures.length) {
        pointer = 0;
      }
    figures[pointer].className = "visible";
    setTimeout(moveForward, slideInterval);
   }  

function startPlayback() { 
    setTimeout(moveForward, slideInterval);
   }

startPlayback();
