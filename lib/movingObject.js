(function () {
  var Asteroids = window.Asteroids = (window.Asteroids || {});

  var mo = Asteroids.MovingObject = function(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
  }

  mo.prototype.draw = function (ctx) {
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2, true)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  mo.prototype.move = function() {
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
  }



})()



