const recursion = {};

recursion.repeatIt = function(number, repeatedThing) {

	if(number === 1) {
		return repeatedThing;
	}
	return repeatedThing + ' ' + this.repeatIt(--number, repeatedThing);
}

module.exports = recursion;