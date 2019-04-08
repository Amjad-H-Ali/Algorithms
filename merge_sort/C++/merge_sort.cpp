#include <iostream>

using namespace std;

int* merge_sort(int *array);
int* merge(int *array);
void slice(int *array,int *new_array, int start, int end);
void print(int *array, int len);

int main() {
	cout << "Merge Sort C++!" << endl;

	int arr[3] = {1,2,3};

	int new_arr[2];
	slice(arr, new_arr, 1, 3);


	for(int i = 0, len = sizeof(new_arr)/sizeof(new_arr[0]); i < len; i ++)
		cout << new_arr[i];
	cout << endl;

	print(arr, 3);


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



