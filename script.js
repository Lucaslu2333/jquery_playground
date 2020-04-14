$(document).ready(function(){
    // Box 3
    $("#b1").click(function(){
        $("#b1").fadeTo(1000, 0.3)
    });

    // Box 2
    $("#b2").mouseenter(function(){
        $("#b2").animate({width: '+=80'})
    });
    $("#b2").mouseleave(function(){
        $("#b2").animate({width: '-=80'})
    });

    // Box 3
    $("#b3").dblclick(function(){
        $("#b3").slideUp(500)
    })

    // Box 4
    $("#b4").keydown(function(){
        $("#b4").css({'background-color':'rgb(233, 237, 157)'})
    })
    $("#b4").keyup(function(){
        $("#b4").css({'background-color':'rgb(197, 237, 157)'})
    })
});