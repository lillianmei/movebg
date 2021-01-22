"use strict";

//選取元素
const bg = document.querySelector("#bg");

bg.addEventListener("mousemove", function (e) {
  let w = window.innerWidth / 2;
  let h = window.innerHeight / 2;
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let move = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;
  let move1 = `${50 - (mouseX - w) * 0.03}% ${50 - (mouseY - h) * 0.03}%`;
  let pos = `${move},${move1}`;
  bg.style.backgroundPosition = pos;
});
