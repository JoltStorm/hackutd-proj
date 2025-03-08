import { useState } from 'react'
import Resource from '../Resource'
import Machine from '../Machine'

export default function Planet() {
    return <div className='flex space-x-4 ml-6 mt-2'>
        <div className=''>
            <h1 className="text-white text-3xl">Resources</h1>
            <Resource resourceName="Hydrogen" resourceColor="#9D0000" quantity="10.0 L" />
            <Resource resourceName="Oxygen" resourceColor="#007B9D" quantity="10.0 L" />
            <Resource resourceName="Water" resourceColor="#13039E" quantity="10.0 L" />
        </div>
        <div className="">
            <h1 className="text-white text-3xl">Machines</h1>
            <Machine MachineName="Water Creation Unit" MachineQuantity={25} />
        </div>
    </div>
}