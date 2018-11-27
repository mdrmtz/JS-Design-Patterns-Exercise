const UserClazz = (function(){

  const dataKey = Symbol();

  class Store {
    constructor(){
      this[dataKey] = [];
    }

    add(item){
      this[dataKey].push(item);
    }

    get(id){
      return this[dataKey].find(d => d.id === id);
    }
  }

  const instance = new Store();
  return Object.freeze(instance);
})();

module.exports = UserClazz;
