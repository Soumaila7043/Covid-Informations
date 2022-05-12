function search(form1) {
  var mot = document.form1.input.value;
  if (mot == "" || mot == " ") {
    alert("Champ vide !\nVeuillez réessayer");
  }
  else{
    alert("Le mot " +mot+ " en cours de recherche ⏳");
  }
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " actives";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
