// make the width of the body approx. 65 characters long
var body = document.getElementById("body");
var p = document.getElementsByTagName("p");
var div = document.getElementsByTagName("div");

var fontSize = window.getComputedStyle(body).fontSize;
fontSize = fontSize.replace('px', '');


for(i=0; i<p.length; i++) {
    p[i].style.width = fontSize/2 * 65 + "px";
}