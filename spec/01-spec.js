/* 1. Suites: describe Your Tests

A test suite begins with a call to the global Jasmine function 
describe with two parameters: a string and a function. The string 
is a name or title for a spec suite – usually what is being tested. 
The function is a block of code that implements the suite.

Specs

Specs are defined by calling the global Jasmine function it, which, 
like describe takes a string and a function. The string is the title 
of the spec and the function is the spec, or test. A spec contains 
one or more expectations that test the state of the code. An 
expectation in Jasmine is an assertion that is either true or false. 
A spec with all true expectations is a passing spec. A spec with one 
or more false expectations is a failing spec.
*/
describe("1. A suite", function() {
	it("contains spec with an expectation", function(){
		expect(true).toBe(true);
	});
});