(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var bullet = Asteroids.Bullet = function(vel, pos, game) {
    var colors = ["red","orange","yellow","green","blue","purple"];
    Asteroids.MovingObject.call(this, {
      color: colors[Math.floor(Math.random()*colors.length)],
      radius: 5,
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