const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");

const rgba = document.querySelector(".rgba");





btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// rgba color

// const color = document.querySelector(".color");
// const clor = document.querySelector("#test");

// clor.addEventListener("click", function () {
//   let red = Math.floor(Math.random() * 255 )+1;
//   let green = Math.floor(Math.random() * 255 )+1;
//   let bleu = Math.floor(Math.random() * 255 )+1;
//   let alpha = Math.random().toFixed(2);

//   let rgbaColor = `rgba(${red},${green},${bleu},${alpha})`;

//   rgba.textContent = rgbaColor;
//   rgba.style.color=rgbaColor;
//   rgba.style.border='1px solid #fff';
//   document.body.style.backgroundColor = rgbaColor;
// });

const color = document.querySelector(".color");
const clor = document.querySelector("#test");

clor.addEventListener("click", () => {
  let rgbaColor = "rgba(";
  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random() * 255 ) + 1;
    rgbaColor += `${value},`;
  }
  let alpha = Math.random().toFixed(1);
  rgbaColor += `${alpha})`;

  rgba.textContent = rgbaColor;
  rgba.style = `color: ${rgbaColor}; border: 1px solid #fff;`;
  document.body.style.backgroundColor = rgbaColor;
});
