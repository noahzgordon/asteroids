(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var game = Asteroids.Game = function() {
    this.DIM_X = 1200;
    this.DIM_Y = 800;
    this.NUM_ASTEROIDS = 8;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship([600, 400], this)
  };

  game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]);
  };

  game.prototype.addAsteroids = function () {
    for(var i = 0; i < this.NUM_ASTEROIDS; i++){
      var asteroid = new Asteroids.Asteroid(this.randomPosition(),this);
      this.asteroids.push(asteroid);
    }
  };

  game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  };

  game.prototype.randomPosition = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x,y];
  };

  game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);

    this.allObjects().forEach(function(obj){
      return obj.draw(ctx);
    });
  };

  game.prototype.moveObjects = function(){
    this.allObjects().forEach(function(obj){
      return obj.move();
    });
  };

  game.prototype.wrap = function(pos){

    if (pos[0] < -60 || pos[0] > this.DIM_X + 60 ||
        pos[1] < -60 || pos[1] > this.DIM_Y + 60) {
      return [this.DIM_X - pos[0], this.DIM_Y - pos[1]];
    } else {
      return pos;
    }
  }

  game.prototype.checkCollisions = function(){
    var game = this
    game.allObjects().forEach(function(obj1){
      game.allObjects().forEach(function(obj2){

        if(obj1 !== obj2 && obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
        };
      })
    });
  }

  game.prototype.step = function (ctx) {
    this.draw(ctx);
    this.moveObjects();
    this.checkCollisions();
  }


})()