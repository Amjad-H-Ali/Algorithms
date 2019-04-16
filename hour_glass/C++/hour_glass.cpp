#include <iostream>

using namespace std;



int main() {

	cout << "Hour Glass in C++!" << endl;

	const int ROW = 6,
	 		  COL = 6;

	const int hourGlass1[ROW][COL] = {
		{1, 1, 1, 0, 0, 0},
		{0, 1, 0, 0, 0, 0},
		{1, 1, 1, 0, 0, 0},
		{0, 0, 2, 4, 4, 0},
		{0, 0, 0, 2, 0, 0},
		{0, 0, 1, 2, 4, 0}
	};


	const int hourGlass2[ROW][COL] = {
		{10, -1, -1, 0, 0, 0},
		{ 0, -1,  0, 0, 0, 0},
		{-1, -1, -1, 0, 0, 0},
		{ 0,  0, -2,-4,-4, 0},
		{ 0,  0,  0,-2, 0, 0},
		{ 0,  0, -1,-2,-4, 0}
	};


	const int hourGlass3[ROW][COL] = {
		{-9, -9, -9,  1, 1, 1}, 
		{ 0, -9,  0,  4, 3, 2},
		{-9, -9, -9,  1, 2, 3},
		{ 0,  0,  8,  6, 6, 0},
		{ 0,  0,  0, -2, 0, 0},
		{ 0,  0,  1,  2, 4, 0}	
	};

}