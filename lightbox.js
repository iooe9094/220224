window.onload = function() {
    let pics = document.getElementsByClassName("pic");
    let lightbox = document.getElementById("lightbox");
    let lightboxImage = document.getElementById("lightboxImage");

    for(i=0; i<pics.length; i++) {
        pics[i].addEventListener("click", showLightBox);
    }
    function showLightBox() {
        let bigLocation = this.getAttribute("date-src");
        lightboxImage.setAttribute("src", bigLocation);
        lightbox.style.display = "block";
    }
    lightbox.onclick = function() {
        lightbox.style.display = "none";
    }
}