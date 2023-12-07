const switchText = document.querySelector(".switch");

function switchWord() {
  // tablica z wyrazami
  const texts = [
    "ŻÓŁTY",
    "ZIELONY",
    "NIEBIESKI",
    "POMARAŃCZOWY",
    "RÓŻOWY",
    "FIOLETOWY",
    "GRANATOWY",
    "BRĄZOWY",
    "ZŁOTY",
    "CZERWONY",
    "BIAŁY",
    "OLIWKOWY",
    "SZARY",
    "TRUSKAWKOWY",
    "JAGODOWY",
    "LAWENDOWY",
    "SELEDYNOWY",
    "SREBRNY",
    "MIODOWY",
    "MALINOWY",
  ];
  // usunięcie poprzednich elementów
  const previousTextElements = document.querySelectorAll(".random-text");
  previousTextElements.forEach((element) => element.remove());

  // losowy indeks z tablicy
  const randomIndex = Math.floor(Math.random() * texts.length);

  // losowy kolor

  const randomColor = getRandomColor();

  // losowe położenie na ekranie
  const elementWidth = 200;
  const elementHeight = 40;
  let randomX = Math.random() * (window.innerWidth - elementWidth);
  let randomY = Math.random() * (window.innerHeight - elementHeight);

  // Tworzenie nowego elementu div

  const newTextElement = document.createElement("div");
  newTextElement.textContent = texts[randomIndex];
  newTextElement.className = "random-text";
  newTextElement.style.fontSize = 52 + "px";
  newTextElement.style.position = "absolute";
  newTextElement.style.color = randomColor;
  newTextElement.style.left = randomX + "px";
  newTextElement.style.top = randomY + "px";

  document.body.appendChild(newTextElement);
}
function getRandomColor() {
  const blackListedColors = ["#000000"];
  let randomColor;
  do {
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  } while (blackListedColors.includes(randomColor));
  return randomColor;
}

switchText.addEventListener("click", switchWord);
