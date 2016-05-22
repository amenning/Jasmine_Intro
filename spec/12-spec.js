/* 12. Pending Specs

Pending specs do not run, but their names will show up in the results 
as pending. 

Any spec declared with xit is marked as pending.

Any spec declared without a function body will also be marked pending 
in results.

And if you call the function pending anywhere in the spec body, no 
matter the expectations, the spec will be marked pending. A string 
passed to pending will be treated as a reason and displayed when the 
suite finishes.
*/
describe("12. Pending specs", function(){
	xit("can be declared 'xit'", function(){
		expect(true).toBe(false);
	});
	
	it("can be declared with 'it' but without a function");
	
	it("can be declared by calling 'pending' in the spec body", function(){
		expect(true).toBe(false);
		pending('this is why it is pending');
	});
});





























