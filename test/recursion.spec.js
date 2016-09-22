const Chai = require('chai');
const expect = Chai.expect;
const recursion = require('../recursion');

describe ('repeat function', () => {
	it('should exist', () => {
		expect(recursion.repeatIt).to.exist
	});
	it('should be a function', () => {
		expect(recursion.repeatIt).to.be.a('function');
	});
	it('should return the phrase "repeatIt" repeated by the number passed in', () => {
		expect(recursion.repeatIt(5, 'hello')).to.equal('hello hello hello hello hello');
	});


});