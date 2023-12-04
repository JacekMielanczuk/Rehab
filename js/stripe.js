const stripe = document.querySelector(".stripe");

function animateStripe() {
  let currentPosition = 0;

  function move() {
    currentPosition += 0.2; // Zmieniłem prędkość na 0.5%
    stripe.style.transform = `translateX(${currentPosition}%)`;

    if (currentPosition >= 100) {
      currentPosition = -100;
    }

    requestAnimationFrame(move);
  }

  move();
}

animateStripe();
