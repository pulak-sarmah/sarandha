import { Phone } from 'lucide-react'
import Picker from './Picker'
import Searchs from './search'

const index = () => {
    return (
        <nav>
            <aside className="  bg-slate-50 p-1 ">
                <div className="container flex justify-between">
                    <div className="flex gap-4  items-center">
                        <Phone size={20} />
                        <span>9105430203</span>
                    </div>
                    <Picker />
                </div>
            </aside>
            <Searchs />
        </nav>
    )
}

export default index
