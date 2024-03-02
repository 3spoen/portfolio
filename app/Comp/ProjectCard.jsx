import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description,gitUrl, previewUrl }) => {
  return (
    <div className='group rounded-xl relative overflow-hidden'>
      <div className='h-52 md:h-72 bg-cover bg-center relative   '
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "top" }}>
        </div>
        <div className=' text-white bg-slate-800 rounded-b-xl py-4 px-4'>
        <h5 className=' font-semibold text-xl mb-2 '>
          {title}
        </h5>
        <p className=' text-slate-300'>
          {description}
        </p>

      </div>
        <div
          className=' overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all rounded-xl duration-1000'>
            <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      

      
    </div>
  )
}

export default ProjectCard;