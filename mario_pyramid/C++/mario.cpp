#include <iostream>

// Prints Mario Pyramid in given size.
void marioPyramid(int size);

// Prints Mario Pyramid in reverse
void marioReversePyramid(int size);

int main() {
	std::cout << "Mario Pyramid in C++!" << std::endl;


	marioPyramid(10);
	marioReversePyramid(10);

};

// Prints Mario Pyramid in given size.
void marioPyramid(int size) {

	// Print rows
	for (int i = 0; i < size; i ++) {
		// Print columns
		for (int j = 0, n = i+1; j < n; j ++)
			std::cout << '#';

		std::cout << std::endl;
	}
};

// Prints Mario Pyramid in reverse
void marioReversePyramid(int size) {
	
	// Print rows
	for (int i = 0; i < size; i ++) {
		// Print Columns for spaces
		for (int j = 0, n = size-(i+1); j < n; j ++)
			std::cout << ' ';
		// Print Column for blocks
		for (int j = 0, n = i+1; j < n; j ++)
			std:: cout << '#';

		std::cout << std::endl;

	}
};