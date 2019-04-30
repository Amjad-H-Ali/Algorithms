#include <iostream>
#include <vector>

// Adds one to an array of integers.
std::vector<int> add_one(std::vector<int> v, int indx);

// Utitlity Function to print contents of vector.
void print(std::vector<int> v);

int main() {

	std::vector<int> v {1,2,5}, v2{9,9,9,9}, v3{1,0,3,4,9,9};
	
	print(add_one(v, v.size()-1)); // 126

	print(add_one(v2, v2.size()-1)); // 10,000

	print(add_one(v3, v3.size()-1)); // 103,500

}

// Adds one to an array of integers.
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

// Utitlity Function to print contents of vector.
void print(std::vector<int> v) {
	for(auto i : v)
		std::cout << i << ' ';
	std::cout<< std::endl;

};