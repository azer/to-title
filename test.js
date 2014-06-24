var test = require("prova");
var title = require('./');

test('shouldnt touch title case', function (t) {
  t.plan(1);
  t.equal('A Title: Case of String', title('A Title: Case of String'));
});

test('should convert space case', function (t) {
  t.plan(1);
  t.equal('A Space Case of String', title('a space case of string'));
});

test('should convert camel case', function (t) {
  t.plan(1);
  t.equal('A Camel Case of String', title('aCamelCaseOfString'));
});

test('should convert snake case', function (t) {
  t.plan(1);
  t.equal('A Snake Case of String', title('a_snake_case_of_string'));
});

test('should convert dot case', function (t) {
  t.plan(1);
  t.equal('A Dot Case of String', title('a.dot.case.of.string'));
});

test('should convert constant case', function (t) {
  t.plan(1);
  t.equal('A Constant Case of String', title('A_CONSTANT_CASE_OF_STRING'));
});

test('should convert "the lord of the flies"', function (t) {
  t.plan(1);
  t.equal('The Lord of the Flies', title('the lord of the flies'));
});

test('should convert "a tale of two cities"', function (t) {
  t.plan(1);
  t.equal('A Tale of Two Cities', title('a tale of two cities'));
});

test('should convert "the lion, the witch and the wardrobe"', function (t) {
  t.plan(1);
  t.equal('The Lion, the Witch and the Wardrobe', title('the lion, the witch and the wardrobe'));
});

test('should convert "she: a history of adventure"', function (t) {
  t.plan(1);
  t.equal('She: A History of Adventure', title('she: a history of adventure'));
});
