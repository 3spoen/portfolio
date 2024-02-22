import React from 'react'
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const Project_Data =[
    {
        id:1,
        title:"project 1",
        description:"inf about project 1",
        image:"/images/1.2.png",
        tag: ["All","web"],
    },{
        id:2,
        title:"project 2",
        description:"inf about project 2",
        image:"/images/Moon.jpg",
        tag: ["All","web"],
    },
];
const ProjectsSection = () => {
  return (
    <>
    <h2>My Projects</h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {Project_Data.map((project) => (
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image} />
        ))
        }
        
        
    </div>
    </>

  )
}

export default ProjectsSection;