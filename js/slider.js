{/* <div class="slider__btn slider__btn__left" id="btn__left">
<div class="slider__btn slider__btn__right" id="btn__right"> */}

const slider = document.querySelector('#slider');

let sliderSection = document.querySelectorAll('.slider__section');

let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn__left');
const btnRight = document.querySelector('#btn__right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

function Back() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

// bntRight.addEventListener('click', function() {
//     Next();
// });

btnRight.addEventListener('click', ()=> {
    Next();
});

btnLeft.addEventListener('click', ()=> {
    Back();
});

setInterval(() => {
    Next();
}, 5000);