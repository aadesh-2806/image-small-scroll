const bg = document.querySelector('#header');
window.addEventListener('scroll' , ()=>{
    bg.style.backgroundSize = 100 + window.pageYOffset/12+'%';
    // bg.style.opacity = 1- window.pageYOffset/700 ;
})