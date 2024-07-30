let mybtn1 = document.querySelector("#btn1");
let mybtn2 = document.querySelector("#btn2");
let copydiv = document.querySelector("#copycode");
let rgb1 = "rgb(32, 144, 175)";
let rgb2 = "rgb(0, 0, 0)";
const hexvalue = () => {
  let colors = "#";
  let value = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    colors = colors + value[Math.floor(Math.random() * 16)];
  }
  return colors;
};
const maxvalue = () => {
  mybtn1.innerHTML = rgb1;
  rgb1 = hexvalue();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  copydiv.innerHTML = `background-image:linear-gradient(to right, ${rgb1},${rgb2})`;
  mybtn1.style.backgroundColor= `${rgb1}`;
  mybtn1.style.color= `${rgb2}`;
};
const maxvalue2 = () => {
  rgb2 = hexvalue();
  mybtn2.innerHTML = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  copydiv.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
  mybtn2.style.backgroundColor= `${rgb2}`;
  mybtn2.style.color= `${rgb1}`;
};
mybtn1.addEventListener("click", maxvalue);
mybtn2.addEventListener("click", maxvalue2);
copydiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copydiv.innerHTML), alert("the code is copy");
});