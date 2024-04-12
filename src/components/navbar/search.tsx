'use client'
import {
    ChevronDown,
    Heart,
    Menu,
    Search,
    ShoppingCart,
    UserRound,
} from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import logo from '@/../public/logo.png'
import { Input } from '../ui/input'

const Searchs = () => {
    const [openSearch, setOpenSearch] = React.useState(false)

    return (
        <aside className="container mt-4 flex justify-between items-center">
            {!openSearch ? (
                <>
                    <div className="cursor-pointer md:hidden">
                        <Menu />
                    </div>
                    <Image
                        src={logo}
                        alt="company logo"
                        priority
                        className="h-5 sm:h-10 w-10 sm:w-40"
                    />
                    <div className="relative w-full hidden md:flex ">
                        <Input
                            type="text"
                            placeholder="Search for items..."
                            className="rounded-lg h-[3rem] flex-grow ml-4"
                        />
                        <div className="absolute top-0 right-[-15px] rounded-r-lg h-[3rem] w-[4rem] bg-primary  flex items-center justify-center cursor-pointer">
                            <Search color="#ffff" />
                        </div>
                    </div>
                    <div
                        className="bg-slate-50 flex h-[45px] w-[65px] rounded-full ml-5 md:hidden items-center justify-center cursor-pointer"
                        onClick={() => setOpenSearch(!openSearch)}
                    >
                        <Search className="text-primary" />
                    </div>
                    <div className="bg-slate-50 h-[45px] w-[65px] rounded-full ml-5 hidden md:flex items-center justify-center cursor-pointer">
                        <Heart className="text-primary" />
                    </div>
                    <div className="bg-slate-50 h-[45px] w-[65px] rounded-full ml-5 flex items-center justify-center cursor-pointer">
                        <UserRound className="text-primary" />
                    </div>

                    <div className="flex flex-row">
                        <div className="bg-slate-50 h-[45px] w-[45px] rounded-full ml-5 flex items-center justify-center cursor-pointer">
                            <ShoppingCart className="text-primary" />
                        </div>
                        <div className="text-xs flex flex-col ml-5 cursor-pointer">
                            <span className="w-[3rem]"> My cart</span>
                            <span className="flex">
                                <strong>₹0.00</strong> <ChevronDown size={15} />
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="relative w-3/4 flex ">
                        <Input
                            type="text"
                            placeholder="Search for items..."
                            className="rounded-lg h-[3rem] flex-grow ml-4"
                        />
                        <div className="absolute top-0 right-[-15px] rounded-r-lg h-[3rem] w-[4rem] bg-primary  flex items-center justify-center cursor-pointer">
                            <Search color="#ffff" />
                        </div>
                    </div>
                    <span
                        onClick={() => setOpenSearch(false)}
                        className=" cursor-pointer sm:mr-12"
                    >
                        Cancel
                    </span>
                </>
            )}
        </aside>
    )
}

export default Searchs
