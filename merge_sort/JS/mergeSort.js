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

	return merge(
		mergeSort(left),

		mergeSort(right)
	)

}

const merge = (left, right) => {
	// Push ints one at a time into this array in order from least to greatest.
	let sortedArray = [];

	// Initialize some variables
	let [leftIndx, rightIndx, leftLen, rightLen] = [0, 0, left.length, right.length];

	// Push in ints in a sorted manner to array
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

	// Return sorted array along with rest of left or right array, depending which one is still full,
	// All in one flat array.
	return [...sortedArray, ...left.slice(leftIndx), ...right.slice(rightIndx)];
}

console.log(mergeSort([5, 3, 9, 0, 23, 12, 43, 56, 43, 0, 7, 5, 8, 3]));
console.log(mergeSort([87, 45, 3, 2, 0, 4, 3, 2 ,73, 34, 10, 65]));