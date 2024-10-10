
//  Carousel
var myCarousel = document.querySelector('#carouselExampleDark')
var carousel = new bootstrap.Carousel(myCarousel)


//  diaporama
let currentSlide = 0;
const slides = document.querySelectorAll('.section');

// Masquer toutes les sections avant apparition
function showSlide(index) {
  
  slides.forEach((slide, i) => {
    slide.classList.remove('active');  
    slide.style.opacity = '0';        
    slide.style.display = 'none';       
  });
  
  // Afficher la section avec l'index correspondant et Petite pause pour l'effet d'apparition
  slides[index].classList.add('active');  
  slides[index].style.display = 'block';  
  setTimeout(() => {
    slides[index].style.opacity = '1';    
  }, );  
}

// Passer au slide suivant et Montre le slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;  
  showSlide(currentSlide);
}

// Démarrer le diaporama
showSlide(currentSlide);

// Changer de slide toutes les 5 secondes
setInterval(nextSlide, 9000);


