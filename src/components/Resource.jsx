import { React, useState } from 'react'

import './Resource.css'

export default function Resource({ resourceName, resourceColor, quantity }) {
	return (
		<div style={{backgroundColor: resourceColor}} className="resource-container flex justify-between">
			<span className="resource-label">{resourceName}</span>
			<span className="resource-label">{quantity}</span>
		</div>
	)
}