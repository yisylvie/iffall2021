var h2s = document.querySelectorAll('.artist');
var centers = document.querySelectorAll('.center');
var lyrics = document.querySelectorAll('.lyricBackground');
var lyricsEdit = document.getElementsByClassName('lyrics');
var roller =  document.querySelector("#roller");
var titles = document.querySelectorAll(".title");
var songs = [];
for(var i=0; i<lyrics.length; i++) {
    var element = [];
    element[0] = centers[i];
    element[1] = h2s[i];
    element[2] = titles[i];
    console.log(element);
    songs[i] = element;
}

//make position of lyrics text flush with title
for(var i = 0; i<lyricsEdit.length; i++) {
    //wide add extra space
    lyricsEdit[i].style.paddingTop = (titles[0].clientHeight - (centers[0].clientHeight + 93*1.25))/2 + 3.5 + "px";
    lyricsEdit[i].style.paddingBottom = lyricsEdit[i].style.paddingTop;
    console.log(lyricsEdit[i].style.paddingBottom);
}

//used https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9 for help with intersection observer

var configThreshold0 = [.04, .05, .12, .32,1];
var configThreshold1 = [];
var shift1 = .16-.04;

//begin scroll when lower on page since he mele title has smaller hight
for(var i = 0; i< configThreshold0.length;i++) {
    if(configThreshold0[i] + shift1<=1) {
        configThreshold1.push(configThreshold0[i] + shift1);
    }
}

const config0 = {
    root: null,
    rootMargin: '0px',
    threshold: configThreshold0
};

const config1 = {
    root: null,
    rootMargin: '0px',
    threshold: configThreshold1
};

const configs = [config0,config1];

var shifts = [0, shift1];

//prevent animation from playing when page is reloaded
var animationDuration = 1;
var beginning = true;
previousScroll = 0;

function createScroll(elements, observedEl, shift, configuration) {
    function scrollConfig(entries) {
        entries.map(entry => {
                console.log(entry.intersectionRatio);
            
            //scroll down
            if (entry.isIntersecting) {
                if(entry.intersectionRatio >= .02 + shift) {
                    elements.forEach(element => {
                        element.style.animationName = element.className + "Up";
                        element.style.animationDuration = animationDuration + "s";
                    });
                    animationDuration = animationDuration/2;
                }
                //scroll really fast
                if(entry.intersectionRatio >= .1 + shift) {
                    elements.forEach(element => {
                        element.style.animationName = element.className + "Up";
                        element.style.animationDuration = .000000001 + "s";
                        animationDuration = 1;
                    });
                    //narrow don't add extra space
                    lyricsEdit[0].style.paddingTop = (titles[0].clientHeight - centers[0].clientHeight)/2 + 3.5 + "px";
                    lyricsEdit[0].style.paddingBottom = lyricsEdit[0].style.paddingTop;
                }
                beginning = false;
            }

            //scroll up
            else if(!beginning && previousScroll > window.scrollY) {
                elements.forEach(element => {
                    element.style.animationName = element.className + "Down";
                    animationDuration = 1;
                });
            }
        });
        previousScroll = scrollY;
    }
    let observer = new IntersectionObserver(scrollConfig, configuration);
    observer.observe(observedEl);
}

for(var i = 0; i<songs.length; i++) {
    createScroll(songs[i], lyrics[i],shifts[i], configs[i]);
}
