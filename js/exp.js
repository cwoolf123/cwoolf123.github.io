$(function() {
    $('.circles').animate({ 
        opacity: 1,
    }, 1800 );
    $('nav').animate({ 
        opacity: 1,
    }, 1800 );
    $('.fa-plus').animate({ 
        opacity: 1,
    }, 1800 );
});


    /* Click 1 */
    $(".exp-click1").click(function() {
        var clicks = $(this).data("clicks");
        if (clicks) {
        $('.exp-circle1').animate({ 
            marginLeft: "0em",
            marginTop: "0em",
        }, 900 );
        $('.circle-dot').animate({ 
            opacity: "1",
        }, 900 );
        $('.circle-line').animate({ 
            opacity: "1",
        }, 900 );
        $('.expertise-title').animate({ 
            fontSize: ".7em",
            marginTop: "1.8em",
        }, 900 );
        $('.exp-circle2').animate({ 
            marginTop: "0em",
            opacity: 1,
            zIndex: "1",
        }, 900 );
        $('.exp-circle3').animate({ 
            marginTop: "0em",
            opacity: 1,
            zIndex: "1",
        }, 900 );
        $('.exp-circle4').animate({ 
            marginTop: "0em",
            opacity: 1,
            zIndex: "1",
        }, 900 );
        $('.exp-circle5').animate({ 
            marginTop: "0em",
            opacity: 1,
            zIndex: "1",
         }, 900 );
         $('.exp-d1').animate({ 
            left: "+=160vw",
         }, 900 ); 
         $('.expertise-header').animate({ 
            top: "+=12vh",
            opacity: 1,
         }, 900 ); 
         $('.wd-box').animate({ 
            opacity: 0,
            top: "+80vh",
        }, 900 );
        $('.wd-box-dot').animate({ 
            opacity: 0,
            left: "+80vw",
        }, 900 );
        $('.title-txt').animate({ 
            opacity: 1,
        }, 900 );
        $('.title-txt2').animate({ 
            opacity: 1,
        }, 900 );
        $('.title-txt3').animate({ 
            opacity: 1,
        }, 900 );
        $('.title-txta').animate({ 
            opacity: 1,
        }, 900 );
        $('.title-txt4').animate({ 
            opacity: 1,
        }, 900 );
        $('.flap-txt').animate({ 
            opacity: 1,
        }, 100 );

        } else {  
        
        $('.exp-circle1').animate({ 
            marginLeft: "1em",
            marginTop: "1em",
            'border': '1px solid black',
        }, 900 );
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
            opacity: 0.25,
            marginTop: "-=16vh",
            zIndex: "-1",
         }, 900 );
         $('.exp-circle3').animate({ 
            opacity: 0.25,
            marginTop: "+=26vh",
            zIndex: "-1",
         }, 900 );
         $('.exp-circle4').animate({ 
            opacity: 0.25,
            marginTop: "-=16vh",
            zIndex: "-1",
         }, 900 );
         $('.exp-circle5').animate({ 
            opacity: 0.25,
            marginTop: "+=26vh",
            zIndex: "-5",
         }, 900 );
         $('.exp-d1').animate({ 
            left: "-=160vw",
            opacity: .8,
         }, 900 ); 
         $('.wd-box').animate({ 
            opacity: 1,
            top: "-15vh",
        }, 900 );
        $('.wd-box-dot').animate({ 
            opacity: 1,
            left: "20vw",
        }, 900 );
         $('.expertise-header').animate({ 
            top: "-=12vh",
            opacity: 0,
         }, 900 ); 
         $('.title-txt').animate({ 
            opacity: 0,
        }, 900 );
        $('.title-txt2').animate({ 
            opacity: 0,
        }, 900 );
        $('.title-txt3').animate({ 
            opacity: 0,
        }, 900 );
        $('.title-txta').animate({ 
            opacity: 0,
        }, 900 );
        $('.title-txt4').animate({ 
            opacity: 0,
        }, 900 );
        $('.flap-txt').animate({ 
            opacity: 0,
        }, 300 ); }

        $(this).data("clicks", !clicks);
        });




        /*--- Click 2 ---*/


        $(".exp-click2").click(function() {
            var clicks2 = $(this).data("clicks2");
            if (clicks2) {
            $('.exp-circle2').animate({ 
                marginLeft: "0em",
                marginTop: "0em",
                zIndex: "4",
            }, 900 );
              $('.exp-circle1').animate({ 
                marginTop: "0em",
                opacity: "1",
                zIndex: "4",
             }, 900 );
             $('.exp-circle3').animate({ 
                marginTop: "0em",
                opacity: "1",
                zIndex: "4",
             }, 900 );
             $('.exp-circle4').animate({ 
                marginTop: "0em",
                opacity: "1",
                zIndex: "4",
             }, 900 );
             $('.exp-circle5').animate({ 
                marginTop: "0em",
                opacity: "1",
                zIndex: "4",
             }, 900 );
             $('.exp-d2').animate({ 
                left: "+=155vw",
                opacity: .8,
             }, 900 ); 
             $('.circle-dot-top').animate({ 
                opacity: "1",
            }, 500 );
            $('.circle-line-top').animate({ 
                opacity: "1",
              }, 500 );
             $('.expertise-title-top').animate({ 
                marginLeft: "0em",
                fontSize: ".7em",
                top: "-58%"
            }, 500 );
            $('.expertise-header').animate({ 
                top: "+=12vh",
                opacity: 1,
             }, 900 ); 
             $('.wd-line').animate({ 
                opacity: 0,
                top: "-=110vh",
            }, 1500 );
            $('.wd-line-dot').animate({ 
                opacity: 0,
                left: "-=125vw",
            }, 1200 );
            $('.wd-line-dot2').animate({ 
                opacity: 0,
                left: "-=125vw",
            }, 900 );
             $('.wp-img').animate({ 
                top: "-8em",
                opacity: 0,
             }, 900 );
             $('.title-txt').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 1,
            }, 900 );
            $('.flap-txt').animate({ 
                top: "+=100vh",
            }, 900 ); 
            
            } else {  

            $('.exp-circle2').animate({ 
                marginLeft: "-5vw",
                marginTop: "15vh",
            }, 900 );
            $('.exp-circle1').animate({ 
                opacity: 0.25,
                marginTop: "-=16vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-circle3').animate({ 
                opacity: 0.25,
                marginTop: "-=26vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-circle4').animate({ 
                opacity: 0.25,
                marginTop: "+=16vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-circle5').animate({ 
                opacity: 0.25,
                marginTop: "+=26vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-d2').animate({ 
                left: "-=155vw",
                opacity: .8,
             }, 900 );
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
              }, 50 ); 
              $('.expertise-header').animate({ 
                top: "-=12vh",
                opacity: 0,
             }, 900 ); 
             $('.wd-line').animate({ 
                opacity: 1,
                top: "+=110vh",
            }, 1500 );
            $('.wd-line-dot').animate({ 
                opacity: 1,
                left: "+=125vw",
            }, 900 );
            $('.wd-line-dot2').animate({ 
                opacity: 1,
                left: "+=125vw",
            }, 1200 );
             $('.wp-img').animate({ 
                top: "+=12vh",
                opacity: 0.8,
             }, 900 ); 
             $('.title-txt').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 0,
            }, 900 ); 
            $('.flap-txt').animate({ 
                top: "-=100vh",
            }, 900 ); }

            $(this).data("clicks2", !clicks2);
            });






              /*--- Click 3 ---*/


        $(".exp-click3").click(function() {
            var clicks3 = $(this).data("clicks3");
            if (clicks3) {
            $('.exp-circle3').animate({ 
                marginLeft: "0em",
                marginTop: "0em",
                zIndex: "4",
            }, 900 );
              $('.exp-circle1').animate({ 
                opacity: "1",
                marginTop: "+=16vh",
                zIndex: "4",
             }, 900 );
             $('.exp-circle2').animate({ 
                opacity: "1",
                marginTop: "-=26vh",
                zIndex: "4",
             }, 900 );
             $('.exp-circle4').animate({ 
                opacity: "1",
                marginTop: "-=16vh",
                zIndex: "4",
             }, 900 );
             $('.exp-circle5').animate({ 
                opacity: "1",
                marginTop: "+=26vh",
                zIndex: "4",
             }, 900 );
             $('.exp-d3').animate({ 
                left: "+=160vw",
                opacity: .8,
             }, 900 ); 
             $('.circle-dot3').animate({ 
                opacity: "1",
            }, 50 );
            $('.circle-line3').animate({ 
                opacity: "1",
              }, 50 );
            $('.expertise-header').animate({ 
                top: "+=12vh",
                opacity: 1,
             }, 900 ); 
             $('.expertise-title3').animate({ 
                fontSize: ".7em",
                marginTop: "2em"
            }, 50 );
            $('.title-txt').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 1,
            }, 900 );
            $('.flap-txt').animate({ 
                top: "+=100vh",
            }, 900 );
            
            } else {  

            $('.exp-circle3').animate({ 
                marginLeft: "-4.5em",
                marginTop: "-10vh",
                zIndex: "3",
            }, 900 );
            $('.exp-circle1').animate({ 
                opacity: 0.25,
                marginTop: "-=16vh",
                zIndex: "-5",
            }, 900 );
            $('.exp-circle2').animate({ 
                opacity: 0.25,
                marginTop: "+=26vh",
                zIndex: "-5",
            }, 900 );
            $('.exp-circle4').animate({ 
                opacity: 0.25,
                marginTop: "+=16vh",
                zIndex: "-5",
            }, 900 );
            $('.exp-circle5').animate({ 
                opacity: 0.25,
                marginTop: "-=26vh",
                zIndex: "-5",
            }, 900 );
            $('.exp-d3').animate({ 
                left: "-=160vw",
                opacity: .8,
             }, 500 );
            $('.circle-dot3').animate({ 
                opacity: "0",
            }, 50 );
            $('.circle-line3').animate({ 
                opacity: "0",
              }, 50 );
            $('.expertise-header').animate({ 
                top: "-=12vh",
                opacity: 0,
             }, 900 ); 
             $('.expertise-title3').animate({ 
                fontSize: ".8em",
                marginTop: "-1em",
              }, 50 ); 
              $('.title-txt').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 0,
            }, 900 ); 
            $('.flap-txt').animate({ 
                top: "-=100vh",
            }, 900 ); }

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
            }, 900 );
            $('.exp-circle1').animate({ 
                opacity: "1",
                marginTop: "+=16vh",
                zIndex: "1",
            }, 900 );
            $('.exp-circle2').animate({ 
                opacity: "1",
                marginTop: "-=26vh",
                zIndex: "1",
            }, 900 );
            $('.exp-circle3').animate({ 
                opacity: "1",
                marginTop: "+=16vh",
                zIndex: "1",
            }, 900 );
            $('.exp-circle5').animate({ 
                opacity: "1",
                marginTop: "+=26vh",
                zIndex: "1",
            }, 900 );
            $('.exp-d4').animate({ 
                left: "+=150vw",
                opacity: .8,
            }, 900 ); 
             $('.circle-dot-top4').animate({ 
                opacity: "1",
            }, 50 );
            $('.circle-line-top4').animate({ 
                opacity: "1",
            }, 50 );
            $('.expertise-header').animate({ 
                top: "+=12vh",
                opacity: 1,
            }, 900 );
            $('.expertise-title-top4').animate({ 
                marginLeft: "0em",
                fontSize: ".7em",
                top: "-61%",
            }, 50 );
            $('.title-txt').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 1,
            }, 900 );
            $('.flap-txt').animate({ 
                top: "+=100vh",
            }, 900 );
            
            } else {  

            $('.exp-circle4').animate({ 
                marginLeft: "-8.5em",
                marginTop: "1em",
                zIndex: "3",
            }, 900 );
            $('.exp-circle1').animate({ 
                opacity: 0.25,
                marginTop: "-=16vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-circle2').animate({ 
                opacity: 0.25,
                marginTop: "+=26vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-circle3').animate({ 
                opacity: 0.25,
                marginTop: "-=16vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-circle5').animate({ 
                opacity: 0.25,
                marginTop: "-=26vh",
                zIndex: "-1",
            }, 900 );
            $('.exp-d4').animate({ 
                left: "-=150vw",
                opacity: .8,
             }, 900 );
            $('.circle-dot-top4').animate({ 
                opacity: "0",
            }, 50 );
            $('.circle-line-top4').animate({ 
                opacity: "0",
            }, 50 );
            $('.expertise-header').animate({ 
                top: "-=12vh",
                opacity: 0,
            }, 900 );
             $('.expertise-title-top4').animate({ 
                marginLeft: "-.2em",
                fontSize: ".8em",
                top: "-50%",
              }, 50 ); 
              $('.title-txt').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 0,
            }, 900 ); 
            $('.flap-txt').animate({ 
                top: "-=100vh",
            }, 900 ); }

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
            }, 900 );
            $('.exp-circle1').animate({ 
                opacity: "1",
                marginTop: "+=16vh",
                zIndex: "1",
            }, 900 );
            $('.exp-circle2').animate({ 
                opacity: "1",
                marginTop: "-=26vh",
                zIndex: "1",
            }, 900 );
            $('.exp-circle4').animate({ 
                opacity: "1",
                marginTop: "+=26vh",
                zIndex: "1",
            }, 900 );
            $('.exp-circle3').animate({ 
                opacity: "1",
                marginTop: "+=16vh",
                zIndex: "1",
            }, 900 );
             $('.exp-d5').animate({ 
                left: "+=190vw",
                opacity: .8,
             }, 900 ); 
             $('.circle-dot5').animate({ 
                opacity: "1",
            }, 50 );
            $('.circle-line5').animate({ 
                opacity: "1",
              }, 50 );
            $('.expertise-header').animate({ 
                top: "+=12vh",
                opacity: 1,
            }, 900 );
            $('.wd-circle').animate({ 
                opacity: 0,
                top: "+80vh",
            }, 900 );
            $('.wd-circle-dot').animate({ 
                opacity: 0,
                left: "+80vw",
            }, 900 );
             $('.expertise-title5').animate({ 
                fontSize: ".7em",
                marginTop: "2em"
            }, 50 );
            $('.title-txt').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 1,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 1,
            }, 900 );
            $('.flap-txt').animate({ 
                top: "+=100vh",
            }, 900 );
            
            } else {  

            $('.exp-circle5').animate({ 
                marginLeft: "-12.5em",
                marginTop: "25.5vh",
                zIndex: "3",
            }, 900 );
            $('.exp-circle1').animate({ 
                opacity: 0.25,
                marginTop: "-=16vh",
                zIndex: "-2",
            }, 900 );
            $('.exp-circle2').animate({ 
                opacity: 0.25,
                marginTop: "+=26vh",
                zIndex: "-2",
            }, 900 );
            $('.exp-circle4').animate({ 
                opacity: 0.25,
                marginTop: "-=26vh",
                zIndex: "-2",
            }, 900 );
            $('.exp-circle3').animate({ 
                opacity: 0.25,
                marginTop: "-=16vh",
                zIndex: "-2",
            }, 900 );
            $('.exp-d5').animate({ 
                left: "-=190vw",
                opacity: .8,
             }, 900 );
            $('.circle-dot5').animate({ 
                opacity: "0",
            }, 50 );
            $('.circle-line5').animate({ 
                opacity: "0",
              }, 50 );
            $('.expertise-header').animate({ 
                top: "-=12vh",
                opacity: 0,
            }, 900 );
            $('.wd-circle').animate({ 
                opacity: 0.5,
                top: "15vh",
            }, 900 );
            $('.wd-circle-dot').animate({ 
                opacity: 0.5,
                left: "45vw",
            }, 900 );
            $('.expertise-title5').animate({ 
                fontSize: ".8em",
                marginTop: "-.5em",
            }, 50 ); 
            $('.title-txt').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt2').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt3').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txta').animate({ 
                opacity: 0,
            }, 900 );
            $('.title-txt4').animate({ 
                opacity: 0,
            }, 900 ); 
            $('.flap-txt').animate({ 
                top: "-=100vh",
            }, 900 ); }

            $(this).data("clicks5", !clicks5);
            });
