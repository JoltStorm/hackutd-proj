import React from 'react'
import ShipPage from './components/pages/ShipPage'
import PlanetPage from './pages/PlanetPage'
import Navbar from './components/Navbar'
import { EarthContext, EarthProvider } from './components/context/EarthContext'

function App() {
	return (
		<div className='flex'>
			<Navbar />
			<EarthProvider>
				<PlanetPage />
			</EarthProvider>
		</div>
	)
}

export default App