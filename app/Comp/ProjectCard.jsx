import React from 'react'

const ProjectCard = ({imgUrl, title, description}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group '
             style={{ backgroundImage:`url(${imgUrl})`, backgroundSize:"cover" }}>
                
        </div>
        <div className=' overlay absolute top-0 left-0 w-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>

        </div>
        <div className=' text-white rounded-b-xl py-6 px-4'>
            <h5 className=' font-semibold text-xl mb-2'>
                {title}
            </h5>
            <p className=' text-slate-300'>
                {description}
            </p>

        </div>
    </div>
  )
}

export default ProjectCard;