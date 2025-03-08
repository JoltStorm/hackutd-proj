import { React, useState } from 'react'

import './Resource.css'

export default function Resource({ resourceName, resourceColor, amountState }) {
	const style = {
		backgroundColor: resourceColor
	}

	return (
		<>
			<div style={style} className="resource-container flex justify-between">
				<span className="resource-label">{resourceName}</span>
				<span className="resource-label">{amountState}</span>
			</div>
		</>
	)
}