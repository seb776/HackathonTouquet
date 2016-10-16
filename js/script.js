$( document ).ready(function() {

    //    var largeur_fenetre = $(window).width();
    //    var hauteur_fenetre = $(window).height();

    //open nav
    $("#bouton-nav-open").click(function(){
        $(".nav-absolute").animate({
            marginLeft: 0
        }, 400);
    });

    //close nav
    $("#bouton-nav-close").click(function(){
        $(".nav-absolute").animate({
            marginLeft: "-100%"
        }, 500);
    });
    $(".content-vignette").hide();
    //    $(".vignette").click(function(){
    //    });
    $(".apercu-vignette").click(function(){
        $(".content-vignette").hide();
        $(".apercu-vignette").children("table").show();
        $(this).children("table").fadeToggle();
        $(this).siblings(".content-vignette").slideToggle();
        $('html, body').animate({
            scrollTop: $(this).offset().top-110
        }, 1000);
    });
    $(".toggle-vinette-down").click(function(){
        $(this).parent(".content-vignette").slideToggle();
    });

    $(".choix-langue").hide();

    $(".toggle-langue").click(function(){
        $(".choix-langue").slideToggle();
    });

    $(".tablesupplementaire").hide();
    $(".toggle-filtre").click(function(){
        $(".tablesupplementaire").slideToggle();
        $('html, body').animate({
            scrollTop: $(this).offset().top-110
        }, 1000);
    });
    
});