
var anchor1=document.getElementById("starters");
var dispaly1=document.getElementsByClassName(".menu4");
var anchor2=document.getElementById("salad");
var anchor3=document.getElementById("specialty");

$(window).scroll(function(){
    let current=$(window).scrollTop();
    if(current>600){
        $(".navbar").css({"backgroundColor":"rgba(12, 11, 9, 0.6)", "transition":"all 0.5s"})

    }
    else{
        $(".navbar").css("background","transparent")
    }
})
$(".nav-link").click(function(){
    let currentLinks=$(this).attr("href");
    let currentOffset=$(currentLinks).offset().top;
    $("body").animate({scrollTop:currentOffset},200)
})
$(document).ready(function()
{
    $("#loadding").fadeOut(2000,function(){
        $("body").css("overflow","auto")
        $("#loadding").remove()
    })

})
$(document).scrollTop(function(){
    let currentLocation=$(document).scrollTop();
    console.log(currentLocation)
})
var link1=document.getElementById("link1");
var link2=document.getElementById("link2");
var link3=document.getElementById("link3");
var link4=document.getElementById("link4");
var cap1=document.getElementById("cap1");
var cap2=document.getElementById("cap2");
var cap3=document.getElementById("cap3");
var cap4=document.getElementById("cap4");
link1.addEventListener("click",function(){
    $("#cap2").css("display","none")
    $("#cap1").css("display","block") 
    $("#cap3").css("display","none")
    $("#cap4").css("display","none")
})
link2.addEventListener("click",function(){
    $("#cap2").css({"display":"block" ,"transition":"all 0.5s"})  
    $("#cap1").css("display","none")
    $("#cap3").css("display","none")
    $("#cap4").css("display","none")
})
link3.addEventListener("click",function(){
    $("#cap3").css("display","block")
    $("#cap1").css("display","none")
     $("#cap2").css("display","none")  
     $("#cap4").css("display","none")
})
link4.addEventListener("click",function(){
    $("#cap4").css("display","block")
    $("#cap3").css("display","none")
    $("#cap1").css("display","none")
     $("#cap2").css("display","none")  
})




var typed = new Typed('.element', {
    strings: ['Delivering great food for more than 18 years!'],
    typeSpeed: 50,
    backSpeed:50,
    loop: true,
    smartBackspace: true // Default value,
    
  });
  new WOW().init();
  new WOW(
      {
        offset:500
      }
  ).init();
 
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });
