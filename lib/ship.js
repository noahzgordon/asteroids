(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var ship = Asteroids.Ship = function(pos, game) {
    Asteroids.MovingObject.call(this, {
      color: "transparent",
      radius: 20,
      vel: [0, 0],
      pos: pos,
      game: game
    })
		
		this.img = new Image()
		this.img.src = "images/nyancat_1.png"
		
		this.anim_counter = 0
		
		var ship = this
    setInterval(function() {
      if (ship.anim_counter >= 6) {
      	ship.anim_counter = 0
      } else {
      	ship.anim_counter += 1
      }
			
			ship.img.src = Asteroids.Ship.IMAGES[ship.anim_counter];
    }, 200)
		
  };

  Asteroids.Utils.inherits(Asteroids.MovingObject, ship);
	
	Asteroids.Ship.IMAGES = [
		"images/nyancat_1.png",
		"images/nyancat_2.png",
		"images/nyancat_3.png",
		"images/nyancat_4.png",
		"images/nyancat_5.png",
		"images/nyancat_6.png",
		"images/nyancat_7.png"
	]

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
	
	ship.prototype.drawImage = function() {
		console.log(Asteroids.Utils.angleFromVelocity(this.vel))

		ctx.save(); 

		// move the origin
		ctx.translate(this.pos[0], this.pos[1]); 
		// rotate around this point
		ctx.rotate( -(Asteroids.Utils.angleFromVelocity(this.vel) * Math.PI / 180)); 
		ctx.drawImage(this.img, -80, -80, 160, 160); 
		ctx.restore();
	};

})()