#include <iostream>

using namespace std;

int* merge_sort(int *array);
int* merge(int *array);
void slice(int *arr,int *new_arr, int start, int end);

int main() {
	cout << "Merge Sort C++!" << endl;

	int arr[3] = {1,2,3};

	int new_arr[2];
	slice(arr, new_arr, 1, 3);


	for(int i = 0, len = sizeof(new_arr)/sizeof(new_arr[0]); i < len; i ++)
		cout << new_arr[i];
	cout << endl;

}

int* merge_sort(int *array) {
	// Array Length
	int arr_len = (sizeof(array)/sizeof(int));
	// If array only has 1 element, done splitting.
	if(arr_len < 2) {
		return array;
	}

	int mid_indx = arr_len/2;


}
int* merge(int *array) {

}
void slice(int *arr,int *new_arr, int start, int end) {
	int new_len = end - start;
	for(int i = 0; i < new_len; i ++) 
		new_arr[i] = arr[start + i];
}



