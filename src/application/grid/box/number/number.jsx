import React from 'react'
import PropTypes from 'prop-types'

export const Number = ({ number }) =>
	<li>
		{number}
	</li>

Number.propTypes = {
	number: PropTypes.number,
}
