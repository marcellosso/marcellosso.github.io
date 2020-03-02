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

$('.main-content a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 700);
    }
})

//Fix navbar on top
var num = 1000;

$(window).bind('scroll', function() {
    var windowWidth = $(window).width();
    
    if(windowWidth > 750){
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
    } else {
        $('.nav').removeClass('fixed');
            $('.nav').removeClass('animateIn');
            $('.nav').addClass('animateOut');
            $('.navbarC').addClass('container');
    }
})


// var message = "";
// var form = document.querySelector('#contactForm'),
//     name = form.querySelector('[name="name"]');

// $("#sendMessage").on("click", function(e) {
//     e.preventDefault();
//     console.log("foi");
//     console.log(name.value);

//     $("#sendMessage").value = 'Sending...';
//     message = $("#contactForm").serialize();
//     console.log(message);

//     var xhr = new XMLHttpRequest();

//     xhr.open('POST', '//formspree.io/marcel.losso@gmail.com', true);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     xhr.onloadend = function (res) {
//         if(res.target.status === 200){
//             console.log("Sucesso");
//         } else {
//             console.log("erro");
//             console.log(res.target.status);
//         }
//     }

//     xhr.send("name=" + message);
//     // $.ajax({
//     //     url: "//formspree.io/xayjdnod",
//     //     method: "POST",
//     //     data: {message: message},
//     //     dataType: "json",
//     //     success: function(data) {
//     //         console.log("SUCESSO -> " + data)
//     //     }
//     // });
//     // alert('Thanks');
//     // return false;
// })
