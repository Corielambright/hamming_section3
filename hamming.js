var compute;

//compute the hamming distance between two DNA strands

compute = function (s1, s2) {

	//if the strands are NOT the same length
	if(s1.length !== s2.length)
		//throw and error
	throw new Error('DNA strands must be equal length.')
	//This is the Hamming distance; loop over every character in the two strands (for loop)
	var distance ; 
	for (var i = 0; i < s1.length; i += 1) { 
		if (s1.charAt(i) !== s2.charAt(i)) {
			// then increase the distance by 1
			dist += 1;
			}
}

	

/* compute the distance */
//return the distance


};

module.exports = {
	compute: compute
};
