const MyRevealingModule = (function(){
        let privateHeight = 60;

        function privateFunction(value) {
          console.log( ['called the ',value,'() method'].join('') );
        }

        function publicSetHeight( height ) {
            privateFunction('setHeight');
            privateHeight = height;
        }

        function publicGetHeight() {
            return privateHeight;
        }

        function publicIsTooTall() {
          privateFunction('isTooTall');
          return privateHeight >= 100;
        }
        // Reveal public pointers to
        // private functions and properties
        return {
            setHeight: publicSetHeight,
            height: publicGetHeight,
            isTooTall: publicIsTooTall
        };
})();

module.exports = MyRevealingModule;
