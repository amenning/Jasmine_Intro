/* 25. Partial Array Matching with jasmine.arrayContaining

jasmine.arrayContaining is for those times when an expectation 
only cares about some of the values in an array.
*/
describe("25. jasmine.arrayContaining", function(){
	var foo;
	
	beforeEach(function(){
		foo = [1,2,3,4];
	});
	
	it("matches arrays with some of the values", function(){
		expect(foo).toEqual(jasmine.arrayContaining([3,1]));
		expect(foo).not.toEqual(jasmine.arrayContaining([6]));
	});
	
	describe("when used with a spy", function(){
		it("is useful when comparing arguments", function(){
			var callback = jasmine.createSpy('callback');
			
			callback([1,2,3,4]);
			
			expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([4,2,3]));
			expect(callback).not.toHaveBeenCalledWith(jasmine.arrayContaining([5,2]));
		});
	});
});






























