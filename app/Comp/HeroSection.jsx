"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import {Link} from 'react-scroll';
import { useTranslation } from 'react-i18next';



  



const HeroSection = () => {
    const { t ,i18n} = useTranslation();
  return (
    <section className=' lg:py-16 ' id='top'>
        <motion.div initial= {{opacity:0}} animate={{opacity:1}} transition={{ duration:2}} className=" grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
            <h1 className=" text-slate-50 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-none font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-cyan-600">
                {t("It’s Me,")}{" "}
                    </span>
                        <br></br>
                        <TypeAnimation key={i18n.language}
                        
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Omar!',
        5000, 
        t('HeroSectionP_1'),
        4000,
        t('HeroSectionP_2'),
        5000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      
    />
                    </h1>
                <p className=" text-slate-500 mb-6 text-base sm:text-lg lg:text-xl">{/*TODO:arbic sentens with vocals*/}
                {t('HeroSectionP4')}
                </p>
                <div>
                    <Link 
                     
                     to="Contact" 
                    spy={true} 
                    smooth={true} 
                    offset={0}
                    duration={1000} 
                    className=" hover:bg-gradient-to-br font-bold hover:from-purple-600 hover:via-cyan-400 hover:to-blue-600 hover:text-black px-11  py-3  text-white   rounded-full inline-block w-full sm:w-fit mr-4 bg-gradient-to-br from-purple-600 via-cyan-600 to-blue-600  ">
                        {t('Hire me')}
                        </Link>
                    <a href="https://www.3spoen.de/docs/cv_DE.pdf" download="cv_DE.pdf"  alt="alt text" target="_blank" rel="noopener noreferrer">
                        <button  className="px-1  py-1 inline-block rounded-full w-full sm:w-fit bg-gradient-to-br from-purple-600 via-cyan-600 to-blue-600 mr-4 mt-2">
                            <span className="block bg-slate-950 hover:bg-slate-800 rounded-full px-5 py-2 text-cyan-500">
                                {t('Download CV DE')}
                            </span>
                        </button>
                    </a>
                    <a href="https://www.3spoen.de/docs/cv_ENG.pdf" download="cv_ENG.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" >
                        <button  className="px-1  py-1 inline-block rounded-full w-full sm:w-fit bg-gradient-to-br from-purple-600 via-cyan-600 to-blue-600  mt-2">
                            <span className="block bg-slate-950 hover:bg-slate-800 rounded-full px-5 py-2 text-cyan-500">
                                {t('Download CV EN')}
                            </span>
                        </button>
                    </a>
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