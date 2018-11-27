const chairModule = require('./module').ChairModule;
const wheelModule = require('./module').WheelModule;
const batteryModule = require('./module').BatteryModule;
const wheelChairModule = require('./module').WheelChairModule;


test('Modules test', () => {
  chairModule.height = 10;

  expect(chairModule.isTooTall()).toBeFalsy(); //false 10 < 100
  expect(chairModule.height).toBe(10); // 200

  wheelModule.setMaterial('steel');
  expect(wheelModule.isStrong()).toBeTruthy(); //true

  batteryModule.charge(30);
  expect(batteryModule.capacity).toBe(30); // 30

  expect(wheelChairModule.height).toBeUndefined(); // undefined
  wheelChairModule.setHeight(200);
  expect(wheelChairModule.height).toBe(200); // 200
});
