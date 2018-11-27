const LogModule = (function(){
  return {
    // A public function.
    log: function (value) {
      console.log( ['called the ',value,'() method'].join('') );
    }
  };
})();

//Import mixins
const ChairModule = (function(LogModule){
  return {
    // A public variable.
    height: 60,
    // A public function.
    isTooTall: function () {
      LogModule.log('isTooTall');
      return this.height >= 100;
    }
  };
})(LogModule);

//import them and locally alias them as we wish.
const WheelModule = (function(log){
  let strong = ['steel', 'titanium'];
  let material;
  return {
    // Set material
    setMaterial: function( material ) {
      log.log('setMaterial');
      this.material= material;
    },
    // A public function.
    isStrong: function () {
      myPrivateMethod('isStrong');
      return strong.indexOf(this.material) >= 0;
    }
  };
})(LogModule);

const BatteryModule = (function(){
  // A private function which logs any arguments
  myPrivateMethod = function( value ) {
    console.log( ['called the ',value,'() method'].join('') );
  };
  return {
    // A public variable.
    capacity: 0,
    // A public function.
    charge: function (amount) {
      myPrivateMethod('charge');
      return (this.capacity += amount);
    }
  };
})();

const WheelChairModule = (function(){
  // A private function which logs any arguments
  myPrivateMethod = function() {
    console.log('called the setHeight() method');
  };
  return {
    setHeight: function (height) {
      myPrivateMethod(height)
      this.height = height ? height : this.height;
    }
  };
})();

module.exports = { ChairModule, WheelModule, BatteryModule, WheelChairModule, LogModule };
