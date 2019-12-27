// Smooth Scroll
$('.nav a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 700);
    }
})

//Fix navbar on top
var num = 1080;

$(window).bind('scroll', function() {
    if($(window).scrollTop() < num){
        $('.nav').removeClass('fixed');
        $('.nav').removeClass('animateIn');
        $('.nav').addClass('animateOut');
        $('.navbarC').addClass('container');
    } else {
        $('.navbarC').removeClass('container');
        $('.nav').addClass('fixed');
        $('.nav').removeClass('animateOut');
        $('.nav').addClass('animateIn');
    }
})

