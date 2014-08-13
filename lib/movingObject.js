(function () {
  var Asteroids = window.Asteroids = (window.Asteroids || {});

  var mo = Asteroids.MovingObject = function(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
  };

  mo.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2, true);
    ctx.fill();
  };

  mo.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if(this.isWrappable && this.game.isOutOfBounds(this.pos)){
      this.pos = this.game.wrap(this.pos);
    } else if (!this.isWrappable && this.game.isOutOfBounds(this.pos)){
      this.game.remove(this);
    }
  };

  mo.prototype.isCollidedWith = function(otherObject){
    var xDiff = this.pos[0] - otherObject.pos[0];
    var yDiff = this.pos[1] - otherObject.pos[1];
    var distance = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2));

    return (distance < (this.radius + otherObject.radius) );
  };

  mo.prototype.isWrappable = true

  mo.prototype.collideWith = function(){

  }

})()



