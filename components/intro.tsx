"use client";

import Image from "next/image";
import pic from "@/public/WhatsApp Image 2024-09-15 at 21.58.59_35821792.jpg"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

    const { ref } = useSectionInView("Home", 0.5);
  

    return (
        <section ref={ref} id='home' className=" scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">  
            <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale:1 }}
                transition={{
                    type: 'tween',
                    duration: 0.2,
                }}>
            
            <Image 
            src={pic}
            alt='profile photo'
            width='192'
            height='192'
            quality='95'
            priority={true}
            className="rounded-full h-24 w-24
            object-cover border-[0.35rem] border-white shadow-xl"
            />
            </motion.div>   

            <motion.span className="absolute bottom-0 right-0 text-4xl">

            </motion.span>

         <span className="absolute bottom-0 right-0"></span>
         </div>
         </div>
         
         <motion.h1 className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
         initial={{ opacity: 0, y: 100 }} 
         animate={{ opacity: 1, y: 0 }}
         >
         

          <span className="font-bold"> Hello! I'm </span> <span className="font-bold"> Mubarak</span><span>,</span>  <span className=""> A dedicated </span> 
          <span className="font-bold"> full-stack developer</span><span className=""> with a year of hands-on 
          experience building dynamic websites and applications.</span>
          <span className=""> My primary focus is</span>
          <span className="font-bold"> React (Next.js)</span>.<span className=""> I specialize in creating 
          seamless, user-friendly interfaces. I'm passionate about delivering efficient, scalable solutions that 
          drive business success.</span>
         </motion.h1>
          
         <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay:0.1,
          }}
         >
            
         <Link href="#contact"
            className=" group bg-gray-900 text-white px-7 py-3 
            flex items-center gap-2 rounded-full outline-none
            focus:scale-110 hover:scale-110 hover:bg-slate-950 
            active:scale-105 transition"
            onClick={() => {
                {setActiveSection('Contact')
                    setTimeOfLastClick(Date.now());
                   
            }}}
            >

Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/AFOLABI OMOTAYO RESUME 2024.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-blue-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-blue-700"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-black"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
         </motion.div>
         
         </section>
    )
}
