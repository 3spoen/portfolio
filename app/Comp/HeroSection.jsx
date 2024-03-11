"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";






const HeroSection = () => {
  return (
    <section className=' lg:py-16 '>
        <motion.div initial= {{opacity:0}} animate={{opacity:1}} transition={{ duration:0.9}} className=" grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
            <h1 className=" text-slate-50 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-none font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-600">
                It’s a Me,{" "}
                    </span>
                        <br></br>
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Omar!',
        2000, 
        'Syrien Computer scientect ',
        3000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                    </h1>
                <p className=" text-slate-500 mb-6 text-base sm:text-lg lg:text-xl">
                    asdawdaskdjamlkdasldkasmd dalksmda sdaklm sd
                </p>
                <div>
                    <button className="px-6  py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-600  ">
                        hielkjhjkhkjr me
                        </button>
                    <button className="px-1  py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-600  mt-2">
                        <span className="block bg-slate-950 hover:bg-slate-800 rounded-full px-5 py-2">
                            csdsjhhjlkkggdsv
                            </span>
                        </button>
                </div>
            </div>
            <motion.div initial= {{scale:0.75}} animate={{scale:1}} transition={{ duration:0.9}} className="col-span-5 place-self-center mt-4 lg:mt-9">
                <div className="rounded-full bg-slate-950 w-[200px] h-[200px] lg:w-[400px] lg:h-[400] relative">
                    <Image 
                        src={require("/public/images/1.2.png")}
                        alt="me"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                />
                </div>
            </motion.div>
        </motion.div>
    </section>
        
  )
}

export default HeroSection