print("Mario Pyramid in Python!")

# Prints mario pyramid given a size
def mario_pyramid(size):

	row = "#"

	# Prints row of blocks
	for block in range(size):
		print(row)
		row+="#"

mario_pyramid(10)

# Prints mario pyramid in reverse
def mario_reverse_pyramid(size):

	row = "#"

	# Prints row of Blocks
	for block in range(size):
		# Prints spaces
		spaces = ""	
		for space in range(size - len(row)):
			spaces += " "
			
		print(spaces+row);
		row += "#"

mario_reverse_pyramid(10)