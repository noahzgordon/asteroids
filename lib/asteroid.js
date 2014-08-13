(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var asteroid = Asteroids.Asteroid = function(pos, game) {
    Asteroids.MovingObject.call(this, {
      color: "brown",
      radius: 50,
      vel: Asteroids.Utils.randomVec(1.5),
      pos: pos,
      game: game
    })
  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, asteroid);

  asteroid.prototype.collideWith = function(otherObj){
    if(otherObj instanceof Asteroids.Ship){
      otherObj.reset();
    }
  }
})()