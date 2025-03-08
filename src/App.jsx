import React from 'react'
import { useState } from 'react'
import Resource from './components/Resource'
import Navbar from './components/Navbar'


function App() {
	return (
		<div className='flex'>
			<Navbar />
			<div className='flex ml-6 mt-2'>
				<div className='m2'>
					<Resource resourceName="Hydrogen" resourceColor="#9D0000" quantity="10.0 L" />
					<Resource resourceName="Oxygen" resourceColor="#007B9D" quantity="10.0 L" />
					<Resource resourceName="Water" resourceColor="#13039E" quantity="10.0 L" />
				</div>
			</div>
		</div>
	)
}

export default App