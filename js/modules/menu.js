$(".btn-menu").click(function(){

  $(this).toggleClass("close");
  $(".menu").toggleClass("menu-on");

});


//wall of ideas

$(".btn-close-popup").click(function() {
  TweenMax.to(".pop-up-container", .5, {autoAlpha: 0, ease: Power1.easeInOut});
});
