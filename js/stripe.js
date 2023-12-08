const stripe = document.querySelector(".stripe");

function animateStripe() {
  let currentPosition = 0;

  function move() {
    currentPosition += 0.2; // Zmieniłem prędkość
    stripe.style.transform = `translateX(${currentPosition}%)`;

    if (currentPosition >= 100) {
      currentPosition = -100;
    }

    requestAnimationFrame(move);
  }

  move();
}

animateStripe();
