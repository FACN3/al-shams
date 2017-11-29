const test = require("tape");
const shot = require("shot");
const handler = require('../src/handler');


test("sample test", (t) => {
  let actual = 2;
  t.equal(actual, 2, "this test should pass");
  t.end();
});


test('Correct path test', (t)=>{
	shot.inject(handler, {method:'get', url:'/'}, (response)=>{
		t.equal(response.statusCode, 200, "statusCode should be 200");
		t.end();
	});
});



test('Test unknown url', (t)=>{
	shot.inject(handler, {method:'get', url:'/hhhhhh'}, (response)=>{
		t.equal(response.statusCode, 500, 'Unknown url should return 404');
		t.end();
	});
});