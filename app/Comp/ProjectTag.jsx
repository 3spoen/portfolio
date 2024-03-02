import React from 'react'

export const ProjectTag = ({name, onClick, isSelcted}) => {
    const buttonStyles = isSelcted ? "  bg-violet-900 border-violet-600" : " bg-cyan-900 border-cyan-600 hover:border-violet-600 hover:bg-opacity-0"
  return (
    <button
     className={`${buttonStyles} rounded-full border-2   px-6 py-3  text-xl cursor-pointer`}
     onClick={()=> onClick(name)}
     >
        {name}
        </button>

    )
}
