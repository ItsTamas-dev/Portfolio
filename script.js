/* ---- device ---- */
const isMobile = window.matchMedia("(max-width: 768px)");

if (isMobile) {
  console.log("Mobil eszközön fut a weboldal.");
} else {
  console.log("Asztali eszközön fut a weboldal.");
}

//animáció
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("act");
      } else {
        reveals[i].classList.remove("act");
      }
    }

  }

  window.addEventListener("scroll", reveal);

  if(!isMobile){
    // Egész kötgetés
  let currentPage = 0;
  const pages = document.querySelectorAll('.page');
  const scrollButton = document.getElementById('scrollButton');
  const myImage = document.getElementById('scrollImg');
  window.addEventListener('wheel', (event) => {
      if (event.deltaY > 0 && currentPage < pages.length - 1) {
        currentPage++;
        if(currentPage == 4){
          myImage.classList = "fas fa-arrow-circle-up";
        }else{
          myImage.classList = "fas fa-arrow-circle-down";
        }
      } else if (event.deltaY < 0 && currentPage > 0) {
        currentPage--;
        if(currentPage == 4){
          myImage.classList = "fas fa-arrow-circle-up";
        }else{
          myImage.classList = "fas fa-arrow-circle-down";
        }
      }
      pages[currentPage].scrollIntoView({ behavior: 'smooth' });
  });
  
  scrollButton.addEventListener('click', () => {
      if(currentPage == 3){
          myImage.classList = "fas fa-arrow-circle-up";
          currentPage++;
      }else{
          if(currentPage == 4){
              currentPage = 0;
          }else{
              currentPage++;
          }
          myImage.classList = "fas fa-arrow-circle-down";
      }
    pages[currentPage].scrollIntoView({ behavior: 'smooth' });
  });

  }

//nav toggle
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//resume toggle
function toggleAbout(osztaly){
    const elements = document.querySelectorAll('.res');

    console.log(osztaly);
    elements.forEach(element => {
        element.classList.remove('show');
    });
    let oszt = "."+osztaly;
    document.querySelector(oszt).classList.add('show');

    const btns = document.querySelectorAll('.res-btn');

    btns.forEach(element => {
        element.classList.remove('active');
    });

    document.getElementById(osztaly).classList.add("active");
}

//gmail megnyitása
function openGmail(email) {
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`);
}

//particle
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 75,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#F2613F"
    },
    "opacity": {
      "value": 0.2,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 3,
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
      "color": "#F2613F",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
});
