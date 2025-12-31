function go(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  const page = document.getElementById(id);
  page.classList.add('active');

  if (id === 'final') {
    playSong();
    celebrate();
  }
}

function celebrate() {
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 150);
  }
}

/* 🎵 Play song */
function playSong() {
  const song = document.getElementById('celebrationSong');
  song.currentTime = 0;
  song.play();
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '💖';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (16 + Math.random() * 16) + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
