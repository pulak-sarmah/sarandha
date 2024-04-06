'use client'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@radix-ui/react-popover'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const Topbar = () => {
    return (
        <div className="mr-24 flex">
            <span className="mr-2">🇺🇸</span>
            <span>English</span>
            <Popover>
                <PopoverTrigger asChild className=" cursor-pointer">
                    <ChevronDown size={20} className="ml-2" />
                </PopoverTrigger>
                <PopoverContent className=" shadow-lg rounded-sm outline-none">
                    <div className="p-4">
                        <ul className="flex flex-col gap-2">
                            <li>🇺🇸 English</li>
                        </ul>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Topbar
