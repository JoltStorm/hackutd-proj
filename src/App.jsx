import React from 'react'
import PlanetPage from './components/pages/PlanetPage'
import ShipPage from './components/pages/ShipPage'
import Navbar from './components/Navbar'


function App() {
	return (
		<div className='flex'>
			<Navbar />
			<PlanetPage />
			<ShipPage />
		</div>
	)
}

export default App