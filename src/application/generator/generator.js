export const randomNumber = () => Math.floor((Math.random() * 9) + 1)

export const checkNumber = (number, box, columns) =>
	!box.includes(number) && number

export const findNumber = (box, columns) => {
	let number = checkNumber(randomNumber(), box, columns)
	while (number === false) {
		number = checkNumber(randomNumber(), box, columns)
	}
	return number
}

export const getColumns = (array, index) => array.map(arr => arr[index]).filter(i => i)

export const generator = () => {
	const grid = []
	for (let i = 0; i <= 8; i++) {
		grid.push([])
		for (let j = 1; j < 10; j++) {
			const columns = getColumns(grid, j - 1)
			grid[i].push(findNumber(grid[i], columns))
			console.log(grid)
		}
	}
	return grid
}