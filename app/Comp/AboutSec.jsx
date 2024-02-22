"use client";

import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';



const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content:(
    <ul className=" list-disc pl-3">
      <li>python</li>
      <li>React</li>
      <li>JavaScript</li>
      <li>....</li>
      <li>....</li>
      <li>....</li>
    </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content:(
    <ul className=" list-disc pl-3">
      <li>python</li>
      <li>React</li>
      <li>JavaScript</li>
      <li>....</li>
      <li>...s.</li>
      <li>..s..</li>
    </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content:(
    <ul className=" list-disc pl-3">
      <li>python</li>
      <li>React</li>
      <li>JavaScript</li>
      <li>...s.</li>
      <li>....</li>
      
    </ul>
    ),
  }
];





const AboutSec = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransiton] = useTransition();

  const handleTabChange = (id) =>{
    startTransiton(() => {setTab(id); });
  };
  
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src= {require("/public/images/1.jpg")}  
               alt="me"
               width={500}
               height={500}/>
        <div className="mt-4 md:mt-0  text-left flex flex-col h-full">
          <h2 className=" text-4xl text-cyan-100 mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            paragraf for about me
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>
              {" "}
               Skills{" "}
            </TabButton>
            
            <TabButton selectTab={()=> handleTabChange("education")} active={tab==="education"}>
              {" "}
               Education{" "}
            </TabButton>
            <TabButton selectTab={()=> handleTabChange("certifications")} active={tab==="certifications"}>
              {" "}
               Certifications{" "}
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