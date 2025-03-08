import { React, useState } from 'react'

import './Navbar.css'

export default function Navbar(){
    const [selected, setSelected] = useState('spaceship')

    function handleSelect(item){
        setSelected(item)
    }

    return (
        <div className = 'navbar flex'>
            <ul className = 'w-full'>
                <li 
                className={`list-element w-full mt-2 ${(selected == 'spaceship' ? 'selected' : '')}`}
                onClick={() => handleSelect('spaceship')}
                >
                    <span className = 'm-2 text-white'>Spaceship</span>
                </li>
                <li 
                className={'list-element w-full mt-2 ' + (selected == 'planets' ? 'selected' : '')}
                onClick={() => handleSelect('planets')}
                >
                    <span className = 'm-2 text-white'>Planets</span>
                </li>
            </ul>
        </div>
    )
}