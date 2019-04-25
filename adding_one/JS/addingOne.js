console.log("Adding One in JS!");

// "Increments" an array
const addingOne = (array, indx)=> {
	// Start from end of array
	if(indx==null) indx = array.length - 1;

	// Base for reccursion
	// Insert 1 at the beginning of the array 1. (Adding digit)
	if(indx < 0) {
		array.unshift(1);
		return array;
	}

	// Carry the one using reccursion.
	if(array[indx] >= 9) {
		array[indx] = 0;
		return addingOne(array, --indx);
	}
	else
		array[indx]++;
	return array;
}

console.log(addingOne([1, 2, 3, 4])); // 1,235

console.log(addingOne([1, 2, 9, 9])); // 1,300

console.log(addingOne([9, 9, 9, 9])); // 10,000