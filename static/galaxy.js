const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Stars
const stars = Array.from({ length: 800 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5,
  s: Math.random() * 0.3 + 0.1
}));

// Nebula clouds
const nebula = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 90 + 40,
  dx: Math.random() * 0.05 - 0.025,
  dy: Math.random() * 0.05 - 0.025,
  color: `hsla(${Math.random()*360}, 80%, 60%, 0.06)`
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Stars
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.s;
    if (s.y > canvas.height) s.y = 0;
  });

  // Nebula
  nebula.forEach(n => {
    ctx.fillStyle = n.color;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
    n.x += n.dx;
    n.y += n.dy;
  });

  requestAnimationFrame(animate);
}

animate();
