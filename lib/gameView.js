(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var view = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  view.prototype.start = function(){
    this.bindKeyHandlers();
    setInterval(function() {
      this.game.step(ctx);
    }, 20)
  };

  view.prototype.bindKeyHandlers = function(){
    var game = this.game;

    key('w', function() {
      game.ship.power([0, -1]);
    });

    key('a', function() {
      game.ship.power([-1, 0]);
    });

    key('s', function() {
      game.ship.power([0, 1]);
    });

    key('d', function() {
      game.ship.power([1, 0]);
    });

    key('e', function() {
      game.ship.fireBullet();
    });
  }



})()