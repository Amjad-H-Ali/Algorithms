#include <iostream>

// Prints Mario Pyramid in given size.
void marioPyramid(int size);

int main() {
	std::cout << "Mario Pyramid in C++!" << std::endl;


	marioPyramid(10);

};

void marioPyramid(int size) {
	// Print rows
	for (int i = 0; i < size; i ++) {
		// Print columns
		for (int j = 0; j < i+1; j ++)
			std::cout << '#';
	std::cout << std::endl;
	}
};