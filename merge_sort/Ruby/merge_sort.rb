p "Merge Sort Ruby!"

def merge_sort array
	# If array only has 1 element then no way to split.
	if array.length < 2
		return array;
	end
	# Middle index of array
	mid_indx = (array.length/2).to_i;

	# Left side of array
	left = array[0...mid_indx]

	# RIght side of array
	right = array[mid_indx...array.length]

	# Recusively split array into two and call merge for each time
	merge(merge_sort(left), merge_sort(right))

end

def merge left, right
	# To merge ints into in sorted manner
	sorted_array = []
	l_indx = 0
	r_indx = 0
	l_len = left.length
	r_len = right.length

	# Compare ints from both halfs and push into array above
	while l_indx < l_len and r_indx < r_len
		if left[l_indx] < right[r_indx]
			sorted_array.push(left[l_indx])
			l_indx += 1
		else
			sorted_array.push(right[r_indx])
			r_indx += 1
		end
	end
	# Populate returning array with sorted array and remaining ints in either left or right
	[*sorted_array, *left[l_indx...l_len], *right[r_indx...r_len]]

end

p merge_sort([5, 3, 9, 0, 10, 7, 3, 2, 3, 3, 5, 45, 54, 43, 2])
p merge_sort([67, 45, 54, 3, 0, 0, 32, 2, 1, 4, 32, 345, 4])