
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// Works on desktop (hover)
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// Works on mobile (touch)
moveRandom.addEventListener("touchstart", function (e) {
  e.preventDefault(); // Prevent default touch behavior
  moveRandomEl(e.target);
});
