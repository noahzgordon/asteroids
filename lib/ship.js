(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var ship = Asteroids.Ship = function(pos, game) {
    Asteroids.MovingObject.call(this, {
      color: "pink",
      radius: 20,
      vel: [0, 0],
      pos: pos,
      game: game
    })

  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, ship);

  ship.prototype.reset = function () {
    this.pos = [(this.game.DIM_X / 2), (this.game.DIM_Y / 2)];
    this.vel = [0,0];
  };

  ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  ship.prototype.fireBullet = function () {
    var bulPos = [this.pos[0], this.pos[1]];

    if(this.vel[0] !== 0 || this.vel[1] !== 0) {
      var bul = new Asteroids.Bullet([this.vel[0] * 3,this.vel[1] * 3],
        bulPos,
        this.game);
      this.game.bullets.push(bul);
    }

  };

})()