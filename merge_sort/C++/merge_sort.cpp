#include <iostream>

using namespace std;

int* merge_sort(int *array, int arr_len);
int* merge(int *left, int *right, int *sorted_arr, int l_len, int r_len);
void slice(int *array,int *new_array, int start, int end);
void print(int *array, int len);

int main() {
	cout << "Merge Sort C++!" << endl;

	const int LEN = 20;

	int arr[LEN] = {56, 2, 32, 1, 0, 2, 0, 19, 67, 45, 3, 2, 6, 4, 3, 13, 5, 43, 5, 12};

	int *sorted = merge_sort(arr, LEN);

	print(sorted, LEN);

}

int* merge_sort(int *array, int arr_len) {

	// If array only has 1 element, done splitting.
	if(arr_len < 2) {
		return array;
	}
	// Middle index
	int mid_indx = arr_len/2,
	 	l_len = mid_indx,
	 	r_len = arr_len - l_len;


	// Left side of array
	int left[l_len];
	slice(array, left, 0, mid_indx);

	// Right side of array
	int right[r_len];
	slice(array, right, mid_indx, arr_len);

	int *sorted_arr = new int[arr_len];

	// Merge ints in order for each half this function creates using reccursion.
	merge(merge_sort(left, l_len), merge_sort(right, r_len), sorted_arr, l_len, r_len);

	return sorted_arr;

}
int* merge(int *left, int *right, int *sorted_arr, int l_len, int r_len) {
	// Variables and sorted_arr array where left and right arrays will merge into in order.
	int l_indx = 0,
		r_indx = 0;

	// Merge elements from left and right array into sorted_arr array in order.
	while(l_indx < l_len || r_indx < r_len) {
		// Fill sorted_arr array with remaining elements if we are done with either half.
		if(l_indx == l_len) {
			sorted_arr[l_indx + r_indx] = right[r_indx];
			r_indx ++;
		}
		else if(r_indx == r_len) {
			sorted_arr[l_indx + r_indx] = left[l_indx];
			l_indx ++;
		}
		// Fill in order when we are done with neither.
		else if(left[l_indx] < right[r_indx]) {
			sorted_arr[l_indx + r_indx] = left[l_indx];
			l_indx ++;
		}
		else {
			sorted_arr[l_indx + r_indx] = right[r_indx];
			r_indx ++;
		}
	}
	return sorted_arr;

}
void slice(int *array,int *new_array, int start, int end) {
	int new_len = end - start;
	for(int i = 0; i < new_len; i ++) 
		new_array[i] = array[start + i];
}
void print(int *array, int len) {
	cout << '[';
	for(int i = 0; i < len; i++)
		cout << ' ' << array[i];
	cout << " ]" << endl;

}



