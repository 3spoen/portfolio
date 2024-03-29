"use client";

import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';
import { ArrowDownTrayIcon  } from '@heroicons/react/24/solid'
import { motion } from "framer-motion"
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
/** TODO: fix the image Problem when changing between the tabs( skills) */












const AboutSec = () => {

  const [tab, setTab] = useState("education");
  const [isPending, startTransiton] = useTransition();
  const { t } = useTranslation();


  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      image:"/images/00.png",
      content:(
        <ol className=' list-decimal pl-3'>
  
        <li>Python
          <ul className=" list-disc text-slate-300 pl-4">
            <li>MediaPipe</li>
            <li>openCV</li>
            <li>openGL</li>
            <li>numpy</li>
            <li>Pandas</li>
          </ul>
        </li>
  
        <li>JavaScript
          <ul className=" list-disc text-slate-300 pl-4">
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </li>
  
        <li>Java
          <ul className=" list-disc text-slate-300 pl-4">
            <li>Spring Boot</li>
            <li>mySQL</li>
          </ul>
        </li>
  
        <li>C/C++</li>
        <li>(x64)Assembly</li>
  
      </ol>
      ),
    },
    {
      title: "Education",
      id: "education",
      image:"/images/Education.jpg",
      content:(
      <ul className=" list-disc justify-between space-y-4 pl-3">
  
        <li>B.Sc. Informatik Friedrich Schiller University Jena
        {/*<a href="/docs"download="cv.pdf"><ArrowDownTrayIcon className="h-5 w-5" /></a> */}
          <ul className="   text-slate-400  pl-2">
            <li>Oct. 2018- Oct. 2023</li>
          </ul>
        </li>
  
        <li>DSH- Cours Friedrich Schiller University Jena
          <ul className=" text-slate-400  pl-2">
            <li>Apr. 2018- Sep. 2018</li>
          </ul>
        </li>
  
        
  
        <li>{t('Syrian high school')} 
          <ul className=" text-slate-400 pl-2">
            <li>{t("Graduated on Jul 2015 ")}</li>
          </ul>
        </li>
  
      </ul>
      ),
    },
    {
      title: "Hobbies",
      id: "hobbies",
      image:"/images/gocart.jpg",
      content:(
      <ul className=" list-disc pl-3">
        <li>{t('Table Tennis')}</li>
        <li>{t('Photo Editing')}</li>
        <li>{t('Coding')}</li>
        <li>{t('Guitar')}</li>
      </ul>
      ),
    }
  ];

  const handleTabChange = (id) =>{
    startTransiton(() => {setTab(id); });
  };
  
  return (
    <section className="text-white" id='about'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <motion.div
        key={tab}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
  <     Image src={TAB_DATA.find((t) => t.id === tab).image}
              alt={TAB_DATA.find((t) => t.id === tab).title}
              width={500}
              height={400}
        />
      </motion.div>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className=" text-4xl font-bold  text-cyan-300 mb-4">
            {t('About')}
            </h1>
          <p className="text-base ">
         { t('AboutSectionTxt')}
          </p>
          
          <div className="flex flex-row mt-8">
          <TabButton selectTab={()=> handleTabChange("education")} active={tab==="education"}>
              {" "}
               {t('Education')}{" "}
            </TabButton>

            <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>
              {" "}
              {t('Skills')}{" "}
            </TabButton>
            
            <TabButton selectTab={()=> handleTabChange("hobbies")} active={tab==="hobbies"}>
              {" "}
              Hobbies{" "}
            </TabButton>
          </div>
          <div className='mt-4 pl-2'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSec;