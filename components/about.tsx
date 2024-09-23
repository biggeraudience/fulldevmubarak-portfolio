"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView( "About", 0.5);
 
  
  return (
    <motion.section ref={ref} 
    className='mb-28 max-w-[45rem] 
    text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }} 
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id='about'
     
    >

        <SectionHeading> About me </SectionHeading>
        
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Urban design</span>, I pursued my passion for programming by taking courses in{" "}
        <span className="font-medium">Javascript, Python, HTML/CSS, React and SQL</span>.{" "}
        <span className="">What I enjoy most about coding is the problem-solving aspect</span> there's nothing
        like the satisfaction of finding a solution after tackling a challenging issue. My core tech stack
        include{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I have experience with TypeScript and Prisma. I'm constantly exploring new technologies and currently seeking a {" "}
        <span className="font-bold">full-time position</span> as a <span className='font-bold'> software
        developer </span>.
        </p>
        
        <span className="">Outside of coding</span>, I enjoy playing
        video games, farming, and running marathons. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also diving into{" "}
        <span className="font-medium">business development and content creation 
        as part of my learning journey.
        </span>.
        <p>

        </p>
    </motion.section>
  )
}

