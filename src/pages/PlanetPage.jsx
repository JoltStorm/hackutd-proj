import { useState } from 'react'

import Resource from '../components/Resource'
import Machine from '../components/Machine'
import { EarthContext } from '../context/EarthContext'

export default function Planet() {
    return <EarthContext>
        <div className='flex space-x-4 ml-6 mt-2'>
            <div className=''>
                <h1 className="text-white text-3xl">Resources</h1>
                <Resource resourceName="Hydrogen" resourceColor="#9D0000" quantity="10.0 L" />
                <Resource resourceName="Oxygen" resourceColor="#007B9D" quantity="10.0 L" />
                <Resource resourceName="Water" resourceColor="#13039E" quantity="10.0 L" />
            </div>
            <div className="">
                <h1 className="text-white text-3xl">Machines</h1>
                <Machine machineName="Water Creation Unit" machineQuantity={25} inputResources={[
                    { color: "#9D0000", usage: 10 }, { color: "#007B9D", usage: 5 }
                ]} outputResources={[
                    { color: "#13039E", usage: 5 }
                ]} costResources={[
                    { color: "#646179", usage: 50 }
                ]} />
            </div>
        </div >
    </EarthContext>
}