const UserClazz = require('./with-class');

test('Singleton with Class', () => {
  const user = UserClazz;
  user.add({ id: 1, name: 'Bruno' });
  const user2 = UserClazz;
  expect(user).toEqual(user2);
  expect(user.get(1)).toEqual({ id: 1, name: 'Bruno' });
  expect(UserClazz._data).toBeUndefined(); // undefined
});
