"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { ProjectTag } from './ProjectTag';
import {motion, useInView} from "framer-motion";
import { useTranslation } from 'react-i18next';






const ProjectsSection = () => {
  const { t } = useTranslation();
  const Project_Data =[
    {
        id:1,
        title:t("ProjectName_1"),
        description:t("ProjectDesc_1"),
        image:"/images/mnist-3.0.1.png",
        tag: ["All","ML"],
        gitUrl: "https://github.com/3spoen/knn",
        previewUrl: "/",
    },{
        id:2,
        title:t("ProjectName_2"),
        description:t("ProjectDesc_2"),
        image:"/images/RLLD.png",
        tag: ["All"],
        gitUrl: "https://github.com/3spoen/Autonomes-Fahren",
        previewUrl: "/",
    },{
      id:3,
      title:"OpenMP, C++ Image Scanner",
      description:t("ProjectDesc_3"),
      image:"/images/imag_threshhold.png",
      tag: ["All",],
      gitUrl: "https://github.com/3spoen/threshold/tree/master",
      previewUrl: "/",
  },
  {
    id:4,
    title:"Portfolio",
    description:t("ProjectDesc_4"),
    image:"/images/2.jpg",
    tag: ["All","Web"],
    gitUrl: "https://github.com/3spoen/portfolio",
    previewUrl: "/",
},{
  id:5,
  title:"Mandelbrotset",
  description:t("ProjectDesc_5"),
  image:"/images/mbs.png",
  tag: ["All"],
  gitUrl: "https://github.com/3spoen/Mandelbrot-set-Zooming",
  previewUrl: "/",
},{
  id:6,
  title:"eCommerce",
  description:t("ProjectDesc_6"),
  image:"/images/Ecomerce.png",
  tag: ["All","Web"],
  gitUrl: "https://github.com/3spoen/shopping-cart",
  previewUrl: "/",
},{
  id:7,
  title:"ProjectName_7",
  description:t("ProjectDesc_7"),
  image:"/images/4connect.png",
  tag: ["All",],
  gitUrl: "https://github.com/3spoen/Malstein_3",
  previewUrl: "/",
},
];
 


  const [tag,setTag]= useState("All");
  const ref = useRef(null);
  const isInView= useInView(ref,{once:true});

  const handleTagChange = (newTag) =>{
    setTag(newTag);
  };
  const filteredProjects = Project_Data.filter((project)=> 
    project.tag.includes(tag)
  );

  const cardVariants ={
    intial: {y:50, opacity: 0},
    animate: {y:0, opacity:1}

  };

  return (
    <section id='Projects' className=' pt-10'>
    <h2 className='text-4xl font-bold text-center text-cyan-300 mb-4'>
      {t('My Projects:')}
    </h2>
    <div className=' text-white flex flex-row justify-center items-center gap-2 py-4 '>
      <ProjectTag 
        onClick ={handleTagChange} 
        name={t("All" )}
        isSelcted={tag==="All"}
      />
      <ProjectTag 
        onClick ={handleTagChange} 
        name="Web" 
        isSelcted={tag==="Web"}
      />
      <ProjectTag 
        onClick ={handleTagChange} 
        name="ML" 
        isSelcted={tag==="ML"}
      />
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 mt-2'>
        {filteredProjects.map((project,index) => (
          <motion.li key={index} variants={cardVariants} initial= "intial" animate={isInView? "animate":" inital"} transition={{ duration: 1.5, delay: index * 1.5 }}>
            <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl} />
          </motion.li>
        
        ))
        }
        
        
    </ul>
    </section>

  )
}

export default ProjectsSection;