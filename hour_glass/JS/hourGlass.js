console.log("Hour Glass in JS!");

const hourGlass1 = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
];




const hourGlass2 = [
	[10, -1, -1, 0, 0, 0],
	[ 0, -1,  0, 0, 0, 0],
	[-1, -1, -1, 0, 0, 0],
	[ 0,  0, -2,-4,-4, 0],
	[ 0,  0,  0,-2, 0, 0],
	[ 0,  0, -1,-2,-4, 0]
];




const hourGlass3 = [
	[-9, -9, -9,  1, 1, 1], 
	[ 0, -9,  0,  4, 3, 2],
	[-9, -9, -9,  1, 2, 3],
	[ 0,  0,  8,  6, 6, 0],
	[ 0,  0,  0, -2, 0, 0],
	[ 0,  0,  1,  2, 4, 0]
];


const findBiggestHourGlass = (hG, r=0, c=0) => {
	if (c > hG[0].length - 3 && r == hG.length - 3) return null;
	else if(c > hG[0].length - 3) return findBiggestHourGlass(hG, ++r, 0);

	const top = hG[r][c] + hG[r][c+1] + hG[r][c+2],
	   middle = hG[r+1][c+1],
	   bottom = hG[r+2][c] + hG[r+2][c+1] + hG[r+2][c+2];

	const sum = top + middle + bottom;

	return Math.max(findBiggestHourGlass(hG, r, ++c), sum);
}

console.log(findBiggestHourGlass(hourGlass1)); // 19
console.log(findBiggestHourGlass(hourGlass2)); // 4
console.log(findBiggestHourGlass(hourGlass3)); // 28


