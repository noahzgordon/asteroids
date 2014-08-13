(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var bullet = Asteroids.Bullet = function(vel, pos, game) {
    Asteroids.MovingObject.call(this, {
      color: "black",
      radius: 2,
      vel: vel,
      pos: pos,
      game: game
    })

  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, bullet);

  bullet.prototype.collideWith = function(otherObj) {
    if(!(otherObj instanceof Asteroids.Ship)){
      this.game.remove(otherObj);
      this.game.remove(this);
    };
  }

  bullet.prototype.isWrappable = false


})()