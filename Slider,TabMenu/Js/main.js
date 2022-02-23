var headings = document.querySelectorAll(".tabmenu div")
var contexts = document.querySelectorAll(".content div")
for (var heading of headings) {
    heading.addEventListener("click", function() {
        var active = document.querySelector('.active');
        active.classList.remove('active');
        this.classList.add('active');

        var id = this.getAttribute('data-id');

        for (var context of contexts) {
            if (context.getAttribute('data-id') == id) { context.classList.remove('d-none') } else(context.classList.add('d-none'))
        }
    })
}
var ImageList = [
    "photos/image1.jpg",
    "photos/image2.jpg",
    "photos/image3.jpg"
]

var image = document.querySelector('.photo');
image.src = ImageList[0];

var currentSlide = 0;
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');


next.onclick = function() {
    currentSlide++;

    if (currentSlide > ImageList.length - 1) {
        currentSlide = 0
    }

    image.src = ImageList[currentSlide];
}

prev.onclick = function() {
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = ImageList.length - 1
    }
    image.src = ImageList[currentSlide];
}

function AutoPlay() {
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = ImageList.length - 1
    }
    image.src = ImageList[currentSlide];
}


// setInterval(AutoPlay, 4000);