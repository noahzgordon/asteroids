(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var asteroid = Asteroids.Asteroid = function(pos) {
    Asteroids.MovingObject.call(this, {
      color: "brown",
      radius: 50,
      vel: Asteroids.Util.randomVec(20),
      pos: pos
    })
  }

  Asteroids.Utils.inherits(Asteroids.MovingObject, asteroid);
})()