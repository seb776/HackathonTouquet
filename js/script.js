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
        }, 400);
    });
    $(".content-vignette").hide();
    $(".vignette").click(function(){
        $(".content-vignette").hide();
        $(".apercu-vignette").children("table").show();
        $(this).children(".apercu-vignette").children("table").fadeToggle();
        $(this).children(".content-vignette").slideToggle();
        $('html, body').animate({
            scrollTop: $(this).offset().top-110
        }, 700);
        $(".button-save").click(function(){
            $(this).children(".content-vignette").slideToggle();
        });
    });
    
    $(".choix-langue").hide();
    
    $(".toggle-langue").click(function(){
        $(".choix-langue").slideToggle();
    });

});