/* 30. Jasmine Clock (cont.)

Mocking the Date

The Jasmine Clock can also be used to mock the current date.

If you do not provide a base time to mockDate it will use the current date.
*/
describe("29. Manually ticking the Jasmine Clock", function(){
	var timerCallback;
	
	beforeEach(function(){
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
	});
	
	afterEach(function(){
		jasmine.clock().uninstall();
	});
	
	describe("Mocking the Date object", function(){
		it("mocks the Date object and sets it to a given time", function(){
			var baseTime = new Date(2013, 9, 23);
			
			jasmine.clock().mockDate(baseTime);
			
			jasmine.clock().tick(50);
			expect(new Date().getTime()).toEqual(baseTime.getTime()+50);
		});
	});
});






























