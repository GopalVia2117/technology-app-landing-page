$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-navigation");
const closeBtn = document.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", function(){
    mobileMenu.style.width = "50%";
});

closeBtn.addEventListener("click", function(){
    mobileMenu.style.width = "0px";
});