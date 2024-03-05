import React from 'react'
import GithubIcon from "../../public/images/github-icon.svg"
import LinkedinIcon from "../../public/images/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

export const EmailSection = () => {
    return (
        <section className=' grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
             <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
            <div className="z-10">
                <h5 className=' text-xl font-bold text-white my-2 '>
                    Let's Connect
                </h5>
                <p className=' text-slate-200 mb-4 max-w-md'>
                    {" "}
                    add the message hir make it so that you can tis the pepole

                </p>
                <div className=' socials flex flex-row gap-2'>

                    <Link href="github.com/3spoen" >
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>

                    <Link href="linkedin.com/in/omar-alali-3spoen" >
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
                
            </div>
            <div className="z-10">

                    <form className=" flex flex-col ">
                    <div className='mb-6'>
                        <label htmlFor="email"  className=' text-white block mb-2 text-sm font-medium'>
                            Your email
                        </label>
                        <input 
                        type="email" id="email" required placeholder='alan-turing@yhoo.org' className=' bg-slate-900 border border-slate-600 placeholder-slate-600 text-gray-200 text-sm rounded-lg block w-full p-2' 
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject"  className=' text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input 
                        type="text" id="subject" required placeholder='"Bist du das, Mutti? Bitte benutz WhatsApp, ja? Hab dich lieb!"' className=' bg-slate-900 border border-slate-600 placeholder-slate-600 text-gray-200 text-sm rounded-lg block w-full p-2' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className=' text-white block text-sm mb-2 font-medium'>
                            Message
                        </label>
                        <textarea name="message" id="message" placeholder="Yesterday is history, tomorrow is a mystery, but today is a gift. That's why they call it the present." className=' bg-slate-900 border border-slate-600 placeholder-slate-600 text-gray-200 text-sm rounded-lg block w-full p-2' />
                    </div>
                    <div>
                        <button type='submit' className=' hover:bg-cyan-900 bg-cyan-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                            Send
                        </button>
                    </div>
                    </form>
                </div>
        </section>
    )
}
