import React from 'react'
import PropTypes from 'prop-types'

import { Box } from './box'

import styles from './grid.scss'

export const Grid = ({ grid }) =>
	<ul className={styles.grid}>
		{grid.map(numbers => <Box numbers={numbers} />)}
	</ul>

Grid.propTypes = {
	grid: PropTypes.instanceOf(Array),
}
