import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap,MotionWrap } from "../../Wrapper";

import "./Skills.scss";

import './Skills.scss';

const skills=[
    {name:"HTML",
    bgColor:"#edf2f8",
    icon:images.html},
    {name:"CSS",
    bgColor:"#edf2f8",
    icon:images.css},
    {name:"SCSS",
    bgColor:"#edf2f8",
    icon:images.sass},
    {name:"Bootstrap",
    bgColor:"#edf2f8",
    icon:images.bootstrap},
    {name:"Tailwind",
    bgColor:"#edf2f8",
    icon:images.tailwind},
    {name:"JavaScript",
    bgColor:"#edf2f8",
    icon:images.javascript},
    {name:"TypeScript",
    bgColor:"#edf2f8",
    icon:images.typescript},
    {name:"React JS",
    bgColor:"#edf2f8",
    icon:images.react},
    {name:"Redux",
    bgColor:"#edf2f8",
    icon:images.redux},
    {name:"Node JS",
    bgColor:"#edf2f8",
    icon:images.node},
    {name:"Express JS",
    bgColor:"#edf2f8",
    icon:images.express},
    {name:"MongoDB",
    bgColor:"#edf2f8",
    icon:images.mongo},
    {name:"MySQL",
    bgColor:"#edf2f8",
    icon:images.mysql},
    {name:"Java",
    bgColor:"#edf2f8",
    icon:images.java},
    {name:"C",
    bgColor:"#edf2f8",
    icon:images.c},
    {name:"Python",
    bgColor:"#edf2f8",
    icon:images.python},
    {name:"API",
    bgColor:"#edf2f8",
    icon:images.api},
    {name:"Github",
    bgColor:"#edf2f8",
    icon:images.git}
]

const Skills = ()=>{
    return (
        <>
           <h2 className="head-text"><span>Skills</span> & <span>Experience</span></h2>
           <div className="app__skills-container">
            <motion.div
            className="app__skills-list"
            >
                {skills.map((skill)=>(
                    <motion.div
                    whileInView={{opacity:[0,1]}}
                    transition={{duration:0.5}}
                    className="app__skills-item app__flex"
                    key={skill.name}
                    >
                        <div className="app__flex" style={{backgroundColor:skill.bgColor}}>
                            <img src={skill.icon} alt={skill.name}/>
                        </div>
                        <p className="p-text">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
           </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Skills,'app__skills'),
    'skills',
    "app__whitebg"
    );