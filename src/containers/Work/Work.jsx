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
      "It is the very first Project i have created using just HTML and CSS",
    imgUrl: images.fc,
    projectLink: "https://shiv-flipkart-clone.netlify.app/",
    codeLink:"https://github.com/shivpathk/Flipkart-clone",
    tags:["HTML-CSS Projects"]
  },
  {
    title: "Genius Learning Point",
    description:
      "I created it for my friend who is the owner of e-learning platform Genius Learning Point",
    imgUrl: images.glp,
    projectLink: "https://shiv-genius-learning-point.netlify.app/",
    codeLink:"https://github.com/shivpathk/Genius-Learning-Point",
    tags:["HTML-CSS Projects"]
  },
  {
    title: "Jannat Foundation",
    description:
      "It is a frontend website for a non profitable foundation named Jannat Foundation",
    imgUrl: images.jf,
    projectLink: "https://shiv-jannat-foundation.netlify.app/",
    codeLink:"https://github.com/shivpathk/Jannat-Foundation",
    tags:["HTML-CSS Projects"]
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "The very famous Tic Tac Toe game created using react and vanilla CSS",
    imgUrl: images.ttt,
    projectLink: "https://shiv-tic-tac-toe.netlify.app/",
    codeLink:"https://github.com/shivpathk/tic-tac-toe",
    tags:['React Projects']
  },
  {
    title: "Weather Check",
    description:
      "It is weather forcasting website , i used the weather api for latest data",
    imgUrl: images.weather,
    projectLink: "https://github.com/shivpathk/Weather-check-project",
    codeLink:"https://github.com/shivpathk/Weather-check-project",
    tags:['React Projects']
  },
  {
    title: "To Do List",
    description:
      "A simple to do list web app where you can add the daily task and then mark it when done",
    imgUrl: images.tdl,
    projectLink: "https://shiv-to-do-app.netlify.app/",
    codeLink:"https://github.com/shivpathk/todo-app-project",
    tags:["MERN Projects"]
  },
  {
    title: "Sasta OLX",
    description:
      "It is a website like OLX with functions like add, edit, delete, sell, buy and add to cart",
    imgUrl: images.olx,
    projectLink: "https://shiv-sasta-olx.netlify.app/",
    codeLink:"https://github.com/shivpathk/Full-Stack-Ecomerse-site-project",
    tags:["MERN Projects"]
  },
  {
    title: "Sketch Artist Deepak",
    description:
      "I created this website for one of my very tallented friend who is a sketch artist",
    imgUrl: images.deepak_art,
    projectLink: "https://deepakat1.netlify.app/",
    codeLink:"https://github.com/shivpathk/deepak_artist_website",
    tags:["React Projects"]
  },
  {
    title: "News Today",
    description:
      "A News learning web app with categories like business, sports , health ... etc",
    imgUrl: images.news_today,
    projectLink: "https://github.com/shivpathk/News-Website",
    codeLink:"https://github.com/shivpathk/News-Website",
    tags:["React Projects"]
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