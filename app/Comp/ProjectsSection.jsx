"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { ProjectTag } from './ProjectTag';
import {motion, useInView} from "framer-motion";


const Project_Data =[
    {
        id:1,
        title:"project 1",
        description:"inf about project 1",
        image:"/images/1.2.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    },{
        id:2,
        title:"project 2",
        description:"inf about project 2",
        image:"/images/Moon.jpg",
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];
const ProjectsSection = () => {

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
    <section >
    <h2>
      My Projects
    </h2>
    <div className=' text-white flex flex-row justify-center items-center gap-2 py-4 '>
      <ProjectTag 
        onClick ={handleTagChange} 
        name="All" 
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