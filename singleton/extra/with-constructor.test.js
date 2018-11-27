const User = require('./with-constructor');

test('Singleton using contructor', () => {
  const user = User.getInstance([{ id: 1, name: 'Bruno' }]);
  const user2 = User.getInstance();

  user.add({ id: 2, name: 'Babi' });
  expect(user.get(1)).toEqual({ id: 1, name: 'Bruno' });
  expect(user2.get(2)).toEqual({ id: 2, name: 'Babi' });
  expect(User._data).toBeUndefined(); // undefined
});
