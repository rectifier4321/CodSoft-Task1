const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
};

const goNext = () => {
    counter++;
    if (counter > slides.length - 1) {
        counter = 0;
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);