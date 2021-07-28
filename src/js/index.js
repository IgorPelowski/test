import '../scss/main.scss';

const slide = document.querySelector('.slider__images');
const images = document.querySelectorAll('.slider__images .imgs');
const dots = document.querySelectorAll('.slider__dots .dots');
// const dot2 = document.querySelector('.slider__dot2');
// const dot3 = document.querySelector('.slider__dot3');
// const dot4 = document.querySelector('.slider__dot4');
// let dots = [dots];
const buttonNext = document.querySelector('.buttonNext');
const buttonBack = document.querySelector('.buttonBack');
let dotCount = 0;
let count = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * count) + 'px)';

buttonNext.addEventListener('click', ()=>{
    
    if(count >= images.length -1) return;
    dotCount++;
    count++;
    if(dotCount === 4){
        dotCount = 0;
    }
    slide.style.transition = "transform 0.5s ease-in-out";
    
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';

    dots.forEach(dot => dot.style.color = 'white');
    dots[dotCount].style.color = 'yellow';
    console.log(dotCount);  
});

buttonBack.addEventListener('click', ()=>{
    if(count <= 0) return;
    
    dotCount--;
    count--;
    if(dotCount === -1){
        dotCount = 3;
    }
    slide.style.transition = "transform 0.5s ease-in-out";
    
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';

    dots.forEach(dot => dot.style.color = 'white');
    dots[dotCount].style.color = 'yellow';
});

slide.addEventListener('transitionend', ()=>{
    if (images[count].id === 'lastOne'){
        slide.style.transition = "none";
        count = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * count) + 'px)';

    }
    if (images[count].id === 'firstOne'){
        slide.style.transition = "none";
        count = images.length - count;
        slide.style.transform = 'translateX(' + (-size * count) + 'px)';

    }
    
});

