"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { ProjectTag } from './ProjectTag';

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
  const handleTagChange = (newTag) =>{
    setTag(newTag);
  };
  const filteredProjects = Project_Data.filter((project)=> 
    project.tag.includes(tag)
  );
  return (
    <>
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
    <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-2'>
        {filteredProjects.map((project) => (
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl} />
        ))
        }
        
        
    </div>
    </>

  )
}

export default ProjectsSection;