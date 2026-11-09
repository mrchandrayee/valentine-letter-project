const $ = (id) => document.getElementById(id);
const intro = $('intro'), envelope = $('envelope'), loveWindow = $('loveWindow');
const question = $('question'), yesBtn = $('yesBtn'), noBtn = $('noBtn');
const success = $('success'), scene = $('scene');
let yesScale = 1, opened = false;

// Floating hearts in the paper background.
function seedHearts() {
  const layer = $('floatHearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('span');
    heart.className = 'particle';
    heart.textContent = Math.random() > .45 ? '♥' : '♡';
    heart.style.left = `${Math.random() * 96}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.fontSize = `${8 + Math.random() * 13}px`;
    heart.style.animationDuration = `${5 + Math.random() * 8}s`;
    heart.style.animationDelay = `${-Math.random() * 10}s`;
    layer.appendChild(heart);
  }
}
seedHearts();

// Draw a pixel-art cat holding a heart on the canvas.
function drawCat() {
  const canvas = $('cat'), ctx = canvas.getContext('2d');
  const pixels = [
    "....##........##....",
    "...####......####...",
    "...##############...",
    "..################..",
    "..##..####..####.##..",
    "..##..####..####.##..",
    "..################..",
    "...######..######...",
    "....############....",
    ".....##########.....",
    "......########......",
    ".......######.......",
    "........####........"
  ];
  const s = 9, ox = 0, oy = 10;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pixels.forEach((row, y) => [...row].forEach((v, x) => {
    if (v === '#') { ctx.fillStyle = '#17131b'; ctx.fillRect(ox+x*s, oy+y*s, s, s); }
  }));
  // Eyes, nose and pink cheeks
  ctx.fillStyle = '#fff8ed';
  ctx.fillRect(27, 46, 27, 27); ctx.fillRect(126, 46, 27, 27);
  ctx.fillStyle = '#17131b';
  ctx.fillRect(36, 55, 10, 17); ctx.fillRect(135, 55, 10, 17);
  ctx.fillStyle = '#f18aa8'; ctx.fillRect(78, 79, 20, 10);
  ctx.fillStyle = '#e23b4e';
  // Pixel heart held at the centre
  const heart = ["01100110","11111111","11111111","01111110","00111100","00011000"];
  heart.forEach((row,y)=>[...row].forEach((v,x)=>{if(v==='1')ctx.fillRect(54+x*9,91+y*9,9,9)}));
}
drawCat();

function openLetter() {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');
  setTimeout(() => {
    intro.classList.add('hidden');
    loveWindow.classList.remove('hidden');
    drawCat();
  }, 520);
}
envelope.addEventListener('click', openLetter);
envelope.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLetter(); });
$('openLetter').addEventListener('click', openLetter);

// The NO button escapes the pointer, and the YES button grows slightly.
function rand(max) { return Math.floor(Math.random() * Math.max(1, max)); }
function dodge() {
  const area = noBtn.parentElement.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${rand(Math.max(1, area.width - btn.width))}px`;
  noBtn.style.top = `${rand(1, Math.max(2, area.height - btn.height))}px`;
  yesScale = Math.min(1.55, yesScale + 0.07);
  yesBtn.style.transform = `scale(${yesScale})`;
}
noBtn.addEventListener('pointerenter', dodge);
noBtn.addEventListener('touchstart', e => { e.preventDefault(); dodge(); }, {passive:false});
noBtn.addEventListener('click', e => { e.preventDefault(); dodge(); });

function rainHearts() {
  for (let i = 0; i < 75; i++) {
    const heart = document.createElement('span');
    heart.className = 'particle';
    heart.textContent = ['♥','♡','💗'][rand(3)];
    heart.style.left = `${Math.random()*100}%`;
    heart.style.top = `${Math.random()*100}%`;
    heart.style.fontSize = `${12+Math.random()*20}px`;
    heart.style.animationDuration = `${2+Math.random()*3}s`;
    $('floatHearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5500);
  }
}
yesBtn.addEventListener('click', () => {
  question.textContent = 'Yippeeee! I love you!';
  loveWindow.classList.add('hidden');
  success.classList.remove('hidden');
  rainHearts();
});
$('replay').addEventListener('click', () => {
  success.classList.add('hidden');
  loveWindow.classList.add('hidden');
  intro.classList.remove('hidden');
  envelope.classList.remove('open');
  noBtn.removeAttribute('style');
  yesBtn.removeAttribute('style');
  yesScale = 1; opened = false;
  question.textContent = 'Happy 1 month, my love ♡ Still love me?';
});
