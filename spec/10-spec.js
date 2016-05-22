/* 10. Nesting describe Blocks

Calls to describe can be nested, with specs defined at any level. 
This allows a suite to be composed as a tree of functions. 
Before a spec is executed, Jasmine walks down the tree executing 
each beforeEach function in order. After the spec is executed, 
Jasmine walks through the afterEach functions similarly.

*/
describe("10. A spec", function(){
	var foo;
	
	beforeEach(function(){
		foo = 0;
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
	
	describe("nested inside a second describe", function(){
		var bar;
		
		beforeEach(function(){
			bar = 1;
		});
		
		it("can reference both scopes as needed",function(){
			expect(foo).toEqual(bar);
		});
	});
});





























