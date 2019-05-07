puts "Mario Pyramid in Ruby!"

# Prints Mario Pyramid
def mario_pyramid size

	row = "#"

	# Prints row of blocks
	for block in 0...size
		puts row
		row += "#"
	end

end

mario_pyramid 10