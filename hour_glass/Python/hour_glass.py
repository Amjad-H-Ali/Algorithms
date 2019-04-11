print("Hour Glass in Python!")


hourGlass1 = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
]


hourGlass2 = [
	[10, -1, -1, 0, 0, 0],
	[ 0, -1,  0, 0, 0, 0],
	[-1, -1, -1, 0, 0, 0],
	[ 0,  0, -2,-4,-4, 0],
	[ 0,  0,  0,-2, 0, 0],
	[ 0,  0, -1,-2,-4, 0]
]


hourGlass3 = [
	[-9, -9, -9,  1, 1, 1], 
	[ 0, -9,  0,  4, 3, 2],
	[-9, -9, -9,  1, 2, 3],
	[ 0,  0,  8,  6, 6, 0],
	[ 0,  0,  0, -2, 0, 0],
	[ 0,  0,  1,  2, 4, 0]
]

def maxHourGlass(hourGlass, row=0, col=0):
	# If out of bounds
	if(col > len(hourGlass[0]) - 3 and row == len(hourGlass) - 3):
		return hourGlass[row][col-1] # Return a guaranteed non-maximum number so recurrsion can work because max(None, int) is not valid.
	# Increment row and reset column when column out of bounds
	if(col > len(hourGlass[0]) - 3):
		row+=1
		col=0 
		return maxHourGlass(hourGlass, row, col)
	# Hour Glass parts
	top    = hourGlass[row][col] + hourGlass[row][col+1] + hourGlass[row][col+2]
	middle =                       hourGlass[row+1][col+1]
	bottom = hourGlass[row+2][col] + hourGlass[row+2][col+1] + hourGlass[row+2][col+2]

	
	# Sum of hour glass.
	total  = top + middle + bottom 

	# Increment column to iterate through other hour glasses. Using recurrsion to compare max.
	col += 1
	return max(maxHourGlass(hourGlass, row, col), total)


print(maxHourGlass(hourGlass1)) # 19
print(maxHourGlass(hourGlass2)) # 4
print(maxHourGlass(hourGlass3)) # 28