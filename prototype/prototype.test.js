const compare = require('./compare');
const Contractor = require('./prototype-sol1').Contractor;
const Employee = require('./prototype-sol1').Employee;
const Contractor2 = require('./prototype-sol2').Contractor2;
const Employee2 = require('./prototype-sol2').Employee2;
const StatusOfHireEnum = require('./prototype-sol1').StatusOfHireEnum;

test('Prototype test', () => {
  const empl = new Contractor({name:'Bruno',contractLength:2});
  const empl2 = new Contractor2({name:'Bruno',contractLength:2});

  expect(empl).toEqual(empl2);
  expect(empl.getName()).toEqual('Bruno');
  expect(compare(Employee, Employee2)).toBeTruthy(); // true
  expect(compare(Contractor, Contractor2)).toBeTruthy(); // true
  expect(compare(empl, empl2)).toBeFalsy(); //  //false on constructor

  empl.setStatusOfHire(StatusOfHireEnum.HIRED);
  expect(empl.getStatusOfHire()).toEqual(StatusOfHireEnum.HIRED);//true
  expect(empl).not.toMatchObject(empl2);

  empl2.changeEmail('a@a.com');
  expect(empl2.getEmail()).toEqual('a@a.com');

  empl.changeJobTitle('Ninja');
  expect(empl.getJobTitle()).toEqual('Ninja');

  empl2.setAge(25);
  expect(empl2.getAge()).toEqual(25);
  expect(empl2.getEmail()).not.toBeUndefined();

  empl2.setAge(68);
  expect(empl2.getEmail()).toBeUndefined();
  expect(empl2.getJobTitle()).toEqual(StatusOfHireEnum.RETIRED);
  expect(empl2.getStatusOfHire()).toEqual(StatusOfHireEnum.RETIRED);

});
