/* 31. Asynchronous Support

This syntax has changed for Jasmine 2.0. Jasmine also has support for running specs that require testing asynchronous operations.

Calls to beforeAll, afterAll, beforeEach, afterEach, and it can take an optional single argument that should be called when the async work is complete.

This spec will not start until the done function is called in the call to beforeEach above. And this spec will not complete until its done is called.
*/
describe("31. Asynchronous specs", function(){
	var value;
	
	beforeEach(function(done){
		setTimeout(function(){
			value = 0;
			done();
		}, 1);
	});
	
	it("should support async execution of test preparation and expectations", function(done){
		value++;
		expect(value).toBeGreaterThan(0);
		done();
	});
});






























