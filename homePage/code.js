var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(e=>{
  plusSlides(1);
}, 5000);

let ro = document.getElementById('ro');
let en = document.getElementById('en');

ro.addEventListener('click', e=>{
  localStorage.setItem('lang', 'ro');
  location.reload();

})

en.addEventListener('click', e=>{
  localStorage.setItem('lang', 'en');
  location.reload();

})

if(localStorage.getItem('lang') == 'en'){
  let innerText = document.getElementsByClassName('innerText');
  innerText[0].innerHTML = 'The most delicious burghrs';
  innerText[1].innerHTML = 'All sorts of sushi';
  innerText[2].innerHTML = 'Fresh vegetables';

  let more = document.getElementsByClassName('more');

  for(let i = 0; i < more.length; i++)
    more[i].innerHTML = 'More...';

  document.getElementsByClassName('divForText')[0].innerHTML = ` <h3>In our company work only professional couriers</h3>
  <p>Our delivery is the fastest! The most important fact is that every our courier wears a mask during delivery.</p>`;

  document.getElementsByClassName('recomandam')[0].innerHTML = 'We recommend';
  let innerProduct = document.getElementsByClassName('innerProduct');
  innerProduct[0].innerHTML = `  <div class='asImg' style='background-image: url("../common/images/california.jpg");'></div>
  <h3 class='productTitle'>California(250g)</h3>
  <h4 class='productPrice'>299 lei</h4>
  <button class='innerCumpara'>BUY</button>`;
  innerProduct[1].innerHTML = `<div class='asImg' style='background-image: url("../common/images/cheeseburger.jpg");'></div>
  <h3 class='productTitle'>Cheeseburger(310g)</h3>
  <h4 class='productPrice'>79 lei</h4>
  <button class='innerCumpara'>BUY</button>`;   
  innerProduct[2].innerHTML = `     <div class='asImg' style='background-image: url("../common/images/parmesan.jpg");'></div>
  <h3 class='productTitle'>Parmesan(500g)</h3>
  <h4 class='productPrice'>449 lei</h4>
  <button class='innerCumpara'>BUY</button>`;

}         