describe("A spec using beforeAll and afterAll", function(){
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





























