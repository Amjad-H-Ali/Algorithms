print("Mario Pyramid in Python!")

# Prints rows given a size
def mario_pyramid(size):

	row = "#"

	for block in range(size):
		print(row)
		row+="#"

mario_pyramid(10)
