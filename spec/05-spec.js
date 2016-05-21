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





























