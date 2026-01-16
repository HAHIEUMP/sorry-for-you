function playMusic() {
  document.getElementById("bgm").play();
}

function nextScreen(num) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("s" + num).classList.add("active");

  if (num === 6) {
    setInterval(createFallingText, 400);
  }
}

function createFallingText() {
  const texts = [
    "xin lỗi nha 💗",
    "đừng buồn nữa nha",
    "anh thương em",
    "cười lên nè 😆",
    "💗💗💗"
  ];

  const span = document.createElement("span");
  span.className = "falling-text";
  span.innerText = texts[Math.floor(Math.random() * texts.length)];

  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.animationDuration = 3 + Math.random() * 2 + "s";

  document.body.appendChild(span);

  setTimeout(() => span.remove(), 5000);
}
