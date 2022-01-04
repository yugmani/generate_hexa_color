const hexEl = document.getElementById("hex");
const btnEl = document.querySelector(".colorBtn");
const bodyEl = document.querySelector("body");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateCode = () => {
  let hexCode = `#`;

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    hexCode += hex[random];
  }

  bodyEl.style.backgroundColor = hexCode;
  hexEl.innerText = hexCode;
};

btnEl.addEventListener("click", generateCode);
