(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var asteroid = Asteroids.Asteroid = function(pos, game) {
    Asteroids.MovingObject.call(this, {
      color: "transparent",
      radius: 50,
      vel: Asteroids.Utils.randomVec(1),
      pos: pos,
      game: game
    })
		
		this.img = new Image();
		this.img.src = "images/cupcake.png";
  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, asteroid);

  asteroid.prototype.collideWith = function(otherObj){
    if(otherObj instanceof Asteroids.Ship){
      otherObj.reset();
    }
  }
	
	asteroid.prototype.draw = function() {
		ctx.drawImage(this.img, this.pos[0] - 70, this.pos[1] - 70, 140, 140)
	}
})()