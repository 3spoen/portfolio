"use client";

import React, {useState} from 'react'
import {Link} from 'react-scroll'
import NavLink from './NavLink'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'
import Menuoverlay from './Menuoverlay';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';





 
const Navbar = ()=> {

    const { t } = useTranslation();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const closeMenu = () => {
        setNavbarOpen(false);
      };

      const navLinks = [
        {
            title:t('About'),
            path:"about",
        },
        {
            title:t('Projects'),
            path:"Projects",
        },
        {
            title:t('Contact'),
            path:"Contact",
        },
    ] ;

  return (
    <nav className=" z-20 fixed top-0 right-0 left-0 border-b border-b-cyan-600 bg-violet-950  ">
        

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
            
                
            
            
            <div className="mobile-menu  md:hidden flex items-center justify-between">
                <div className=' pl-6 flex-grow '>
                     <LanguageSwitcher/>
                </div>
                {
                    !navbarOpen ?(
                        <button onClick={()=>setNavbarOpen(true)} className="text-purple-500 flex  items-center px-3 py-2 border rounded border-purple-500 hover:text-cyan-500 hover:border-cyan-500">
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ):(
                        <button onClick={()=>setNavbarOpen(false)} className="text-purple-500 flex  items-center px-3 py-2 border rounded border-purple-500 hover:text-cyan-500 hover:border-cyan-500">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )
                }

            </div>

            <div className="menu hidden  md:w-auto md:flex items-center justify-between " id="navbar">
                
            
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))
                    }
                </ul>
                <div className=' pl-6 flex-grow'>
                     <LanguageSwitcher/>
                </div>
                
            </div>
        </div>
        {navbarOpen ? <Menuoverlay links={navLinks} onClick={closeMenu} /> : null}
    </nav>
  )
}

export default Navbar 
