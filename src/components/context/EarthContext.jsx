import { useContext, useState } from 'react'
import { createContext } from 'react'

export const EarthContext = createContext()

export const EarthProvider = ({ children }) => {
    const [state, setState] = useState({
        resources: {
            hydrogen: { name: "Hydrogen", color: "red", amount: 0 },
            oxygen: { name: "Oxygen", color: "red", amount: 0 },
            water: { name: "Water", color: "red", amount: 0 }
        },
        machines: {}
    })

    return (
        <GameContext.Provider value={{ state }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => {
    return useContext(GameContext)
}