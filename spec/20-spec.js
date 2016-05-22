/* 20. Spies: createSpy

When there is not a function to spy on, jasmine.createSpy can 
create a “bare” spy. This spy acts as any other spy – tracking 
calls, arguments, etc. But there is no implementation behind it. 
Spies are JavaScript objects and can be used as such.
*/
describe("20. A spy, when created manually", function(){
	var whatAmI;
	
	beforeEach(function(){
		whatAmI = jasmine.createSpy('whatAmI');
		
		whatAmI("I", "am", "a", "spy");
	});
	
	it("is named, which helps in error reporting", function(){
		expect(whatAmI.and.identity()).toEqual('whatAmI');
	});
	
	it("tracks that the spy was called", function(){
		expect(whatAmI).toHaveBeenCalled();
	});
	
	it("tracks its number of calls", function(){
		expect(whatAmI.calls.count()).toEqual(1);
	});
	
	it("tracks all the arguments of its calls", function(){
		expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
	});
	
	it("allows access to the most recent call", function(){
		expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
	});
});






























