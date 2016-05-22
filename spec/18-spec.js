/* 18. Spies: and.stub

When a calling strategy is used for a spy, the original stubbing behavior can be 
returned at any time with and.stub.
*/
describe("18. A spy", function(){
	var foo, bar = null;
	
	beforeEach(function(){
		foo = {
			setBar: function(value){
				bar = value;
			}
		};
		
		spyOn(foo, 'setBar').and.callThrough();
	});
	
	it("can call through and then stub in the same spec", function(){
		foo.setBar(123);
		expect(bar).toEqual(123);
		
		foo.setBar.and.stub();
		bar = null;
		
		foo.setBar(123);
		expect(bar).toBe(null);
	});
});





























