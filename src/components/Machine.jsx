import { React, useState } from 'react'

import './Machine.css'


export default function WaterCreationUnit({ MachineName, MachineQuantity }) {
  const [unitsBuilt, setUnitsBuilt] = useState(MachineQuantity);

  return (
    <div className=" text-white w-96">
      <div className="bg-gray-300 p-4 text-black rounded-md">
        <h2 className="text-xl">{MachineName}</h2>

        <p className="text-xl">Input</p>
        <div className="bg-red-600 text-white px-2 py-1 text-sm w-40">-250 L/s (-10/s indv)</div>
        <div className="bg-cyan-600 text-white px-2 py-1 text-sm w-40">-125 L/s (-5/s indv)</div>
        <p className="text-xl">Output</p>
        <div className="bg-blue-700 text-white px-2 py-1 text-sm w-40">+125 L/s (+5/s indv)</div>

        <p>Cost to build unit: 50</p>
        <p>Units built: {unitsBuilt}</p>
        <div className="flex gap-2">
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