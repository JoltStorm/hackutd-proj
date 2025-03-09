import React from 'react'
import PlanetPage from './pages/PlanetPage'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='flex'>
			<Navbar />
			<PlanetPage />
		</div>
	)
}

export default App