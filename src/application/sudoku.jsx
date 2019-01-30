import React from 'react'
import ReactDOM from 'react-dom'

import { Grid } from './grid'
import { generator } from './generator/generator'

const stubNumbers = [
	[1, 5, 7, 4, 3, 9, 2, 8, 6],
	[9, 4, 2, 5, 7, 8, 1, 3, 6],
	[3, 5, 1, 7, 8, 9, 2, 4, 6],
	[8, 1, 6, 9, 3, 4, 2, 5, 7],
	[8, 5, 6, 7, 4, 3, 2, 1, 9],
	[5, 6, 8, 4, 2, 1, 7, 3, 9],
	[6, 7, 2, 5, 1, 3, 8, 9, 4],
	[2, 5, 4, 8, 3, 6, 9, 7, 1],
	[2, 9, 5, 1, 7, 8, 4, 6, 3],
]

export const Sudoku = () =>
	<div>
		<Grid grid={stubNumbers} />
	</div>

const wrapper = document.getElementById('application')
wrapper && ReactDOM.render(<Sudoku />, wrapper) // eslint-disable-line
