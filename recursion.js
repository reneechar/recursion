const recursion = {};

recursion.chirp = function(number) {

	if(number === 1) {
		return 'chirp';
	}

	return 'chirp ' + this.chirp(--number);
}

module.exports = recursion;