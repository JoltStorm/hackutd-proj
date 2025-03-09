import { React, useState } from 'react'

import './Resource.css'

export default function Resource({ resourceName, resourceColor, quantity, solid }) {
	return (
		<div style={{ backgroundColor: resourceColor }} className="resource-container flex justify-between">
			<span className="resource-label">{resourceName}</span>
			<span className="resource-label">{quantity} {solid ? 'g' : 'L'}</span>
		</div>
	)
}