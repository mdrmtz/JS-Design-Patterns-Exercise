function Factory() {
  this.create = function(type) {
    let obj;
    if (type === 'pdf') {
      obj = Pdf.getInstanceOf('pdf');
    } else if (type === 'epub') {
      obj = Epub.getInstanceOf('epub');
    }

    obj.getExtension = function() {
      return this.extension;
    };

    return obj;
  };
}

const Pdf = (function(){
  let instance;

  const Pdf = function(extension){
    this.extension = extension;
    console.log([this.extension,' file was created'].join(''));
  };

  Pdf.prototype.getExtension = function(){
    return this.extension;
  };

  Pdf.prototype.readFile = function(fileName) {
    return 'This is a Pdf file named ' + fileName;
  };

  return {
    getInstanceOf: function(extension){
      if( !instance ){
        instance = new Pdf(extension);
      }
      return instance;
    }
  }

})();

const Epub = (function(){
  let instance;

  const Epub = function(extension){
    this.extension = extension;
    console.log([this.extension,' file was created'].join(''));
  };

  Epub.prototype.getExtension = function(){
    return this.extension;
  };

  Epub.prototype.readFile = function(fileName) {
    return 'This is an Epub file named ' + fileName;
  };

  return {
    getInstanceOf: function(extension){
      if( !instance ){
        instance = new Epub(extension);
      }
      return instance;
    }
  }

})();

module.exports = Factory;
