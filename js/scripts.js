console.log ("Hello! Welcome to my Portfolio Site. In here you can see what I've been working on and who am I. If you have any question, please reach out to me through any of the contact buttons in the end of the page. Thank you.");

var age = 29;
var name = 'Gonçalo';
console.log (name);
console.log (age);




//function menuToggle() {
//  var x = document.getElementById('myNavtoggle');
//  if (x.className === 'navtoggle') {
//    x.className += ' responsive';
//  } else {
//    x.className = 'navtoggle';
//  }
//}




jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');

		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});




$(window).scroll(function(){
  if($(window).scrollTop() >= 100){
    $("header").addClass("white");
  }
  else{
    $("header").removeClass("white");
  }
});




//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




var slideIndex = [1,1,1,1];
var slideId = ["homepage", "products", "stylists", "stylists-bio"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "flex";
}
