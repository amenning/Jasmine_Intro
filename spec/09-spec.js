/* The this keyword

Another way to share variables between a beforeEach, it, and afterEach 
is through the this keyword. Each spec’s beforeEach/it/afterEach has 
the this as the same empty object that is set back to empty for the 
next spec’s beforeEach/it/afterEach. 
*/

describe("A spec", function(){
	beforeEach(function(){
		this.foo = 0;
	});
	
	it("can use the 'this' to share state", function(){
		expect(this.foo).toEqual(0);
		this.bar = "test pollution?";
	});
	
	it("prevents test pollution by having an empty 'this' created for the next spec", function(){
		expect(this.foo).toEqual(0);
		expect(this.bar).toBe(undefined);
	});
});





























