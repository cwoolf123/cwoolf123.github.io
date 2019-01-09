window.onload = function () {

	var blue = '#2980b9';
	var l = Snap('#logo');
	var p = l.select('path');

	setTimeout( function() {
		// modify this one line below, and see the result !
		var logoTitle = 'Chris Woolf';
		var logoRandom = '';
		var logoTitleContainer = l.text(0, '100%', '');
		var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
		logoTitleContainer.attr({
			fontSize: 140,
			fontFamily: 'Comfortaa',
			fontWeight: '800'
		});
    
		function generateRandomTitle(i, logoRandom) {
			setTimeout( function() {
				logoTitleContainer.attr({ text: logoRandom });
			}, i*125 );
		}

		for( var i=0; i < logoTitle.length+1; i++ ) {
			logoRandom = logoTitle.substr(0, i);
			for( var j=i; j < logoTitle.length; j++ ) { 
				logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
			}
			generateRandomTitle(i, logoRandom);
			logoRandom = '';
		}

		var sizes = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100];

function shuffle(array) {
  var randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
}

var myDiv = document.getElementById('myDiv');

myDiv.addEventListener('touchstart', function(e) {
  bubbles(e);
});

myDiv.addEventListener('touchmove', function(e) {
 bubbles(e);
});

function bubbles(e) {
    e.preventDefault();
  
  var touch = e.changedTouches[0];
  var posX = touch.clientX - 25;
  var posY = touch.clientY - 25;
  
  var span = document.createElement('span');
  span.style.left = posX + 'px';
  span.style.top = posY + 'px';
  
  var bubbleSize = shuffle(sizes);
  var num = Math.floor(Math.random() * 2);
  var zIn = Math.floor(Math.random() * 11);
  
  if(bubbleSize < 30) {
    span.style.border = 1 + 'px solid white';
    if(num && zIn == 0) span.setAttribute('class', 'blur');
  }
  else if(bubbleSize < 40) {
    span.style.border = 2 + 'px solid white';
  }
  else if(bubbleSize < 50) {
    span.style.border = 3 + 'px solid white';
  }
  else if(bubbleSize < 60) {
    span.style.border = 4 + 'px solid white';
  }
  else if(bubbleSize < 70) {
    span.style.border = 5 + 'px solid white';
  }
  else if(bubbleSize < 80) {
    span.style.border = 6 + 'px solid white';
    if(num && zIn > 8) span.setAttribute('class', 'blur');
  }
  else if(bubbleSize < 90) {
    span.style.border = 7 + 'px solid white';
  }
  else if(bubbleSize <= 100) {
    span.style.border = 8 + 'px solid white';
  }
  
  if(num == 1) {
    span.style.transform = 'scaleZ(' + zIn + ')';
    span.style.zIndex = zIn;
  }
  else if (num == 0) {
    span.style.transform = 'scaleZ(-' + zIn + ')';
    span.style.zIndex = '-' + zIn;
  }
  span.style.height = bubbleSize + 'px';
  span.style.width = bubbleSize + 'px';
  myDiv.appendChild(span);
  
  var randomNum = Math.floor(Math.random() * 1000) + 50;
  var floatTo = posY - randomNum;
  
  var removeSpeed = Math.floor(Math.random() * 5000) + 500;
  
  setTimeout(function() {
    span.style.top = floatTo + 'px';
    
    setTimeout(function() {
      floating(span, floatTo);
      setTimeout(function() {
        span.remove();
      }, removeSpeed)
    }, 1700);
  }, 0);
}

function floating(span, floatTo) {
  span.style.top = (floatTo + 10) + 'px';
  setTimeout(function() {
    span.style.top = (floatTo - 10) + 'px';
    setTimeout(function() {
      span.style.top = (floatTo + 10) + 'px';
      setTimeout(function() {
        span.style.top = (floatTo - 10) + 'px';
      }, 1700);
    }, 1700);
  }, 1700);
}

	}, 500 );

	
}