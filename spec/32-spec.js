/* 32. Asynchronous Support (cont.)

This syntax has changed for Jasmine 2.0. Jasmine also has support for running specs that require testing asynchronous operations.

Calls to beforeAll, afterAll, beforeEach, afterEach, and it can take an optional single argument that should be called when the async work is complete.

By default jasmine will wait for 5 seconds for an asynchronous spec to finish before causing a timeout failure. If the timeout expires before done is called, the current spec will be marked as failed and suite execution will continue as if done was called.

If specific specs should fail faster or need more time this can be adjusted by passing a timeout value to it, etc.

If the entire suite should have a different timeout, jasmine.DEFAULT_TIMEOUT_INTERVAL can be set globally, outside of any given describe.
*/
describe("32. Asynchronous specs", function(){
	var value;
	
	beforeEach(function(done){
		setTimeout(function(){
			value = 0;
			done();
		}, 1);
	});
	
	describe("long asynchronous specs", function(){
		beforeEach(function(done){
			done();
		}, 1000);
		
		it("takes a long time", function(done){
			setTimeout(function(){
				done();
			},9000);
		}, 10000);
		
		afterEach(function(done){
			done();
		}, 1000);
	});
});






























