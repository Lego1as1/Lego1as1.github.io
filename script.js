document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particles = [];
  const count = 150;
  for (let i = 0; i < count; i++){
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1 + 1,
      dx: Math.random() * 0.8 - 0.2,
      dy: Math.random() * 0.4 - 0.2,
      color: `rgba(255,255,255,${Math.random()*0.5 + 0.3})`
    });
  }
  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if(p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
      if(p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
    });
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
