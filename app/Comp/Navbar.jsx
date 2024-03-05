"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'
import Menuoverlay from './Menuoverlay';

const navLinks = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#Projects",
    },
    {
        title:"Contact",
        path:"#Contact",
    },
] 

 
const Navbar = ()=> {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className=" fixed top-0 right-0 left-0 bg-slate-950 bg-opacity-80  z-10">
        <div className="flex flex-wrap items-center justify-between mx-auto  py-4 md:py-4 lg:py-6 px-4">
            <Link href={"/"} className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white font-semibold">
                LOGO
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ?(
                        <button onClick={()=>setNavbarOpen(true)} className="text-slate-200 flex  items-center px-3 py-2 border rounded border-slate-400 hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ):(
                        <button onClick={()=>setNavbarOpen(false)} className="text-slate-200 flex  items-center px-3 py-2 border rounded border-slate-400 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )
                }
            </div>

            <div className="menu hidden md:block md:w-auto " id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <Menuoverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar 
