puts "Mario Pyramid in Ruby!"

# Prints Mario Pyramid
def mario_pyramid size

	row = "#"

	# Prints rows of blocks
	for block in 0...size
		puts row
		row += "#"
	end

end

mario_pyramid 10


# Prints reverse Mario pyramid
def mario_reverse_pyramid size

	row = "#"

	# Blocks
	for block in 0...size

		spaces = ""

		# Spaces
		for space in 0...(size-row.length)

			spaces += " "
		end

		puts spaces + row

		row += "#"
	end

end


mario_reverse_pyramid 10