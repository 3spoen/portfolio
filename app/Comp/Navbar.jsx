"use client";

import React, {useState} from 'react'
import {Link} from 'react-scroll'
import NavLink from './NavLink'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'
import Menuoverlay from './Menuoverlay';
import Image from 'next/image';

const navLinks = [
    {
        title:"About",
        path:"about",
    },
    {
        title:"Projects",
        path:"Projects",
    },
    {
        title:"Contact",
        path:"Contact",
    },
] 

 
const Navbar = ()=> {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const closeMenu = () => {
        setNavbarOpen(false);
      };

  return (
    <nav className=" z-20 fixed top-0 right-0 left-0 border-b border-b-slate-600 bg-slate-950 bg-opacity-80  ">
        <div className="flex flex-wrap container  items-center justify-between mx-auto  py-4 md:py-4 lg:py-6 px-4">
            <Link 
            to="top" 
            spy={true} 
            smooth={true} 
            offset={-125}
            duration={500} 
            className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white font-semibold">
                <div className=' flex'>
                    <Image
                    alt="logo"
                    width={100}
                    height={100}
                    src="/images/LOGO_3.png"
                    />
                </div>
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
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <Menuoverlay links={navLinks} onClick={closeMenu} /> : null}
    </nav>
  )
}

export default Navbar 
