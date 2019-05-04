console.log("Mario Pyramid With JS!");



// Prints a Pyramid given a size
const makePyramid = (size) => {

	// Rows
	for(let row = "#"; row.length <= size; row+='#') 
		console.log(row);
}

makePyramid(10);



//Prints Reverse Pyramid
const makeReversePyramid = (size) => {

	// Rows
	for(let row = "#", spaces; row.length <= size; row+='#') {
		// Spaces
		for(spaces = ""; spaces.length <= (size - row.length); spaces+=' ');
			
		console.log(spaces + row);
	}
}


makeReversePyramid(10);