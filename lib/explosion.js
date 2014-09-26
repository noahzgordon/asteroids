(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var explosion = Asteroids.Explosion = function(pos, game) {
    Asteroids.MovingObject.call(this, {
      color: "transparent",
      radius: 0,
      vel: [0,0],
      pos: pos,
      game: game
    })
		
    this.img = new Image();
    this.img.src = "images/explosion.png";
    
    that = this
    setTimeout(function() {
      that.game.remove(that);
    }, 200)
  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, explosion);
  
	explosion.prototype.draw = function() {
		ctx.drawImage(this.img, this.pos[0] - 70, this.pos[1] - 70, 140, 140)
	};
})()

