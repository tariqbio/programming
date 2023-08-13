// Smooth scrolling
$('a[href*="#"]').on('click', function(e) {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  e.preventDefault();
});

// Sticky header
let header = document.querySelector('header');
let sticky = header.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

// Fade in elements on scroll
let faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', function() {
  faders.forEach(fader => {
    let scrollPos = window.pageYOffset + window.innerHeight;
    let faderPos = fader.offsetTop + fader.offsetHeight / 2;
    
    if (scrollPos > faderPos) {
      fader.style.opacity = 1;
      fader.style.transform = 'translateY(0)';
    }
  });
}); 

// Theme switcher
let themeSwitcher = document.querySelector('#theme-switcher');

themeSwitcher.addEventListener('change', function() {
  document.body.className = themeSwitcher.value; 
});

// Particles background
particlesJS("particles-bg", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  }
});