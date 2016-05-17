describe("Included matchers:", function(){
	it("The 'toBe' matcher compares with ===", function(){
		var a = 12;
		var b = a;
		
		expect(a).toBe(b);
		expect(a).not.toBe(null);
	});
	
	describe("The 'toEqual' matcher",function(){
		it("works for simple literals and variables", function(){
			var a = 12;
			expect(a).toEqual(12);
		});
		
		it("should work for objects", function(){
			var foo = {
				a: 12,
				b: 34
			};
			var bar = {
				a: 12,
				b: 34
			};
			expect(foo).toEqual(bar);
		});
	});
	
	it("The 'toMatch' matcher is for regular expressions", function(){
		var message = 'foo bar baz';
		
		expect(message).toMatch(/bar/);
		expect(message).toMatch('bar');
		expect(message).not.toMatch(/quux/);
	});
	
	it("The 'toBeDefined' matcher compares against 'undefined'", function(){
		var a = {
			foo: 'foo'
		};
		
		expect(a.foo).toBeDefined();
		expect(a.bar).not.toBeDefined();
	});
	
	it("The 'toBeUndefined' matcher compares against 'undefined'", function(){
		var a = {
			foo: 'foo'
		};
		
		expect(a.foo).not.toBeUndefined();
		expect(a.bar).toBeUndefined();
	});
	
	it("The 'toBeNull' matcher compares against null", function(){
		var a = null;
		var foo = 'foo';
		
		expect(null).toBeNull();
		expect(a).toBeNull();
		expect(foo).not.toBeNull();
	});
});