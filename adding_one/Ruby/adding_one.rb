p "Adding One With Ruby!"

# Adds one to an array of integers
def add_one array, indx=nil
	# Initialize indx to last index in array
	if indx == nil
		indx = array.length - 1
	end

	# Exit for reccursion(Add a digit and Insert one to the beginning)
	if indx < 0
		array.insert(0,1)
		return array
	end

	# Carry the one if digit is 9
	if array[indx] >= 9
		array[indx] = 0
		indx-=1
		return add_one array, indx
	

	# Else just increment the digit
	else
		array[indx] +=1
	end

	return array

end

p add_one [1,2,3,4] #1,235

p add_one [9,9,9] #1,000

p add_one [3,7,8,0,9,9] #378,100