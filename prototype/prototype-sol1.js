const StatusOfHireEnum = Object.freeze({HIRED:'hired', LAID_OFF:'laif off', RETIRED:'retired', PROMOTED:'promoted'});

const Employee = function(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.email = obj.email;
    this.jobTitle = obj.jobTitle;
    this.statusOfHire = obj.statusOfHire
};

Employee.prototype.getName = function() {
  return this.name;
};

Employee.prototype.getAge = function() {
  return this.age;
};

Employee.prototype.getEmail = function() {
  return this.email;
};

Employee.prototype.getJobTitle = function() {
  return this.jobTitle;
};

Employee.prototype.getStatusOfHire = function() {
  return this.statusOfHire;
};

Employee.prototype.setStatusOfHire = function(status) {
  this.statusOfHire = status;
};

Employee.prototype.changeEmail = function(email) {
  this.email=email;
};

Employee.prototype.changeJobTitle = function(title) {
  this.jobTitle=title;
};

Employee.prototype.setAge = function(age) {
  this.age=age;
  if(age>=65) {
    this.setStatusOfHire(StatusOfHireEnum.RETIRED);
    this.changeJobTitle(StatusOfHireEnum.RETIRED);
    this.changeEmail(undefined);
  }
};

const Contractor = function(obj){
  Employee.call(this, obj);
  this.contractLength = obj.contractLength;
  this.boss = obj.boss;
};

const extend = function(child, parent){
  child.prototype = Object.create(parent.prototype);
  if(typeof child === 'function')
    child.prototype.constructor = child;
};

extend(Contractor, Employee);

module.exports = {
  Contractor,
  Employee,
  StatusOfHireEnum,
};
