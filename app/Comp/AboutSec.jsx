"use client";

import React, {useTransition, useState} from 'react'
import Image from 'next/image';

const AboutSec = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src= {require("/public/images/1.jpg")} width={300} height={300}/>
        <div>
          <h2 className=" text-4xl text-cyan-100 mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            paragraf for about me
          </p>
          <div className="flex flex-row mt-8">
            <span className=" mr-3 font-semibold hover:text-white text-slate-300 border-b-2 border-b-cyan-500">
              Skills
            </span>
            <span>
              Education
            </span>
            <span>
              Experience
            </span>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSec;