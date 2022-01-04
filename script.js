const hexEl = document.getElementById("hex");
const btnEl = document.querySelector(".colorBtn");
const bodyEl = document.querySelector("body");
const clipEl = document.getElementById("clipboard");

// Array of Hexadecimal digits
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// To change styles based on the hex color code
const applyHexCode = () => {
  let hexCode = generateCode();

  if (hexCode === "#000000") {
    btnEl.style.backgroundColor = "#FFF";
    btnEl.style.color = "#000";
    hexEl.style.color = "#FFF";
    clipEl.style.color = "#0000FF";
  } else if (hexCode === "#FFFFFF") {
    btnEl.style.backgroundColor = "#000";
    hexEl.style.color = "#000";
    clipEl.style.color = "#0000FF";
  } else {
    btnEl.style.backgroundColor = "#000";
    hexEl.style.color = "#FFF";
    clipEl.style.color = "#FFF";
  }

  bodyEl.style.backgroundColor = hexCode;
  hexEl.innerText = hexCode;
};

// to generate hex color code
const generateCode = () => {
  let hexCode = `#`;

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    hexCode += hex[random];
  }

  return hexCode;
};

// function to copy hex color code into clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

// Event listener on button click
btnEl.addEventListener("click", applyHexCode);

// Event listener on clipboard click
clipEl.addEventListener("click", () => {
  const textClip = hexEl.textContent;
  copyToClipboard(textClip);
});
