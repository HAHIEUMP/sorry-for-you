function nextScreen(n) {
  document.querySelector('.screen.active').classList.remove('active');
  document.getElementById('s' + n).classList.add('active');

  if (n === 2) {
    document.getElementById('bgm').play();
  }
}

// Trái tim rơi
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (15 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
