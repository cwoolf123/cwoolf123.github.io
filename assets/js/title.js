window.onload = function () {
  var blue = '#2980b9';
  var l = Snap('#logo');
  var p = l.select('path');
  setTimeout(function () {
    // modify this one line below, and see the result !
    var logoTitle = 'Chris Woolf';
    var logoRandom = '';
    var logoTitleContainer = l.text(0, '100%', '');
    var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    logoTitleContainer.attr({
      fontSize: 100,
      fontFamily: 'Comfortaa',
      fontWeight: '800',
      fill: '#282828'
    });

    function generateRandomTitle(i, logoRandom) {
      setTimeout(function () {
        logoTitleContainer.attr({
          text: logoRandom
        });
      }, i * 150);
    }

    for (var i = 0; i < logoTitle.length + 1; i++) {
      logoRandom = logoTitle.substr(0, i);

      for (var j = i; j < logoTitle.length; j++) {
        logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      generateRandomTitle(i, logoRandom);
      logoRandom = '';
    }
  }, 500);
};
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}