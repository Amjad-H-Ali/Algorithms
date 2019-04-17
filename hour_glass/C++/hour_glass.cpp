#include <iostream>

using namespace std;

int maxHourGlass(const int (*hG)[6], int height, int width, int row=0, int col=0);

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


	cout << maxHourGlass(hourGlass1, ROW, COL) << '\n'  // 19
		<< maxHourGlass(hourGlass2, ROW, COL) << '\n'   // 4
		<< maxHourGlass(hourGlass3, ROW, COL) << endl;  // 28

}

int maxHourGlass(const int (*hG)[6], int height, int width, int row, int col) {

	// Return, when last hour glass is reached
	if(col > width - 3 && row == height - 3)
		return hG[row][col-1]; // Guaranteed non max becuase we can't return NULL and compare to int.
	// Reset col and move to next row when col has gone out of bounds.
	if(col > width - 3)
		return maxHourGlass(hG, height, width, ++row, 0);

	// Define an hour glass
	int top = hG[row][col] + hG[row][col+1] + hG[row][col+2],
	 middle = hG[row+1][col+1],
	 bottom = hG[row+2][col] + hG[row+2][col+1] + hG[row+2][col+2];

	// Sum of an hour glass
	int total = top + middle + bottom;

	// Use recursion to get other totals and compare.
	int previous_total = maxHourGlass(hG, height, width, row, ++col);

	return total > previous_total ? total : previous_total;

};





