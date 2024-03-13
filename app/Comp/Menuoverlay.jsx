import React from 'react'
import NavLink from './NavLink'

const Menuoverlay = ({links, onClick}) => {
  return (
    <ul className=" z-10 flex flex-col py-4 items-center md:hidden">
        {links.map((link,index)=>(
        <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={onClick} />
        </li>
        ))}
    </ul>
  )
}

export default Menuoverlay;