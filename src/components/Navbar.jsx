import { React, useState } from 'react'

import './Navbar.css'

export default function Navbar(){
    const [selected, setSelected] = useState(0)

    return (
        <div className = 'navbar flex'>
            <ul className = 'w-full'>
                <li 
                className={'list-element w-full mt-2 ' + (selected == 0 ? 'selected' : '')}
                onClick={() => {setSelected(0)}}
                >
                    <span className = 'm-2 text-white'>Spaceship</span>
                </li>
                <li 
                className={'list-element w-full mt-2 ' + (selected == 1 ? 'selected' : '')}
                onClick={() => { setSelected(1) }}
                >
                    <span className = 'm-2 text-white'>Planets</span>
                </li>
            </ul>
        </div>
    )
}