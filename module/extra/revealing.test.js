const MyRevealingModule = require('./revealing');
test('RevealingModule', () => {
  expect(MyRevealingModule.height()).toBe(60); // true
  MyRevealingModule.setHeight(10)
  expect(MyRevealingModule.isTooTall()).toBeFalsy(); //false 10 < 100
  expect(MyRevealingModule.height()).toBe(10); // 10
});
