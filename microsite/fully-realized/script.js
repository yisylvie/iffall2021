var body = document.getElementById("body");

// get rid of citation numbers in text
for(var num=0; num<=60; num++){
    body.innerHTML = body.innerHTML.replaceAll("[" + num + "]", "");
}