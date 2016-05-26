/* 28. Jasmine Clock

This syntax has changed for Jasmine 2.0. The Jasmine Clock is available for testing time dependent code.

It is installed with a call to jasmine.clock().install in a spec or suite that needs to manipulate time.

Be sure to uninstall the clock after you are done to restore the original functions.
*/
describe("28. Manually ticking the Jasmine Clock", function(){
	var timerCallback;
	
	beforeEach(function(){
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
	});
	
	afterEach(function(){
		jasmine.clock().uninstall();
	});
	
	it("causes a timeout to be called synchronously", function(){
		setTimeout(function(){
			timerCallback()
		}, 100);
		
		expect(timerCallback).not.toHaveBeenCalled();
		
		jasmine.clock().tick(101);
		
		expect(timerCallback).toHaveBeenCalled();
	});
});






























