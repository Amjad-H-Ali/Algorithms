p "Merge Sort Ruby!"

def merge_sort array
	# If array only has 1 element then no way to split.
	if array.length < 2
		return array;
	end

	mid_indx = (array.length/2).to_i;

	left = array[0...mid_indx]

	right = array[mid_indx...array.length]

	merge_sort left

 	merge_sort right

 	p left
 	p right

end

merge_sort [1, 2, 3, 4, 5, 6]