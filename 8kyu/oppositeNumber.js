// Very simple, given an integer or a floating-point number, find its opposite.
//
// 	Examples:
//
// 1: -1
// 14: -14
// -34: 34

// Solution:

function opposite(number) {
	let result;
	if (!isNaN(Math.sign(number))) {
		result = number * (-1);
	}
	return result;
}