import { React, useState} from 'react'

import './Machine.css'


export default function WaterCreationUnit() {
    const [unitsBuilt, setUnitsBuilt] = useState(25);
  
    return (
        <div className=" text-white w-96">
        <h1 className="text-2xl font-bold">Machines</h1>
        <div className="bg-gray-300 p-4 text-black mt-2 rounded-md">
          <h2 className="text-xl font-semibold">Water Creation Unit</h2>
          <div className="mt-2">
            <div className="bg-red-600 text-white px-2 py-1 text-sm w-fit">-250 L/s (-10/s indv)</div>
            <div className="bg-cyan-600 text-white px-2 py-1 text-sm w-fit mt-1">-125 L/s (-5/s indv)</div>
            <div className="bg-blue-700 text-white px-2 py-1 text-sm w-fit mt-1">+125 L/s (+5/s indv)</div>
          </div>
          <p className="mt-2">Cost to build unit:</p>
          <p className="font-bold">50 g</p>
          <p className="mt-2">Units built: {unitsBuilt}</p>
          <div className="mt-2 flex gap-2">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => setUnitsBuilt(unitsBuilt + 1)}
            >
              Build
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => setUnitsBuilt(unitsBuilt > 0 ? unitsBuilt - 1 : 0)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    )
}