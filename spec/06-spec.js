/* Grouping Related Specs with describe

The describe function is for grouping related specs. The string 
parameter is for naming the collection of specs, and will be 
concatenated with specs to make a spec’s full name. This aids in 
finding specs in a large suite. If you name them well, your specs 
read as full sentences in traditional BDD style.
*/
describe("A spec", function(){
	it("is just a function, so it can contain any code", function(){
		var foo = 0;
		foo += 1;
		
		expect(foo).toEqual(1);
	});
	
	it("can have more than one expectation", function(){
		var foo = 0;
		foo += 1;
		
		expect(foo).toEqual(1);
		expect(true).toEqual(true);
	});
});





























