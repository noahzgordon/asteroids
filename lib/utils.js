(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {});

  var utils = Asteroids.Utils = function(){
  };

  utils.inherits = function(BaseClass, SubClass){
    var Surrogate = function() {};
    Surrogate.prototype = BaseClass.prototype;
    SubClass.prototype = new Surrogate();
  };

  utils.randomVec = function(magnitude){
    var x = Math.random() * magnitude;
    var y = Math.sqrt( (Math.pow(magnitude, 2)) - (Math.pow(x, 2)) );

    x = (Math.round(Math.random())) ? (x * -1) : x;
    y = (Math.round(Math.random())) ? (y * -1) : y;

    return [x,y];
  };
	
	utils.angleFromVelocity = function(vel) {
		if (vel[0] === 0 && vel[1] === 0) {
			return 0;
		}
		
		var offset = 0;
		if (vel[0] < 0) {
			offset = vel[1] <= 0 ? 180 : 270;
		} else if (vel[1] >= 0) { 
			offset = 360;
		}

		return Math.abs(Math.abs(Math.atan(vel[1]/vel[0])*180/Math.PI)-offset)
	}
})()




// distance between two points:
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

// vector norm(length):
// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])

