#include <iostream>
#include <vector>
// Adds one to an array of integers
std::vector<int> add_one(std::vector<int> v, int indx);


int main() {

	std::vector<int> v {1,2,5};
	int last_indx = v.size()-1; // Start from end of vector.
	add_one(v, last_indx);

}

std::vector<int> add_one(std::vector<int> v, int indx) {
	
	// Base code for Reccursive function (Insert a new digit, one, at the beginning of the array).
	if(indx < 0) {
		v.insert(v.begin(),1);
		return v;
	}

	// Carry the one if digit is 9
	if(v[indx] >= 9) {
		v[indx] = 0;

		return add_one(v, --indx);
	}
	// Or just increment
	else
		v[indx]++;
	return v;
}