
    /* Click 1 */
    $(".menu-click1").click(function() {
        var clickm = $(this).data("clickm");
        if (clickm) {
        $('.line1').animate({ 
            width: "2rem",
        }, 200 );
        $('.line2').animate({ 
            width: "2rem",
        }, 400 );
        $('.line3').animate({ 
            width: "2rem",
        }, 600 );
        $('nav').animate({ 
            top: "-20em",
            zIndex: 1,
        }, 600 ); 

        } else {  
        
        $('.line1').animate({ 
            width: ".5rem",
        }, 200 );
        $('.line2').animate({ 
            width: "1rem",
        }, 400 );
        $('.line3').animate({ 
            width: "0rem",
        }, 600 ); 
        $('nav').animate({ 
            top: "30em",
            zIndex: 5,
        }, 600 ); }
        
        $(this).data("clickm", !clickm);
    });


/* Plus / Chip Click */
$(".chip-img").click(function() {
    var clicka = $(this).data("clicka");
    if (clicka) {
    $('.circles').animate({ 
        top: "+=100vw",
    }, 900 );
    $('.current-img').animate({ 
        top: "+=130vw",
    }, 900 );
    $('.flap-txt').animate({ 
        left: "+=150vw",
    }, 1200 );
    $('.skills').animate({ 
        opacity: 0,
        left: "-=110vw",
    }, 900 );
    $('.skills-2').animate({ 
        opacity: 0,
    }, 900 );
    $('.j-title').animate({ 
        left: "-=100vw",
    },900 );
    $('.summary-p').animate({ 
        top: "-=100vh",
    },900 );
    $('.about-img').animate({ 
        top: "+=100vh",
    },900 );

    } else {  
    
    $('.circles').animate({ 
        top: "-=100vw",
    }, 900 );
    $('.current-img').animate({ 
        top: "-=130vw",
    }, 900 );
    $('.flap-txt').animate({ 
        left: "-=150vw",
    }, 1200 );
    $('.skills').animate({ 
        opacity: .8,
        left: "+=110vw",
    }, 1200 );
    $('.skills-2').animate({ 
        opacity: .8,
    }, 1800 );
    $('.j-title').animate({ 
        left: "+=100vw",
    }, 900 );
    $('.summary-p').animate({ 
        top: "+=100vh",
    }, 900 );
    $('.about-img').animate({ 
        top: "-=100vh",
    }, 900 );}
    
    $(this).data("clicka", !clicka);
});




/* Portfolio Click 1 */
$(".portfolio1").click(function() {
    var clickp1 = $(this).data("clickp1");
    if (clickp1) {
    $('.port-1 img').animate({ 
        opacity: 0,
        zIndex: -4, 
    }, 900 );

    } else {  
    
    $('.port-1 img').animate({ 
        opacity: 1,
        zIndex: 4,
    }, 900 );}
    
    $(this).data("clickp1", !clickp1);
});



