import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-slate-800 border-l-transparent border-r-transparent border-b-transparent'>
        <div className=' container p-12 flex justify-between'>
            <span>
            <div className=' flex'>
                    <Image
                    alt="logo"
                    width={100}
                    height={100}
                    src="/images/LOGO_3.png"
                    />
                </div>
            </span>
            <p className=' text-slate-600'>
            © 2024. All rights reserved.
            </p>
        </div>
    </footer>
  )
}
