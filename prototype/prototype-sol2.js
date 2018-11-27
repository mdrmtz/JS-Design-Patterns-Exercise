const StatusOfHireEnum = require('./prototype-sol1').StatusOfHireEnum;
//Using classes
class Employee2 {
  constructor(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.email = obj.email;
    this.jobTitle = obj.jobTitle;
    this.statusOfHire = obj.statusOfHire
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getEmail(){
    return this.email;
  }
  getJobTitle(){
    return this.jobTitle;
  }
  getStatusOfHire(){
    return this.statusOfHire;
  }
  setStatusOfHire(status){
    this.statusOfHire=status;
  }
  changeEmail(email){
    this.email=email;
  }
  changeJobTitle(title){
    this.jobTitle=title;
  }
  setAge(age) {
    this.age=age;
    if(age>=65) {
      this.setStatusOfHire(StatusOfHireEnum.RETIRED);
      this.changeJobTitle(StatusOfHireEnum.RETIRED);
      this.changeEmail(undefined);
    }
  }
}

class Contractor2 extends Employee2 {
  constructor(obj){
    super(obj);
    this.contractLength = obj.contractLength;
    this.boss = obj.boss;
  }
}

module.exports = {
  Employee2,
  Contractor2,
};
