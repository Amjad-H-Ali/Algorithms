print("Adding One With Python!")

def adding_one(array, indx=None):

	# Start at end of array
	if(indx == None):
		indx = len(array) - 1

	# Exit code for Reccursion (Insert 1 to begging of number)
	if(indx < 0):
		array.insert(0, 1)
		return array

	# Carry the 1 if digit equals 9
	if(array[indx] >= 9):
		array[indx] = 0
		indx-=1
		return adding_one(array, indx)

	# Else just add one
	else:
		array[indx]+=1
	return array


print(adding_one([1,2,3])) # 124

print(adding_one([9,9,9])) # 1,000

print(adding_one([6,5,9,9,0])) # 65,991