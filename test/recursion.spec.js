const Chai = require('chai');
const expect = Chai.expect;
const recursion = require('../recursion');

describe ('chirp function', () => {
	it('should exist', () => {
		expect(recursion.chirp).to.exist
	});
	it('should be a function', () => {
		expect(recursion.chirp).to.be.a('function');
	});
	it('should return the phrase "chirp" repeated by the number passed in', () => {
		expect(recursion.chirp(5)).to.equal('chirp chirp chirp chirp chirp');
	});


});