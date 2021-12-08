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