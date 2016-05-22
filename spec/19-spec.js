/* 19. Other tracking properties

Every call to a spy is tracked and exposed on the calls property.


.calls.any(): returns false if the spy has not been called at all, 
and then true once at least one call happens.


.calls.count(): returns the number of times the spy was called

.calls.argsFor(index): returns the arguments passed to call number index

.calls.allArgs(): returns the arguments to all calls

.calls.all(): returns the context (the this) and arguments passed all calls

.calls.mostRecent(): returns the context (the this) and arguments 
for the most recent call

.calls.first(): returns the context (the this) and arguments for the first call

When inspecting the return from all(), mostRecent() and first(), the object 
property is set to the value of this when the spy was called.

.calls.reset(): clears all tracking for a spy
*/
describe("19. A spy", function(){
	var foo, bar = null;
	
	beforeEach(function(){
		foo = {
			setBar: function(value){
				bar = value;
			}
		};
		
		spyOn(foo, 'setBar');
	});
	
	it("tracks if it was called at all", function(){
		expect(foo.setBar.calls.any()).toEqual(false);
		
		foo.setBar();
		
		expect(foo.setBar.calls.any()).toEqual(true);
	});
	
	it("tracks the number of times it was called", function(){
		expect(foo.setBar.calls.count()).toEqual(0);
		
		foo.setBar();
		foo.setBar();
		
		expect(foo.setBar.calls.count()).toEqual(2);
	});
	
	it("tracks the arguments of each call", function(){
		foo.setBar(123);
		foo.setBar(456, "baz");
		
		expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
		expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
	});
	
	it("tracks the arguments of all calls", function(){
		foo.setBar(123);
		foo.setBar(456, "baz");
		
		expect(foo.setBar.calls.allArgs()).toEqual([[123],[456,"baz"]]);
	});
	
	it("can provide the context and arguments to all calls", function(){
		foo.setBar(123);
		
		expect(foo.setBar.calls.all()).toEqual([{object: foo, args: [123], returnValue: undefined}]);
	});
	
	it("has a shortcut to the most recent call", function(){
		foo.setBar(123);
		foo.setBar(456, "baz");
		
		expect(foo.setBar.calls.mostRecent()).toEqual({object: foo, args: [456, "baz"], returnValue: undefined});
	});
	
	it("has a shortcut to the first call", function(){
		foo.setBar(123);
		foo.setBar(456, "baz");
		
		expect(foo.setBar.calls.first()).toEqual({object: foo, args: [123], returnValue: undefined});
	});
	
	it("tracks the context", function(){
		var spy = jasmine.createSpy('spy');
		var baz = {
			fn: spy
		};
		var quux = {
			fn: spy
		};
		baz.fn(123);
		quux.fn(456);
		
		expect(spy.calls.first().object).toBe(baz);
		expect(spy.calls.mostRecent().object).toBe(quux);
	});
	
	it("can be reset", function(){
		foo.setBar(123);
		foo.setBar(456, "baz");
		
		expect(foo.setBar.calls.any()).toBe(true);
		
		foo.setBar.calls.reset();
		
		expect(foo.setBar.calls.any()).toBe(false);
	});
});






























