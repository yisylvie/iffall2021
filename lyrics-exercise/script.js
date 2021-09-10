var title = document.getElementById('title');
var h2 = document.getElementById('artist');
var center = document.getElementById('center');
var lyrics = document.querySelector('#lyrics');
var elements = [center,h2,title];

//used https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9 for help with intersection observer
const config = {
    root: null,
    rootMargin: '0px',
    threshold: .05
};


//prevent animation from playing when page is reloaded
var hasScrolled = false;

//scroll up
let observer = new IntersectionObserver(function(entries) {
    entries.map(entry => {
        if (entry.isIntersecting) {
            elements.forEach(element => {
                element.style.animationName = element.id + "Up";
            });
            hasScrolled = true;

            //speed up animation if far down on page
            const configIn = {
                root: null, 
                rootMargin: '0px',
                threshold: .12
            };
            let innerObserver = new IntersectionObserver(function(entries) {
                entries.map(entry => {
                    if (entry.isIntersecting) {
                        elements.forEach(element => {
                            element.style.animationDuration = ".45s";
                        });
                        console.log("fast");
                    }
                });
            }, configIn);
            innerObserver.observe(lyrics);
        }

        // scrolling down to top of page
        else if(hasScrolled) {
            elements.forEach(element => {
                element.style.animationName = element.id + "Down";
                element.style.animationDuration = "1s";
                console.log(element);
            });
            console.log("up animation");
        }
    });
}, config);

observer.observe(lyrics);

