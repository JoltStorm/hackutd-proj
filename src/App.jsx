import React from 'react'
import { useState } from 'react'
import Resource from './components/Resource'


function App() {
	return (
		<>
			<Resource resourceName="Hydrogen" resourceColor="#9D0000" amountState="10.0 L" />
			<Resource resourceName="Oxygen" resourceColor="#007B9D" amountState="10.0 L" />
			<Resource resourceName="Water" resourceColor="#13039E" amountState="10.0 L" />
		</>
	)
}

export default App