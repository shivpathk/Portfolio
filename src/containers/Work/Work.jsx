import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap,MotionWrap } from "../../Wrapper";

import "./Work.scss";

const works = [
  {
    title: "Flipkart Clone",
    description:
      "I am a frontend developer with a passion for building beautiful web applications.",
    imgUrl: images.fc,
    projectLink: "https://www.google.com/",
    codeLink:"https://github.com/shivpathk/Flipkart-clone",
    tags:["HTML-CSS Projects"]
  },
  {
    title: "Genius Learning Point",
    description:
      "I am a frontend developer with a passion for building beautiful web applications.",
    imgUrl: images.glp,
    projectLink: "https://www.google.com/",
    codeLink:"https://github.com/shivpathk/Genius-Learning-Point",
    tags:["HTML-CSS Projects"]
  },
  {
    title: "Jannat Foundation",
    description:
      "I am a backend developer with a passion for building beautiful web applications",
    imgUrl: images.jf,
    projectLink: "https://www.google.com/",
    codeLink:"https://github.com/shivpathk/Jannat-Foundation",
    tags:["HTML-CSS Projects"]
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "I am a fullstack developer with a passion for building beautiful web applications",
    imgUrl: images.ttt,
    projectLink: "https://www.google.com/",
    codeLink:"https://github.com/shivpathk/tic-tac-toe",
    tags:['React Projects']
  },
  {
    title: "Weather Check",
    description:
      "I am a fullstack developer with a passion for building beautiful web applications",
    imgUrl: images.weather,
    projectLink: "https://www.google.com/",
    codeLink:"https://github.com/shivpathk/Weather-check-project",
    tags:['React Projects']
  },
  {
    title: "To Do List",
    description:
      "I am a fullstack developer with a passion for building beautiful web applications",
    imgUrl: images.tdl,
    projectLink: "https://www.google.com/",
    codeLink:"https://github.com/shivpathk/todo-app-project",
    tags:["MERN Projects"]
  },
  {
    title: "Sasta OLX",
    description:
      "I am a fullstack developer with a passion for building beautiful web applications",
    imgUrl: images.olx,
    projectLink: "https://www.google.com/",
    codeLink:"https://github.com/shivpathk/Full-Stack-Ecomerse-site-project",
    tags:["MERN Projects"]
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [animateCard, setanimateCard] = useState({ y: 0, oppacity: 1 });
  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    setFilterWork(works)
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setanimateCard({y:100,opacity:0})

    setTimeout(() => {
      setanimateCard({y:0,opacity:1})

      if(item==='All Projects'){
        setFilterWork(works)
      }
      else{
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
      }

    }, 500);

  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span> Portfolio </span> Section
      </h2>
      <div className="app__work-filter">
        {["HTML-CSS Projects", "React Projects", "MERN Projects", "All Projects"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
            </div>

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href={work.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop:10}}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work,'app__works'),
  'work',
  "app__primarybg"
  );