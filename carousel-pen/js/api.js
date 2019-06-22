// Set up our HTTP request
var xhr = new XMLHttpRequest();
var json = xhr.open('GET', 'https://www.deadgoodbooks.co.uk/wp-json/wp/v2/posts?categories=1207');
xhr.send();
// Setup our listener to process completed requests
xhr.onload = function () {
document.write('<!DOCTYPE HTML><html><head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="newstyle.css" /></head><body><section><a target="_blank" href="https://www.deadgoodbooks.co.uk/" ><img class="logo" src ="img/logo.jpg" /></a><h5>Gripping reads from Dead Good Books</h5><span class="view-more"><a href="https://www.deadgoodbooks.co.uk/category/books/" >VIEW MORE</a></span><div class="fa fa-chevron-right"></div><div class="c-wrapper container"><div class="slider wrapper items" id="slider"><ul class="carousel" id="card entry" data-target="carousel">');











	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		console.log('success!');

	var obj = JSON.parse(xhr.responseText);
	for (var i = 0, len = obj.length; i <= len; i++){
		// var img = new Image();
		// img.setAttribute( "src", obj[i].acf.cover_image.url ); 
		// img.setAttribute( "data-target", "card" ); 
		// img.setAttribute( "id", "card" ); 
		// document.getElementById('card').appendChild(img);
		document.write('<li class="card"><a href="https://www.deadgoodbooks.co.uk/?p='+obj[i].acf.cover_image.uploaded_to+'"><img src="'+obj[i].acf.cover_image.url+'"></a><span class="title">'+obj[i].acf.title+'</span></br><span class="author-title">'+obj[i].acf.author+'</span><a href="'+obj[i].acf.amazon_link+'"><button class="button"><span class="button-text">BUY THE BOOK</span></button></a></li>');	
		console.log(obj[i].acf.cover_image.uploaded_to);
	}

	} else {
		// What do when the request fails
		console.log('The request failed!');
	}
	}