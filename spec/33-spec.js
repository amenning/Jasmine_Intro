/* 32. Asynchronous Support (cont.)

This syntax has changed for Jasmine 2.0. Jasmine also has support for running specs that require testing asynchronous operations.

Calls to beforeAll, afterAll, beforeEach, afterEach, and it can take an optional single argument that should be called when the async work is complete.

The done.fail function fails the spec and indicates that it has completed.
*/
describe("33. Asynchronous specs", function(){
	var value;
	
	beforeEach(function(done){
		setTimeout(function(){
			value = 0;
			done();
		}, 1);
	});
	
	describe("A spec using done.fail", function(){
		var foo = function(x, callBack1, callback2){
			if (x){
				setTimeout(callBack1, 0);
			} else {
				setTimeout(callback2, 0);
			}
		};
		
		it("should not call the second callback", function(done){
			foo(true, 
				done,
				function(){
					done.fail("Second callback has been called");
				}
			);
		});
	});
});






























