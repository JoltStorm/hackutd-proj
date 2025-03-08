import React from 'react'
import { useState } from 'react'
import Resource from './components/Resource'
import Navbar from './components/Navbar'
import Machine from './components/Machine'


function App() {
	return (
		<div className='flex'>
			<Navbar />
			<div className='flex ml-6 mt-2'>
				<div className='m2'>
          <h1 className="3xl text-white">Resources</h1>
					<Resource resourceName="Hydrogen" resourceColor="#9D0000" quantity="10.0 L" />
					<Resource resourceName="Oxygen" resourceColor="#007B9D" quantity="10.0 L" />
					<Resource resourceName="Water" resourceColor="#13039E" quantity="10.0 L" />
				</div>
        <div className="flex ml-6">
          <Machine MachineName="Water Creation Unit" MachineQuantity={25}/>
        </div>
			</div>
		</div>
	)
}

export default App