const ball = document.querySelector(".ball");

let positionY = 0;
let direction = 1;

function animateObject() {
  positionY += direction * 5;

  if (positionY >= window.innerHeight - 50 || positionY <= 0) {
    direction *= -1;
  }
  ball.style.top = positionY + "px";

  requestAnimationFrame(animateObject);
}
