/* 2. It’s Just Functions

Since describe and it blocks are functions, they can 
contain any executable code necessary to implement the 
test. JavaScript scoping rules apply, so variables declared 
in a describe are available to any it block inside the suite.
*/
describe("2. A suite is just a function", function(){
	var a;
	
	it("and so is a spec", function(){
		a = true;
		
		expect(a).toBe(true);
	});
});