import React from 'react'

export const Metatags = () => {


const meta = {
    title: 'Omar Alali: Crafting Digital Experiences',
    description: "Discover Omar Alali's portfolio: a blend of innovative design and tech. See how creativity and expertise shape impactful digital experiences",
    canonical: 'https://www.3spoen.de/',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
}
  return (
    
    <DocumentMeta {...meta} />
  )
}

