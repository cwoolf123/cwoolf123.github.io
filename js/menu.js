
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
        }, 500 ); 

        } else {  
        
        $('.line1').animate({ 
            width: ".5rem",
        }, 200 );
        $('.line2').animate({ 
            width: "1rem",
        }, 400 );
        $('.line3').animate({ 
            width: "1.5rem",
        }, 600 ); 
        $('nav').animate({ 
            top: "40em",
            zIndex: 5,
        }, 500 ); }
        
        $(this).data("clickm", !clickm)
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


(function($){

    $(window).load(function(){
        //everything is loaded (images, scripts, etc.)
        var os_tagsToAdd = [];
var os_tagsToRemove = [];

$(".os_section-slider").click(function() {
  console.clear();

  var os_tagName = $(this).prev().attr("id");

  //if checked AFTER the click
  if($(this).prev().is(":checked")) {
    if($.inArray(os_tagName, os_tagsToAdd) == -1){
      os_tagsToAdd.push(os_tagName);
    }
    os_tagsToRemove.splice($.inArray(os_tagName, os_tagsToRemove),1);

    //if unchecked AFTER the click
  } else {
    if($.inArray(os_tagName, os_tagsToRemove) == -1){
      os_tagsToRemove.push(os_tagName);
    }
    os_tagsToAdd.splice($.inArray(os_tagName, os_tagsToAdd),1);
  }

  console.log( os_tagsToAdd );
  console.log( os_tagsToRemove );
});

// Onload remove array fill
$("[type='checkbox']").each(function(){
  if( $(this).is(":checked") ){
    os_tagsToRemove.push($(this).attr("id"));
  }else{
    os_tagsToAdd.push($(this).attr("id"));
  }
});

console.log( os_tagsToAdd );
console.log( os_tagsToRemove );
    });

    // and/or

    $(document).ready(function(){
        // the dom is in place, but everything is not necessarily loaded

    });

})(jQuery);
