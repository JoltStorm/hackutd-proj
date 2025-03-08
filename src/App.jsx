import React from 'react'
import { useState } from 'react'
import Resource from './components/Resource'
import Machine from './components/Machine'


function App() {
	return (
		<>

      <div className="flex items-start gap-4 p-4">
        <div>
          <h1 className="text-3xl text-white">Resources</h1>
          <Resource resourceName="Hydrogen" resourceColor="#9D0000" amountState="10.0 L" />
          <Resource resourceName="Oxygen" resourceColor="#007B9D" amountState="10.0 L" />
          <Resource resourceName="Water" resourceColor="#13039E" amountState="10.0 L" />
        </div>
        <Machine MachineName="Water Creation Unit" MachineQuantity={25}/>
      </div>
		</>
	)
}

export default App