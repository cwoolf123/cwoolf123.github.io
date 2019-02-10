
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

     /* Arrow Click */
     $(".arrow-click").click(function() {
        var clicka = $(this).data("clicka");
        if (clicka) {
        $('.circles').animate({ 
            top: "0vw",
        }, 900 );

        } else {  
        
        $('.circles').animate({ 
            top: "-=100vw",
        }, 900 );}
        
        $(this).data("clicka", !clicka);
    });


