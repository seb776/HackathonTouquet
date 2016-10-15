$( document ).ready(function() {

    //    var largeur_fenetre = $(window).width();
    //    var hauteur_fenetre = $(window).height();

    //open nav
    $("#bouton-nav-open").click(function(){
        $("nav ul").animate({
            marginLeft: 0
        }, 400);
    });

    //close nav
    $("#bouton-nav-close").click(function(){
        $("nav ul").animate({
            marginLeft: "-100%"
        }, 400);
    });

    $(window).resize(function(){

    });

});