var body = document.getElementById("body");
var p = document.getElementsByTagName("p");


// get rid of citation numbers in text
for(var num=0; num<=60; num++){
    body.innerHTML = body.innerHTML.replaceAll("[" + num + "]", "");
}


//adding quotes
var beginning = true;
for(var num=0; num<p.length; num++){
    p[num].innerHTML = p[num].innerHTML.replaceAll("\'", "&rsquo;");
    while(p[num].innerHTML.includes("\"")){
        if(beginning) {
            p[num].innerHTML = p[num].innerHTML.replace("\"", "&ldquo;");
            beginning = false;
        }
        else{
            p[num].innerHTML = p[num].innerHTML.replace("\"", "&rdquo;");
            beginning = true;
        }
    }
}

//paralax scrolling
var background = document.getElementById("background");
console.log(background.style.backgroundPositionY);
background.style.backgroundPositionY = "-3px";

var totalScrollHeight = body.offsetHeight - window.innerHeight;

let lastKnownScrollPosition = 0;
let ticking = false;

function scroll(scrollPos) {
  console.log(scrollPos);
  background.style.backgroundPositionY = -3 - (scrollPos / 20) + "px";
  console.log(background.style.backgroundPositionY);
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
        scroll(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});