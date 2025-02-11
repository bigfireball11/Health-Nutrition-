let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

  
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.display = "block";


    setTimeout(showSlides, 7000); 
}

function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    
    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1; 
    } else if (slideIndex < 1) {
        slideIndex = slides.length; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

showSlides();
