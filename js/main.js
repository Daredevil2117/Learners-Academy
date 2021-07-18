// active navbar

// $(function(){
//     $(".navigation-wrap ul li a").click(function(){
//         var thisSection =$(this).attr("href");
//         var thisLink=$(this);

//         $("html body").stop().animate({
//             scrollTop: $(thisSection).offset().top-200
//         },800,"easeOutCirc", function(){
           
//             $(".navigation-wrap ul li a").removeClass("activeone");
//             $(thisLink).addClass("activeone");
//         });
//     });
// });
  


$(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 10){
            $('.navigation-wrap').addClass('scroll-on');
        }else{
           $('.navigation-wrap').removeClass('scroll-on');
        }
    })
});


$(function(){
    $('.navbar-toggler').on('click', function(){
       $('.navigation-wrap').addClass('scroll-on');
    })
});

// nav hide
$('.nav-link').on('click', function(){
   $('.navbar-collapse').collapse('hide');
});


// Active Scroll Indicator 
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-200;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
 

// animation
AOS.init({
    // disable: 'mobile'
});
 

// owl carousel
$('.blog-slider').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1366:{
            items:1
        }
    }
});