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

}

const merge = (left, right) => {
	// Push ints one at a time into this array in order from least to greatest.
	let sortedArray = [];

	let [leftIndx, rightIndx, leftLen, rightLen] = [0, 0, left.length, right.length];

	while(leftIndx < leftLen && rightIndx < rightLen) {
		if(left[leftIndx] < right[rightIndx]) {
			sortedArray.push(left[leftIndx]);
			leftIndx ++;
		}
		else {
			sortedArray.push(right[rightIndx]);
			rightIndx ++;
		}
	}

	return [...sortedArray, ...left.slice(leftIndx), ...right.slice(rightIndx)];
}

console.log(merge([7, 9, 3], [6, 8, 5]));