print("Merge Sort Python!")


def merge_sort(array):
	# If array only has 1 element, done splitting it.
	if(len(array) < 2):
		return array
	# Middle index
	mid_indx = int(len(array)/2)

	# Left side of array
	left = array[0:mid_indx]
	# Right side of array
	right = array[mid_indx:]

	return merge (merge_sort(left), merge_sort(right))

def merge(left, right):
	# Array to merge left and right into in order, along some variables
	merge_array, l_indx, r_indx, l_len, r_len = [], 0, 0, len(left), len(right)


	# Merge into above array in order
	while l_indx < l_len and r_indx < r_len:
		if(left[l_indx] < right[r_indx]):
			merge_array.append(left[l_indx])
			l_indx += 1
		else:
			merge_array.append(right[r_indx])
			r_indx += 1
	# Return merge array along remaining elements in either left or right array in one flat array
	return [*merge_array, *left[l_indx:], *right[r_indx:]]

print(merge_sort([3, 2, 0, 54, 33, 23, 3, 33, 33, 22, 9, 7, 6, 54]))




