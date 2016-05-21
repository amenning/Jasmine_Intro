/* Setup and Teardown

To help a test suite DRY up any duplicated setup and teardown code, 
Jasmine provides the global beforeEach, afterEach, beforeAll, and afterAll functions.

As the name implies, the beforeEach function is called once before 
each spec in the describe in which it is called, and the afterEach 
function is called once after each spec.

Here is the same set of specs written a little differently. The variable 
under test is defined at the top-level scope — the describe block — and 
initialization code is moved into a beforeEach function. The afterEach 
function resets the variable before continuing.
*/
describe("A spec using beforeEach and afterEach", function(){
	var foo = 0;
	
	beforeEach(function(){
		foo += 1;
	});
	
	afterEach(function(){
		foo = 0;
	});
	
	it("is just a function, so it can contain any code", function(){
		expect(foo).toEqual(1);
	});
	
	it("can have more than one expectation", function(){
		expect(foo).toEqual(1);
		expect(true).toEqual(true);
	});
});





























