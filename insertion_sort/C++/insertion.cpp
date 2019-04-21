#include <iostream>

using namespace std;

int *insertion_sort(int *array, int length);

int main() {

	const int LEN = 15;
	int array[LEN] = {9,7,6,8,3,4,90,89,65,45,64,32,12,0,0};
	cout << insertion_sort(array, LEN) << endl;

	return 0;
}

int *insertion_sort(int *array, int length) {

	// Iterate through array starting from index one.
	for(int i = 1; i < length; i ++) {
		int value = array[i];
		// Index of previous number of current value.
		int indxB4 = i - 1;

		// Compare value with each element before it and keep going until no more element are greater than it.
		while(indxB4 >= 0) {
			// And place value at that position.
			if(value < array[indxB4]) {
				array[indxB4+1] = array[indxB4];
				array[indxB4] = value;
				indxB4--;
			}
			else
				break;
		}
	}
	return array;
};