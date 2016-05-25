/* 27. Custom asymmetric equality tester

When you need to check that something meets a certain criteria, without being strictly equal, you can also specify a custom asymmetric equality tester simply by providing an object that has an asymmetricMatch function.
*/
describe("27. custom asymmetry", function(){
	var tester = {
		asymmetricMatch: function(actual){
			var secondValue = actual.split(',')[1];
			return secondValue === 'bar'
		}
	};
	
	it("dives in deep", function(){
		expect("foo,bar,baz,quux").toEqual(tester);
	});
	
	describe("when used with a spy", function(){
		it("is useful for comparing arguments", function(){
			var callback = jasmine.createSpy('callback');
			
			callback('foo,bar,baz');
			
			expect(callback).toHaveBeenCalledWith(tester);
		});
	});
});






























