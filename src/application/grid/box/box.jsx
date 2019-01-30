import React from 'react'
import PropTypes from 'prop-types'

import { Number } from './number'

import styles from './box.scss'

export const Box = ({ numbers }) =>
	<ul className={styles.box}>
		{numbers.map(number => <Number number={number}/>)}
	</ul>

Box.propTypes = {
	numbers: PropTypes.instanceOf('array'),
}
