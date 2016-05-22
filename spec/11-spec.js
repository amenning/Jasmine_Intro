/* 11. Disabling Suites

Suites can be disabled with the "xdescribe" function. 
These suites and any specs inside them are skipped 
when run and thus their results will not appear in the results. 

*/
xdescribe("11. A spec", function(){
	var foo;
	
	beforeEach(function(){
		foo = 0;
		foo += 1;
	});
	
	it("is just a function, so it can contain any code", function(){
		expect(foo).toEqual(1);
	});
});





























