const heroSwiper = new Swiper(".heroSwiper", {

loop:true,

speed:1200,

effect:"fade",

autoplay:{
delay:5000,
disableOnInteraction:false
},

pagination:{
el:".swiper-pagination",
clickable:true
},

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
}

});

window.addEventListener('scroll',()=>{

    const navbar=document.querySelector('.navbar');
    
    if(window.scrollY>50){
    navbar.classList.add('scrolled');
    }else{
    navbar.classList.remove('scrolled');
    }
    
    });
