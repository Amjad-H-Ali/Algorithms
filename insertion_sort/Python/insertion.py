print("Insertion Sort in Python!")

def insertion_sort(array):
	size = len(array)
	# Iterate through array starting at index one.
	for i in range(1, size):
		value = array[i]
		# Index of number behind current value
		indxB4 = i - 1

		# Compare value with every number behind it and stop when no more numbers are greater than it.
		while(indxB4 >= 0):
			# And insert value there
			if(value < array[indxB4]):
				array[indxB4+1] = array[indxB4]
				array[indxB4] = value
				indxB4 -= 1
			else: 
				break
	return array

print(insertion_sort([5,4,1,9,4,6,8,3,7,0,54,34,23,5,43,2,0]))
