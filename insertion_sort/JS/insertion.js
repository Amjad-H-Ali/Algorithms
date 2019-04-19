console.log("Isertion Sort With JS!");

// Sorts elements in ascending order by iterating through array and inserting numbers where they belong.
const insertionSort = (array)=> {
	// Iterate through each element starting at index 1.
	for(let i = 1, len = array.length; i < len; i ++) {
		let value = array[i];
		let indxB4 = i-1;
		// Compare current number to previous numbers in array.
		while(indxB4 >= 0) {
			// Insert current number before larger number.
			if(value < array[indxB4]){
				array[indxB4+1] = array[indxB4];
				array[indxB4] = value;
				indxB4--; 
			}
			else 
				break;
		}
	}
	return array;
}

console.log(insertionSort([14, 5, 0, 21, 0, 3, 4, 9, 1, 11, 10, 32, 2, 4]));