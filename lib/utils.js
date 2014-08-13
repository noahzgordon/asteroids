(function(){
  var Asteroids = window.Asteroids = (window.Asteroids || {})

  var util = Asteroids.Util = function(){

  }

  util.prototype.inherits = function(BaseClass, SubClass){
    var Surrogate = function (){}
    Surrogate.prototype = BaseClass.prototype
    SubClass.prototype = new Surrogate();
  }

  util.prototype.randomVec = function(magnitude){
    var x = Math.random() * magnitude;
    var y = Math.sqrt( (Math.pow(magnitude, 2)) - (Math.pow(x, 2)) );

    x = (Math.round(Math.random())) ? (x * -1) : x;
    y = (Math.round(Math.random())) ? (y * -1) : y;

    return [x,y];
  }
})()




// distance between two points:
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

// vector norm(length):
// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])

