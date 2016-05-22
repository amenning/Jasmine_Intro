/* 13. Spies

Jasmine has test double functions called spies. A spy can stub any function 
and tracks calls to it and all arguments. A spy only exists in the describe 
or it block in which it is defined, and will be removed after each spec. 
There are special matchers for interacting with spies. This syntax has changed 
for Jasmine 2.0

The toHaveBeenCalled matcher will return true if the spy was called.

The toHaveBeenCalledTimes matcher will pass if the spy was called the specified 
number of times.

The toHaveBeenCalledWith matcher will return true if the argument list matches 
any of the recorded calls to the spy.
*/
describe("13. A spy", function(){
	var foo, bar = null;
	
	beforeEach(function(){
		foo = {
			setBar: function(value){
				bar = value;
			}
		};
		
		spyOn(foo, 'setBar');
		
		foo.setBar(123);
		foo.setBar(456, 'another param');
	});
	
	it("tracks that the spy was called", function(){
		expect(foo.setBar).toHaveBeenCalled();
	});
	
	it("tracks that the spy was called x times", function(){
		expect(foo.setBar).toHaveBeenCalledTimes(2);
	});
	
	it("tracks all the arguments of its calls", function(){
		expect(foo.setBar).toHaveBeenCalledWith(123);
		expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
	});
	
	it("stops all execution on a function", function(){
		expect(bar).toBeNull();
	});
});





























