const deck = document.querySelector('#deck');
const predictionCard = document.querySelector('.prediction-card');
const flipCard = document.querySelector('.flip-card');
const rotate = document.querySelector('.flip-card-inner');
const prediction = document.querySelector('.card-text');
const button = document.querySelector('.btn');

const predictions = [
    `Tomorrow will be the happiest day of your life!`,
    `You will receive good news from close relatives next week`,
    `Today you will excel in your ongoing assignment, be it in your job or business`,
    `This week you will understand the importance of money and will know how unnecessary spending is just a waste`,
    `Numerous fresh possibilities will open up for you this month`,
    `Your plan to go out with your loved one will materialize very soon`,
    `You will be appreciated for your performance at work this week`,
    `Next year you will observe immense growth on the personal and professional front`,
    `New opportunities and possibilities are waiting for you on the career front next week`,
    `Next year is your year to achieve all that you have dreamt for yourself so far!`
];


deck.addEventListener('click', moveCard);

function moveCard() {
    deck.removeEventListener('click', moveCard);
    choosePrediction();
    predictionCard.style.display = 'block';
    rotate.classList.add('rotate');
    if (screen.width > 800) gsap.from(".flip-card", {x: -550, duration: 1});
    else gsap.from(".flip-card", {y: -550, duration: 1});
}

function choosePrediction() {
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)]
    prediction.textContent = randomPrediction;
}

flipCard.addEventListener('click', () => {
    rotate.classList.toggle('rotate');
});


button.addEventListener('click', () => {
    if (screen.width > 800) gsap.to(".flip-card", {x: -550, duration: 2});
    else gsap.to(".flip-card", {y: -550, duration: 2});
    setTimeout (() => {predictionCard.style.display = 'none'}, 1000);
    deck.addEventListener('click', moveCardBack);
    
    function moveCardBack() {
        deck.removeEventListener('click', moveCardBack);
        choosePrediction();
        predictionCard.style.display = 'block';
        rotate.classList.add('rotate');
        if (screen.width > 800) gsap.to(".flip-card", {x: 0, duration: 1});
        else gsap.to(".flip-card", {y: 0, duration: 1});
    }
})

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
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
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
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
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
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
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

