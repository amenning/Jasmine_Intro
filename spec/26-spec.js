/* 26. String Matching with jasmine.stringMatching

jasmine.stringMatching is for when you don’t want to match a string in a larger object exactly, or match a portion of a string in a spy expectation.
*/
describe("26. jasmine.stringMatching", function(){
	it("matches as a regex", function(){
		expect({foo: 'bar'}).toEqual({foo: jasmine.stringMatching(/^bar$/)});
		expect({foo: 'foobarbaz'}).toEqual({foo: jasmine.stringMatching('bar')});
	});
	
	describe("when used with a spy", function(){
		it("is useful for comparing arguments", function(){
			var callback = jasmine.createSpy('callback');
			
			callback('foobarbaz');
			
			expect(callback).toHaveBeenCalledWith(jasmine.stringMatching('bar'));
			expect(callback).not.toHaveBeenCalledWith(jasmine.stringMatching(/^bar$/));
		});
	});
});






























