$("nav a").on("click", function (event) {
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
    opacity: 0,
    top: "-20em",
    zIndex: 1,
}, 500 );
  
    event.preventDefault()
    
    const href = $(this).attr("href")
    
    window.history.pushState(null, null, href)
    
    $("nav a").removeClass("active")
    $(this).addClass("active")
    
    $.ajax({
      url: href,
      success: function (data) {
        $("section").fadeOut(250, function () {
          const newPage = $(data).filter("section").html()
          
          $("section").html(newPage)
          
          $("section").fadeIn(250)
 
        })
      }
    })
    
  })

  