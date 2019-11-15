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

const TypeWriter = function(txtElement, words, wait = 2000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
// Type method
TypeWriter.prototype.type = function(){
    
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;

    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);

}
















