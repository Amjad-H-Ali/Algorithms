p "Insertion Sort Ruby!"


def insertion_sort array
	# Iterate Through array starting from index one.
	for i in 1...array.length
		value = array[i]
		# Index of element behind current position of value.
		indxB4 = i - 1

		# Compare value with every number behind it and stop when no numbers are greater than it.
		# Insert the number at that position.
		while indxB4 >= 0
			if value < array[indxB4]
				array[indxB4+1] = array[indxB4]
				array[indxB4] = value
				indxB4-=1
			else
				break
			end

		end

	end
	array
end

p insertion_sort [6,34,2,6,8,0,8,7,3,25,64,32,76,43,23,43,1,23,4]