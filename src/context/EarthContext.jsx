import { useContext } from 'react'
import { createContext } from 'react'

import resourceObj from '../utils/ResourceUtils'
import machineObj from '../utils/MachineUtils'

export const EarthContext = createContext()

export const EarthProvider = ({ children }) => {
    const [state, setState] = useState({
        resources: {
            hydrogen: resourceObj('Hydrogen', 'red', 0),
            oxygen: resourceObj('Oxygen', 'teal', 0),
            water: resourceObj('Water', 'blue', 0)
        },
        machines: {
            waterMaker: machineObj(0, 0, 0, 0, 0)
        }
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