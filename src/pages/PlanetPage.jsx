import { useState } from 'react'

import Resource from '../components/Resource'
import Machine from '../components/Machine'

import { useEarthContext } from '../context/EarthContext'

export default function Planet() {
    const { state } = useEarthContext()

    return (
        <div className='flex space-x-4 ml-6 mt-2'>
            <div className=''>
                <h1 className="text-white text-3xl">Resources</h1>
                {state.resources.map(resource =>
                    <Resource key={resource.name} resourceName={resource.name} resourceColor={resource.color} quantity={resource.amount} solid={resource.solid} />
                )}
            </div>
            <div className="">
                <h1 className="text-white text-3xl">Machines</h1>
                {state.machines.map(machine =>
                    <Machine key={machine.name} machineName={machine.name} machineQuantity={machine.amount} inputResources={machine.inputResources} outputResources={machine.outputResources} costResources={machine.costResources} />
                )}
            </div>
        </div >
    )
}