import { createContext, useContext, useState } from 'react'

import resourceObj from '../../utils/ResourceUtils'
import machineObj from '../../utils/MachineUtils'

export const EarthContext = createContext()

export const EarthProvider = ({ children }) => {
    const [state, setState] = useState({
        resources: [
            resourceObj('hydrogen', 0),
            resourceObj('oxygen', 0),
            resourceObj('water', 0),
            resourceObj('iron', 10)
        ],
        machines: [
            machineObj("Water Synthesizer", 0,
                [resourceObj('hydrogen', 10), resourceObj('oxygen', 5)],
                [resourceObj('water', 5)],
                [resourceObj('iron', 50)]
            ),
        ]
    })

    return (
        <EarthContext.Provider value={{ state }}>
            {children}
        </EarthContext.Provider>
    )
}

export const useEarthContext = () => {
    return useContext(EarthContext)
}