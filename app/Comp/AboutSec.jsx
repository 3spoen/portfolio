"use client";

import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';
import { ArrowDownTrayIcon  } from '@heroicons/react/24/solid'
/** TODO: fix the image Problem when changing between the tabs( skills) */

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
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
    content:(
    <ul className=" list-disc pl-3">

      <li>B.Sc. Informatik Friedrich Schiller University Jena
      {/*<a href="/docs"download="cv.pdf"><ArrowDownTrayIcon className="h-5 w-5" /></a> */}
        <ul className="   text-slate-400 pl-4">
          <li>Oct. 2018- Oct. 2023</li>
        </ul>
      </li>

      <li>DSH- Cours Friedrich Schiller University Jena
        <ul className=" text-slate-400 pl-4">
          <li>Apr. 2018- Sep. 2018</li>
        </ul>
      </li>

      

      <li>Syrisches Abitur 
        <ul className=" text-slate-400 pl-4">
          <li>graduated am Jul 2015</li>
        </ul>
      </li>

    </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content:(
    <ul className=" list-disc pl-3">
      <li>Table Tennis</li>
      <li>Photo Editing</li>
      <li>Coding</li>
      <li>Guitar</li>
    </ul>
    ),
  }
];





const AboutSec = () => {

  const [tab, setTab] = useState("education");
  const [isPending, startTransiton] = useTransition();

  const handleTabChange = (id) =>{
    startTransiton(() => {setTab(id); });
  };
  
  return (
    <section className="text-white" id='about'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src= {require("/public/images/about.jpg")}  
               alt="me"
               width={500}
               height={400}
               className=' px-1  py-1  rounded-xl mt-0 sm:w-fit bg-gradient-to-br from-purple-600 via-cyan-600 to-blue-600 '/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className=" text-4xl font-bold  text-cyan-300 mb-4">
            About me:
            </h1>
          <p className="text-base ">
          Hello! I&apos;m Omar, a dedicated and passionate individual from Syria. 
          In October 2023, I proudly completed my studies, embarking on a journey to forge a career in the dynamic field of Information Technology. 
          As I navigate the path towards securing a position that allows me to apply and expand my skills, I am eager to connect with opportunities and projects that challenge me and foster growth. 
          If you&apos;re looking for someone with a fresh perspective and a steadfast commitment to innovation in IT, let&apos;s get in touch!
          </p>
          
          <div className="flex flex-row mt-8">
          <TabButton selectTab={()=> handleTabChange("education")} active={tab==="education"}>
              {" "}
               Education{" "}
            </TabButton>

            <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>
              {" "}
               Skills{" "}
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