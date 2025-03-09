import { React, useState } from 'react'

import './Machine.css'


export default function Machine({ machineName, machineQuantity, inputResources, outputResources, costResources }) {
  const [unitsBuilt, setUnitsBuilt] = useState(machineQuantity);

  const inputs = inputResources.map(resource =>
    <div key={resource.color} style={{ backgroundColor: resource.color }} className="text-white text-sm w-40">-{resource.amount * machineQuantity} {resource.solid ? 'g' : 'L'}/s (-{resource.amount}/s indv)</div>
  )
  const outputs = outputResources.map(resource =>
    <div key={resource.color} style={{ backgroundColor: resource.color }} className="text-white text-sm w-40">+{resource.amount * machineQuantity} {resource.solid ? 'g' : 'L'}/s (+{resource.amount}/s indv)</div>
  )
  const costs = costResources.map(resource =>
    <div key={resource.color} style={{ backgroundColor: resource.color }} className="text-white text-sm w-20">{resource.amount} {resource.solid ? 'g' : 'L'}</div>
  )

  return (
    <div className=" text-white w-96">
      <div className="bg-gray-300 p-4 text-black rounded-md">
        <h2 className="text-xl">{machineName}</h2>

        <p className="text-xl">Input</p>
        {inputs}
        <p className="text-xl">Output</p>
        {outputs}
        <p className="text-xl">Cost</p>
        {costs}


        <p>Units built: {unitsBuilt}</p>
        <div className="flex gap-2">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md"
            onClick={() => setUnitsBuilt(unitsBuilt + 1)}
          >
            +1
          </button>
          <button
            className="bg-green-800 text-white px-4 py-2 rounded-md"
            onClick={() => setUnitsBuilt(unitsBuilt + 10)}
          >
            +10
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => setUnitsBuilt(unitsBuilt > 0 ? unitsBuilt - 1 : 0)}
          >
            -1
          </button>
          <button
            className="bg-red-800 text-white px-4 py-2 rounded-md"
            onClick={() => setUnitsBuilt(unitsBuilt > 9 ? unitsBuilt - 10 : 0)}
          >
            -10
          </button>
        </div>
      </div>
    </div>
  )
}