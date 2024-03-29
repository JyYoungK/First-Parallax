(function (main) {
  main();
})(function () {
  "use strict";

  var c = document.getElementById("c");
  var ctx = c.getContext("2d");

  var WIDTH = (c.width = window.innerWidth);
  var HEIGHT = (c.height = window.innerHeight);
  var mouse = {
    x: 0,
    y: 0,
    isMoved: false,
  };

  var Particle = function () {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.r = 8;
    this.g = 254;
    this.b = 205;
    this.a = 0.8;
    this.life = 0;
    this.radius = Math.random() * 5;
  };

  Particle.prototype = {
    constructor: Particle,
    update: function () {
      if (this.life > 0) {
        this.life -= 2;
        if (this.life < 50) {
          this.vx += Math.random() * 4 - 2;
          this.vy += Math.random() * 4 - 2;
          this.vx *= 0.9;
          this.vy *= 0.9;
          this.x += this.vx;
          this.y += this.vy;
          this.a = this.life / 50;
        }
      }
    },
    render: function (ctx) {
      ctx.save();
      ctx.fillStyle =
        "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
      ctx.translate(this.x, this.y);
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
    //Below code will make the cursor to change from x-y axis to mouse position
    reset: function (tx, ty) {
      this.life = 150;
      this.x = tx;
      this.y = ty;
      //   this.vx = Math.random() * 4 - 1;
      //   this.vy = Math.random() * 4 - 1;
      //   this.a = 1;
      //   this.g = Math.round(255 * (this.x / WIDTH));
      //   this.b = Math.round(255 * (this.y / HEIGHT));
      //   this.radius = Math.random() * 5;
    },
  };

  var particles = [];
  var particle = null;
  var particleCount = 500;
  var tx = 0;
  var ty = HEIGHT / 2;
  var idx = 0;
  var temp = {
    vx: Math.random() * 4 - 2,
    vy: Math.random() * 4 - 2,
    x: WIDTH / 2,
    y: HEIGHT / 2,
  };

  for (var i = 0; i < particleCount; i++) {
    particle = new Particle();
    particles.push(particle);
  }

  function spawn(target) {
    tx += (target.x - tx) * 0.2;
    ty += (target.y - ty) * 0.2;

    particles[idx].reset(tx, ty);
    if (++idx >= particles.length) idx = 0;
  }

  c.addEventListener("mousemove", function (e) {
    var rect = c.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.isMoved = true;

    spawn(mouse);
  });

  requestAnimationFrame(function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    if (!mouse.isMoved) {
      temp.vx += Math.random() * 4 - 2;
      temp.vy += Math.random() * 4 - 2;
      temp.vx *= 0.18;
      temp.vy *= 0.18;
      temp.x += temp.vx;
      temp.y += temp.vy;
      if (temp.x > WIDTH) {
        temp.x = WIDTH;
        temp.vx *= -1;
      }
      if (temp.x < 0) {
        temp.x = 0;
        temp.vx *= -1;
      }
      if (temp.y > HEIGHT) {
        temp.y = HEIGHT;
        temp.vy *= -1;
      }
      if (temp.y < 0) {
        temp.y = 0;
        temp.vy *= -1;
      }
      spawn(temp);
    }

    for (var i = 0; i < particleCount; i++) {
      particle = particles[i];
      particle.update();
      particle.render(ctx);
    }
  });
});
