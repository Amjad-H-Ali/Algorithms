p "Hour Glass Ruby!"

 
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

def max_hour_glass hG, row=0, col=0
	if col > hG[0].length - 3 && row == hG.length - 3
		return hG[row][col-1] 
	elsif col > hG[0].length - 3
		return max_hour_glass hG, row+=1, 0
	else
		top = hG[row][col] + hG[row][col+1] + hG[row][col+2]
		mid =                hG[row+1][col+1]
		bottom = hG[row+2][col] + hG[row+2][col+1] + hG[row+2][col+2]
		sum = top + mid + bottom

		[max_hour_glass(hG, row, col+=1), sum].max
	end
end

p max_hour_glass hourGlass1
p max_hour_glass hourGlass2
p max_hour_glass hourGlass3