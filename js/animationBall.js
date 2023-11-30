const ball = document.querySelector(".ball_three");
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

let directionX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 4 + 1); //początkowa prędkość w osi x
let directionY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 4 + 1); //początkowa wartość w osi y

function animateBall() {
  const currentPosition = ball.getBoundingClientRect();
  const newPosition = {
    top: currentPosition.top + directionY,
    left: currentPosition.left + directionX,
  };

  if (
    newPosition.top <= 0 ||
    newPosition.top + currentPosition.height >= viewportHeight
  ) {
    directionY = -directionY;
  }
  if (
    newPosition.left <= 0 ||
    newPosition.left + currentPosition.width >= viewportWidth
  ) {
    directionX = -directionX;
  }
  ball.style.top = newPosition.top + "px";
  ball.style.left = newPosition.left + "px";

  requestAnimationFrame(animateBall);
}

window.addEventListener("load", () => {
  animateBall();
});
