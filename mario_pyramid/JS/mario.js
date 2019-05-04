console.log("Mario Pyramid With JS!");



// Prints a Pyramid given a height
const makePyramid = (height) => {

	for(let row = "#"; row.length <= height; row+='#') 
		console.log(row);
}

makePyramid(10);