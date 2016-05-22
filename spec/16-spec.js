/* 16. Spies: and.returnValues

By chaining the spy with and.returnValues, all calls to the function 
will return specific values in order until it reaches the end of the 
return values list, at which point it will return undefined for all 
subsequent calls.
*/
describe("16. A spy, when configured to fake a series of return values", function(){
	var foo, bar;
	
	beforeEach(function(){
		foo = {
			setBar: function(value){
				bar = value;
			},
			getBar: function(){
				return bar;
			}
		};
		
		spyOn(foo, "getBar").and.returnValues("fetched first", "fetched second");
		
		foo.setBar(123);
	});
	
	it("tracks that the spy was called", function(){
		foo.getBar(123);
		expect(foo.getBar).toHaveBeenCalled();
	});
	
	it("should not affect other functions", function(){
		expect(bar).toEqual(123);
	});
	
	it("when called multiple times returns the requested values in order", function(){
		expect(foo.getBar()).toEqual("fetched first");
		expect(foo.getBar()).toEqual("fetched second");
		expect(foo.getBar()).toBeUndefined();
	});
});





























