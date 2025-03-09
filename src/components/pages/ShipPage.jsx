import { useState } from "react";
import Upgrade from "../Upgrade"

export default function Ship(){
    return <div className='flex space-x-4 ml-6 mt-2'>
        <div className=''>
            <h1 className="text-white text-3xl">Upgrades</h1>
            <Upgrade UpgradeName={"fish"}/>
        </div>
    </div>
}