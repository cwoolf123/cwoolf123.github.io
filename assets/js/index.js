
       /* var canvas = document.getElementById("inner_heading-canvas");

        var mousePos = {
            x: 0,
            y: 0
        };

        if (canvas.getContext) {
            var context = canvas.getContext("2d");
        }

        window.addEventListener('load', init, false);

        window.addEventListener('mousemove', printMouse, false);
      window.addEventListener('touchmove', printMouse, false);
        
        var timeoutID = null;
        var rafID = null;
        
        window.addEventListener("resize", function() {
            clearTimeout(timeoutID);
            window.cancelAnimationFrame(rafID);
            timeoutID = setTimeout(init, 500);
        }, false);


        // Init
        function init() {  
            var net = undefined;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            var nodesLength = Math.floor(canvas.width*canvas.height/3000);
            
            // Nodes
            net = new Net();
            net.populate(nodesLength);

            rafID = window.requestAnimationFrame(render);

            function render(e) {
                net.update();
                net.draw();
                net.connect(120);
                rafID = window.requestAnimationFrame(render);
            }
        }


        // Net
        class Net {
            constructor() {
                this.nodes = [];
                this.length = undefined;
            }

            populate(length) {
                this.length = length;
                
                for (var i = 0; i < length; i++) {
                    var xPos = Math.floor(getRandom(0, canvas.width));
                    var yPos = Math.floor(getRandom(0, canvas.height));
                    this.nodes.push(new Node(xPos, yPos));
                }
            }

            update() {
                for (var i = 0; i < this.length; i++) {
                    this.nodes[i].update();
                }
            }

            draw() {
                context.fillStyle = "#0E0E28";
                context.fillRect(0, 0, canvas.width, canvas.height);
                for (var i = 0; i < this.length; i++) {
                    this.nodes[i].draw();
                }

            }

            connect(distanceMax) {
                // Loop through all nodes
                for (var i = 0; i < this.length - 1; i++) {
                    this.nodes[i].connections = [];
                    
                    // Store connected nodes in node object
                    for (var j = 0; j < this.length - 1; j++) {
                        var a = this.nodes[j].x - this.nodes[i].x;
                        var b = this.nodes[j].y - this.nodes[i].y;
                        var c = Math.sqrt(a*a + b*b);

                        var xToMouse = this.nodes[j].x - mousePos.x;
                        var yToMouse = this.nodes[j].y - mousePos.y;
                        this.nodes[i].dToMouse = Math.floor(Math.sqrt(xToMouse*xToMouse + yToMouse*yToMouse));

                        var d = distanceMax/this.nodes[i].dToMouse*100;;

                        if (distanceMax/this.nodes[i].dToMouse*200 > distanceMax) {
                            d = distanceMax;
                        }
                        
                        if (j > i && c < d) {
                            this.nodes[i].connections.push(j);
                        }
                    }

                    // Draw line between dots
                    for (var k = 0; k < this.nodes[i].connections.length; k++) {
                        context.beginPath();
                        context.moveTo(this.nodes[i].x, this.nodes[i].y);
                        context.lineTo(this.nodes[this.nodes[i].connections[k]].x, this.nodes[this.nodes[i].connections[k]].y);
                        context.strokeStyle = "rgba(211,211,211,"+ this.nodes[i].depth/8 +")";
                        context.stroke();
                    }
                }
            }
        }


        // Node
        class Node {
            constructor(_x, _y) {
                this.x = _x;
                this.y = _y;
                this.radius = 2;
                this.depth = Math.floor(getRandom(1, 20))/10;
            }

            update() {
                var velocity = (1 - this.depth)/5;
                this.x = this.x + velocity;

                if (this.x > canvas.width || this.x < 0) {
                    this.x = 0;
                }
            }

            draw() {
                var alpha = 1 - this.depth;
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                context.fillStyle = 'rgba(211,211,211,' + alpha + ')';
                context.fill();
            }
        }


        // Helpers
        function getRandom(min, max) {
          return Math.random() * (max - min) + min;
        }

        // Mouse
        
        function getMousePos(canvas, evt) {
          var rect = canvas.getBoundingClientRect(), // abs. size of element
              scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
              scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

          return {
            x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
            y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
          }
        }

        function printMouse(e) {
            var c = canvas;
            var pos = getMousePos(c, e);
            mousePos = pos;
        }

        // Stats
        var stats = new Stats();
		stats.showPanel(0);
		document.body.appendChild(stats.dom);

		function animate() {
			stats.begin();
			stats.end();

			requestAnimationFrame(animate);
		}

        requestAnimationFrame(animate); */
        'use strict';
// Abandon all hope ye who enter here
$(document).ready(function() {
  
  var navigating = false,
      curPage = 1,
      pages = $(".section").length,
      $sections = $(".sections"),
      $paginationPage = $(".pagination .page"),
      $paginationTotal = $(".total-pages"),
      $textStuff = $(".section-heading, .additional-text");
  
  if (pages >= 10) {
    $paginationTotal.text(pages);
  } else {
    $paginationTotal.text("0" + pages);
  }
  
  /*
  Sets random transition-delay for blocks between 0.4 and 1.2 seconds on every call
  */
  function randomDelay() {
    $(".left-part").css("transition-delay", (Math.floor(Math.random() * 9) + 4)/10 + "s");
    for (var i = 1; i <= pages; i++) {
      $(".bg-part:nth-child("+i+")").css("transition-delay", (Math.floor(Math.random() * 9) + 4)/10 + "s");
    }
  }
  
  /* Async hell, with hardcoded numbers.
  On production, 410 number must be .section-heading transform transition time in miliseconds + 10, but i'm sort of tired of this demo :D
  */
  function timeoutNav(t) {
    var time = t || 2000;
    $textStuff.addClass("not-visible");
    setTimeout(function() {
      navigating = false;
      randomDelay();
    }, time);
    setTimeout(function() {
      // cached selector not working because of newely created clone when moving up more then 2 positions
      $(".section-heading, .additional-text").css({"margin-top": 0 - (parseInt($(".nav-elem.active").attr("data-page")) - 1) * 100 + "vh"}).hide();
    }, 410);
    setTimeout(function() {
      $textStuff.show();
      $textStuff.css("top");
      $textStuff.removeClass("not-visible");
    }, time + 10);
  }
  
  function magicStuff(paramPage) {
    if (paramPage) curPage = paramPage;
    navigating = true;
    var calculatedMargin = 0 - (curPage - 1) * 100;
    $(".bg-part, .left-part").css("margin-top", calculatedMargin +"vh");
    $(".scroll-down").addClass("removed");
    if (parseInt($(".nav-elem.active").attr("data-page")) === 1) {
      $(".scroll-down").removeClass("removed");
    }
  }
  
  function trickyStuff(page) {
    $(".left-part, .bg-part").css({"transition-duration": "0s", "transition-delay": "0s"});
    $(".main").css("top");
    magicStuff(page);
    $(".main").css("top");
    $(".left-part, .bg-part").css("transition-duration", "0.8s");
    randomDelay();
  }
  
  function pagination(pg) {
    $(".nav-elem").removeClass("active");
    $(".nav-" + pg).addClass("active");
    curPage = pg;
    
    if (pages >= 10) {
      $paginationPage.text(pg);
    } else {
      $paginationPage.text("0" + pg);
    }
  }
  
  function navigateUp() {
    if (curPage > 1) {
      curPage--;
      pagination(curPage);
      magicStuff();
      timeoutNav();
    }
  }
  
  function navigateDown() {
    if (curPage < pages) {
      curPage++;
      pagination(curPage);
      magicStuff();
      timeoutNav();
    }
  }
  
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!navigating) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });
  
  $(document).on("mousewheel DOMMouseScroll",
                 ".sidebar-hover, .sidebar-real",
                 function(e) {
    e.stopPropagation();
  });
  
  var sidebarScroll = 0,
      $navEl =  $(".nav-elem"),
      $sidebar = $(".sidebar-real"),
      maxScroll = $navEl.length * $navEl.height() - $(window).height();
  
  $(document).on("mousewheel DOMMouseScroll", ".sidebar-real", function(e) {
    if (navigating) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      if (!sidebarScroll) return;
      sidebarScroll += 100;
      if (sidebarScroll > 0) sidebarScroll = 0;
    } else { 
      if (Math.abs(sidebarScroll) === maxScroll) return;
      sidebarScroll -= 100;
      if (Math.abs(sidebarScroll) > maxScroll) sidebarScroll = 0 - maxScroll;
    }
    $sidebar.css("transform", "translateY("+ sidebarScroll +"px)");
  });
  
  $(document).on("click", ".nav-elem:not(.active)", function() {
    if (navigating) return;
    var activePage = parseInt($(".nav-elem.active").attr("data-page"), 10),
        futurePage = $(this).attr("data-page");
    
    pagination(futurePage);
    
    if (Math.abs(activePage - futurePage) > 2) {
      var $fakePage = $(".section-" + futurePage).clone(),
          $currentPage = $(".section-" + activePage),
          fakeNumber = 0;
      // ugly code, do not enter here
      if (activePage < futurePage) {
        // moving down
        $currentPage.after($fakePage);
        fakeNumber = activePage + 1;
        $(".main").css("top");
        randomDelay();
        magicStuff(fakeNumber);
      } else {
        // moving up (real hell)
        $currentPage.before($fakePage);
        fakeNumber = activePage - 1;
        trickyStuff(activePage + 1);
        $(".main").css("top");
        randomDelay();
        $(".main").css("top");
        magicStuff(activePage);
      }
      timeoutNav(2050);
      setTimeout(function() {
        $fakePage.remove();
        trickyStuff(futurePage);
      }, 2000);
    } else {
      magicStuff(futurePage);
      timeoutNav();
    }
  });
  
  $(window).resize(function() {
    maxScroll = $navEl.length * $navEl.height() - $(window).height();
    $sidebar.css("transform", "translateY(0)");
  });
  
});
        