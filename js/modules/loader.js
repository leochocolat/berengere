$(document).ready(function(){

  let timingLoader = 1000;
  let timingLoaderS = timingLoader / 1000;

  setTimeout(function(){

    let appear = new TimelineMax();

    appear.add([
      TweenMax.staggerFromTo(".appear", .5, {autoAlpha: 0}, {autoAlpha: 1, ease:Power1.easeInOut, delay: timingLoaderS}, 0.1),
      TweenMax.staggerFromTo(".move-down", 1, {autoAlpha: 0, y: "-200%"}, {autoAlpha: 1, y: "-50%", ease:Power3.easeInOut, delay: .4}, .1),
      TweenMax.staggerFromTo(".move-down-0", 1, {autoAlpha: 0, y: "-100%"}, {autoAlpha: 1, y: "0%", ease:Power3.easeInOut, delay: .4}, .1),
    ]);

    TweenMax.fromTo(".loader", .9, {css:{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}, {css:{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"}, ease: Power3.easeOut});

    // TweenMax.to(".loader", .5, {autoAlpha: 0, ease:Power1.easeInOut});
    TweenMax.to(".loader", .0001, {display: "none", delay:.8});


  }, timingLoader);

});
