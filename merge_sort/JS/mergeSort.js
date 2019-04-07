console.log("Merge Sort JS!");

const mergeSort = (array) => {

	// If array only has 1 element, no way to split.
	if(array.length < 2) return array;

	// Middle indext
	const midIndx = Math.floor(array.length/2);

	// Left side of the array
	const left = array.slice(0,midIndx);

	// Right side of the array
	const right = array.slice(midIndx);

	mergeSort(left);

	mergeSort(right);

	console.log(left, right);


}

mergeSort([1,2,3,4,5,6]);