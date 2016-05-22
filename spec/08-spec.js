/* 8. Setup and Teardown (cont.)
The beforeAll function is called only once before all the specs in describe 
are run, and the afterAll function is called after all specs finish. These 
functions can be used to speed up test suites with expensive setup and teardown.

However, be careful using beforeAll and afterAll! Since they are not reset 
between specs, it is easy to accidentally leak state between your specs so 
that they erroneously pass or fail. 
*/
describe("8. A spec using beforeAll and afterAll", function(){
	var foo;
	
	beforeAll(function(){
		foo = 1;
	});
	
	afterAll(function(){
		foo = 0;
	});
	
	it("sets the initial value of foo before specs run", function(){
		expect(foo).toEqual(1);
		foo += 1;
	});
	
	it("does not reset foo between specs", function(){
		expect(foo).toEqual(2);
	});
});





























