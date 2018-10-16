$(document).ready(function(){
    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var wrapper1 = new ScrollMagic.Scene({triggerElement: '#section2'})
    .setClassToggle('#wrapper1', 'fade-out') //add class to #section2
    .addIndicators({
        name: 'fade out',
        colorTrigger: 'black',
        indent: 200,
        colorStart: '#75C696'
    }) //This requires plugin, and you will see indicator positions
    .addTo(controller);


    //Init Scene
    var wrapper3 = new ScrollMagic.Scene({
        triggerElement: '#section3'
    })
    .setClassToggle('#wrapper3', 'fade-in') //add class to #section2
    .addIndicators({
        name: 'fade in',
        colorTrigger: 'black',
        indent: 200,
        colorStart: '#75C696'

    }) //This requires plugin, and you will see indicator positions
    .addTo(controller);

    //paralax Scene
    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: 'bcg-parallax',
        triggerHook: 1,
        duration: '150%'
    })
    .setTween(TweenMax.from('.bcg', 1, {y: '10%', ease:Power0.easeNone})) //GreenSoc
    .addTo(controller)
});

/*
Settings for individual item
    var ourScene = new ScrollMagic.Scene({
        triggerC: 'content-wrapper'
    })
    .setClassToggle('content-wrapper', 'fade-in') //add class to #section2
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 200,
        colorStart: '#75C696'

    }) //This requires plugin, and you will see indicator positions
    .addTo(controller);
*/
/*    
Not working use inline tween
//build a scene with loop
    $('.content-wrapper').each(function(){
        var ourScene = new ScrollMagic.Scene({
            triggerC: this
        })
        .setClassToggle('content-wrapper', 'fade-in') //add class to #section2
        .addTo(controller);
    })
    
    */