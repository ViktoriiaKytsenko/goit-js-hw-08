document.addEventListener("DOMContentLoaded", () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  const body = document.body;
  const spanColor = document.querySelector(".color");
  const button = document.querySelector(".change-color");

  console.log("button:", button); // 🐞 перевірка

  if (!button || !spanColor) {
    console.error("Button або span не знайдено!");
    return;
  }

  button.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    spanColor.textContent = newColor;
    button.style.borderColor = newColor;
  });
});
