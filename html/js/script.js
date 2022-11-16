
'use strict'

var next_slide = document.querySelector('.next-slide'),
    prev_slide = document.querySelector('.prev-slide'),
    pasos = document.querySelectorAll('.paso-li'),
    video_bg = document.getElementById('video-bg');

let pixeles = 0;

video_change();

next_slide.addEventListener('click', ()=>{
    pixeles-=100;
    pasos.forEach(paso => {
        paso.style.transform = "translateX(" + pixeles + "%)";
    });
    video_change();
});

prev_slide.addEventListener('click', ()=>{
    pixeles+=100;
    pasos.forEach(paso => {
        paso.style.transform = "translateX(" + pixeles + "%)";
    });
    video_change();
});

function video_change(){
    if(pixeles == 0){
        video_bg.setAttribute('src', '../img/paso1.mp4');
        prev_slide.style.display = "none";
    } else if (pixeles == -100){
        video_bg.setAttribute('src', '../img/paso2.mp4');
        prev_slide.style.display = "flex";
        next_slide.style.display = "flex";
    } else if (pixeles == -200){
        video_bg.setAttribute('src', '../img/paso3.mp4');
        next_slide.style.display = "none";
    }
}