import { Phone } from 'lucide-react'
import React from 'react'
import Picker from './Picker'

const index = () => {
    return (
        <nav>
            <aside className=" flex justify-between  bg-slate-50 p-1 items-center">
                <div className="ml-24">
                    <div className="flex gap-4 justify-center items-center">
                        <Phone size={20} />
                        <span>9105430203</span>
                    </div>
                </div>
                <Picker />
            </aside>
        </nav>
    )
}

export default index
