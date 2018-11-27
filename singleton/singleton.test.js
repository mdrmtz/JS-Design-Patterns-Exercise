const Factory = require('./singleton');

test('Singleton - pdf', () => {
  const factory = new Factory();
  const pdf = factory.create('pdf');
  expect(pdf.getExtension()).toBe('pdf');
  expect(pdf.readFile('resume.pdf')).toBe(
    'This is a Pdf file named resume.pdf',
  );

});

test('Singleton - epub', () => {
  const factory = new Factory();
  const epub = factory.create('epub');
  const epub2 = factory.create('epub');

  expect(epub).toEqual(epub2);
  expect(epub.getExtension()).toBe('epub');
  expect(epub.readFile('resume.epub')).toBe('This is an Epub file named resume.epub');
});
