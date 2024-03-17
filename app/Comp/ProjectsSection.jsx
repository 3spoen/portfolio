"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { ProjectTag } from './ProjectTag';
import {motion, useInView} from "framer-motion";


const Project_Data =[
    {
        id:1,
        title:"Numbers Prediction using Artificial Neural Network",
        description:"Programmed an artificial neural network that predicts a handwritten number from a 28x28 pixel picture using the MNIST database. Only the Numpy library and linear algebraic equations are used to construct the ANN.",
        image:"/images/mnist-3.0.1.png",
        tag: ["All","ML"],
        gitUrl: "https://github.com/3spoen/knn",
        previewUrl: "/",
    },{
        id:2,
        title:" Road Lane Line Detection",
        description:"Used the Canny edge detection method and Hough transform in Python and openCV to identify a road lane from video input",
        image:"/images/RLLD.png",
        tag: ["All"],
        gitUrl: "https://github.com/3spoen/Autonomes-Fahren",
        previewUrl: "/",
    },{
      id:3,
      title:"OpenMP with C++ Image Scanner",
      description:" Implemented parallel algorithms to enhance images of text for printing. The algorithms had to use hardware efficiently, thus OpenMP was used to parallelize and vectorize the C++ code",
      image:"/images/imag_threshhold.png",
      tag: ["All",],
      gitUrl: "https://github.com/3spoen/threshold/tree/master",
      previewUrl: "/",
  },
  {
    id:4,
    title:"Portfolio",
    description:"a responsive and customizable portfolio website using NextJs and Tailwind.",
    image:"/images/2.jpg",
    tag: ["All","Web"],
    gitUrl: "https://github.com/3spoen/portfolio",
    previewUrl: "/",
},{
  id:5,
  title:"Mandelbrotset",
  description:"Optimized Python and OpenGL-based Mandelbrot visualizer employs parallel processing for efficient hardware use, allowing real-time fractal exploration with advanced shader effects",
  image:"/images/mbs.png",
  tag: ["All"],
  gitUrl: "https://github.com/3spoen/Mandelbrot-set-Zooming",
  previewUrl: "/",
},{
  id:6,
  title:"eCommerce",
  description:" Implemented a shopping cart using Spring Boot for the backend in Java, optimizing for efficient data management and secure transaction processing",
  image:"/images/Ecomerce.png",
  tag: ["All","Web"],
  gitUrl: "https://github.com/3spoen/shopping-cart",
  previewUrl: "/",
},{
  id:7,
  title:"Network Programming, Multiplayer Connect Four Java Game(incompleted)",
  description:" Developed the game Connect Four with Java using a Client/Server architecture. The game is multiplayer and has a chat function. ",
  image:"/images/4connect.png",
  tag: ["All",],
  gitUrl: "https://github.com/3spoen/Malstein_3",
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
    <section id='Projects' className=' pt-10'>
    <h2 className='text-4xl font-bold text-center text-cyan-300 mb-4'>
      My Projects:
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