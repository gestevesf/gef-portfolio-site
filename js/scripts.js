console.log ("Hello! Welcome to my Portfolio Site. In here you can see what I've been working on and who am I. If you have any question, please reach out to me through any of the contact buttons in the end of the page. Thank you.");

var age = 29;
var name = 'Gonçalo';
console.log (name);
console.log (age);











var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

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
  x[slideIndex[no]-1].style.display = "block";
}
