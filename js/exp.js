
    /* Click 1 */
    $(".exp-click1").click(function() {
        var clicks = $(this).data("clicks");
        if (clicks) {
        $('.exp-circle1').animate({ 
            marginLeft: "0em",
            marginTop: "0em",
        }, 200 );
        $('.circle-dot').animate({ 
            opacity: "1",
        }, 500 );
        $('.circle-line').animate({ 
            opacity: "1",
          }, 500 );
         $('.expertise-title').animate({ 
            fontSize: ".7em",
            marginTop: "1.8em",
          }, 50 );
          $('.exp-circle2').animate({ 
            opacity: "1",
            zIndex: "1",
         }, 200 );
         $('.exp-circle3').animate({ 
            opacity: "1",
         }, 300 );
         $('.exp-circle4').animate({ 
            opacity: "1",
         }, 400 );
         $('.exp-circle5').animate({ 
            opacity: "1",
         }, 500 );
         $('.exp-d1').animate({ 
            left: "+=160vw",
         }, 500 ); 

        } else {  
        
        $('.exp-circle1').animate({ 
            marginLeft: "1em",
            marginTop: "1em",
        }, 200 );
        $('.circle-dot').animate({ 
            opacity: "0",
        }, 50 );
        $('.circle-line').animate({ 
            opacity: "0",
          }, 50 );
         $('.expertise-title').animate({ 
            fontSize: ".8em",
            marginTop: "-.5em",
          }, 50 );
          $('.exp-circle2').animate({ 
            opacity: "0",
            zIndex: "-1",
         }, 20 );
         $('.exp-circle3').animate({ 
            opacity: "0",
         }, 30 );
         $('.exp-circle4').animate({ 
            opacity: "0",
         }, 40 );
         $('.exp-circle5').animate({ 
            opacity: "0",
         }, 50 );
         $('.exp-d1').animate({ 
            left: "-=160vw",
         }, 500 ); }
        $(this).data("clicks", !clicks);
        });




        /*--- Click 2 ---*/


        $(".exp-click2").click(function() {
            var clicks2 = $(this).data("clicks2");
            if (clicks2) {
            $('.exp-circle2').animate({ 
                marginLeft: "0em",
            }, 200 );
              $('.exp-circle1').animate({ 
                opacity: "1",
             }, 200 );
             $('.exp-circle3').animate({ 
                opacity: "1",
             }, 300 );
             $('.exp-circle4').animate({ 
                opacity: "1",
             }, 400 );
             $('.exp-circle5').animate({ 
                opacity: "1",
             }, 500 );
             $('.exp-d2').animate({ 
                left: "+=155vw",
                top: "0rem",
             }, 500 ); 
             $('.circle-dot-top').animate({ 
                opacity: "1",
            }, 50 );
            $('.circle-line-top').animate({ 
                opacity: "1",
              }, 50 );
             $('.expertise-title-top').animate({ 
                marginLeft: "0em",
                fontSize: ".7em",
                top: "-58%"
            }, 50 );
            
            } else {  

            $('.exp-circle2').animate({ 
                marginLeft: "-1em",
            }, 200 );
            $('.exp-circle1').animate({ 
                opacity: "0",
            }, 20 );
            $('.exp-circle3').animate({ 
                opacity: "0",
            }, 30 );
            $('.exp-circle4').animate({ 
                opacity: "0",
            }, 40 );
            $('.exp-circle5').animate({ 
                opacity: "0",
            }, 50 );
            $('.exp-d2').animate({ 
                left: "-=155vw",
                top: "6rem",
             }, 500 );
            $('.circle-dot-top').animate({ 
                opacity: "0",
            }, 50 );
            $('.circle-line-top').animate({ 
                opacity: "0",
              }, 50 );
             $('.expertise-title-top').animate({ 
                marginLeft: "-.2em",
                fontSize: ".8em",
                top: "-50%",
              }, 50 ); }

            $(this).data("clicks2", !clicks2);
            });






              /*--- Click 3 ---*/


        $(".exp-click3").click(function() {
            var clicks3 = $(this).data("clicks3");
            if (clicks3) {
            $('.exp-circle3').animate({ 
                marginLeft: "0em",
                marginTop: "0em",
                zIndex: "1",
            }, 200 );
              $('.exp-circle1').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 200 );
             $('.exp-circle2').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 300 );
             $('.exp-circle4').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 400 );
             $('.exp-circle5').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 500 );
             $('.exp-d3').animate({ 
                left: "+=160vw",
             }, 500 ); 
             $('.circle-dot3').animate({ 
                opacity: "1",
            }, 50 );
            $('.circle-line3').animate({ 
                opacity: "1",
              }, 50 );
             $('.expertise-title3').animate({ 
                fontSize: ".7em",
                marginTop: "2em"
            }, 50 );
            
            } else {  

            $('.exp-circle3').animate({ 
                marginLeft: "-3em",
                marginTop: "1em",
                zIndex: "3",
            }, 200 );
            $('.exp-circle1').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 20 );
            $('.exp-circle2').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 30 );
            $('.exp-circle4').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 40 );
            $('.exp-circle5').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 50 );
            $('.exp-d3').animate({ 
                left: "-=160vw",
             }, 500 );
            $('.circle-dot3').animate({ 
                opacity: "0",
            }, 50 );
            $('.circle-line3').animate({ 
                opacity: "0",
              }, 50 );
             $('.expertise-title3').animate({ 
                fontSize: ".8em",
                marginTop: "-1em",
              }, 50 ); }

            $(this).data("clicks3", !clicks3);
            });


             /*--- Click 4 ---*/


        $(".exp-click4").click(function() {
            var clicks4 = $(this).data("clicks4");
            if (clicks4) {
            $('.exp-circle4').animate({ 
                marginLeft: "0em",
                marginTop: "0em",
                zIndex: "1",
            }, 200 );
              $('.exp-circle1').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 200 );
             $('.exp-circle2').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 300 );
             $('.exp-circle3').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 400 );
             $('.exp-circle5').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 500 );
             $('.exp-d4').animate({ 
                left: "-=190vw",
             }, 500 ); 
             $('.circle-dot-top4').animate({ 
                opacity: "1",
            }, 50 );
            $('.circle-line-top4').animate({ 
                opacity: "1",
              }, 50 );
             $('.expertise-title-top4').animate({ 
                marginLeft: "0em",
                fontSize: ".7em",
                top: "-61%",
            }, 50 );
            
            } else {  

            $('.exp-circle4').animate({ 
                marginLeft: "5.5em",
                marginTop: "1em",
                zIndex: "3",
            }, 200 );
            $('.exp-circle1').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 20 );
            $('.exp-circle2').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 30 );
            $('.exp-circle3').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 40 );
            $('.exp-circle5').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 50 );
            $('.exp-d4').animate({ 
                left: "+=190vw",
             }, 500 );
            $('.circle-dot-top4').animate({ 
                opacity: "0",
            }, 50 );
            $('.circle-line-top4').animate({ 
                opacity: "0",
              }, 50 );
             $('.expertise-title-top4').animate({ 
                marginLeft: "-.2em",
                fontSize: ".8em",
                top: "-50%",
              }, 50 ); }

            $(this).data("clicks4", !clicks4);
            });




              /*--- Click 5 ---*/


        $(".exp-click5").click(function() {
            var clicks5 = $(this).data("clicks5");
            if (clicks5) {
            $('.exp-circle5').animate({ 
                marginLeft: "0em",
                marginTop: "0em",
                zIndex: "1",
            }, 200 );
              $('.exp-circle1').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 200 );
             $('.exp-circle2').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 300 );
             $('.exp-circle4').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 400 );
             $('.exp-circle3').animate({ 
                opacity: "1",
                zIndex: "1",
             }, 500 );
             $('.exp-d5').animate({ 
                left: "-=190vw",
             }, 500 ); 
             $('.circle-dot5').animate({ 
                opacity: "1",
            }, 50 );
            $('.circle-line5').animate({ 
                opacity: "1",
              }, 50 );
             $('.expertise-title5').animate({ 
                fontSize: ".7em",
                marginTop: "2em"
            }, 50 );
            
            } else {  

            $('.exp-circle5').animate({ 
                marginLeft: "3em",
                marginTop: "1em",
                zIndex: "3",
            }, 200 );
            $('.exp-circle1').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 20 );
            $('.exp-circle2').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 30 );
            $('.exp-circle4').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 40 );
            $('.exp-circle3').animate({ 
                opacity: "0",
                zIndex: "-1",
            }, 50 );
            $('.exp-d5').animate({ 
                left: "+=190vw",
             }, 500 );
            $('.circle-dot5').animate({ 
                opacity: "0",
            }, 50 );
            $('.circle-line5').animate({ 
                opacity: "0",
              }, 50 );
             $('.expertise-title5').animate({ 
                fontSize: ".8em",
                marginTop: "-.5em",
              }, 50 ); }

            $(this).data("clicks5", !clicks5);
            });
