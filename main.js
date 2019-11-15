/*////////////   PARALLAX   //////////////*/
$(document).ready(function(){
    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion2 = barra * 0.9;
        var posicion3 = barra * 0.7;
        var posicion4 = barra * 0.5;
        var posicion5 = barra * 0.4;



        $('#dos').css({
            'background-position':'0 -' + posicion2 + 'px'
        });
        $('#tres').css({
            'background-position':'0 -' + posicion3 + 'px'
        });
        $('#four').css({
            'background-position':'0 -' + posicion4 + 'px'
        });
        $('#five').css({
            'background-position':'0 -' + posicion5 + 'px'
        });       

    });
});
/*///////////////  TYPE-WRITING ///////////////*/
/*
var i, text;
i=0;
text="soy programador full-stack";
text2="soy un amante de la creatividad";
text3="soy agricultor";

function typing(){

    if(i<text.length){
        document.getElementById("typeWriter").innerHTML += text.charAt(i);
        i++;   
        setTimeout(typing,70);                      
    }
    
}
typing();
*/




















