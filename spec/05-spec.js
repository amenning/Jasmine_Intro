/*Manually failing a spec with fail

The fail function causes a spec to fail. It can take a 
failure message or an Error object as a parameter.
*/
describe("A spec using the fail function", function(){
	var foo = function(x, callBack){
		if(x){
			callBack();
		}
	};
	
	it("should not call the callback", function(){
		foo(false, function(){
			fail("Callback has been called");
		});
	});
});





























