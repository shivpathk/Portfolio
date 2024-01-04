import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const sliderLeft = (cont = true , exit = true , customVal = "%") =>{
    const output = {
      initial:{
        x:`100${customVal}`
      },
      animate:{
        x:0,
      },
      exit:{
        x:`-100${customVal}`
      }
    };
    if (!cont) output.exit = {x:`100${customVal}`};
    if (!exit) delete output.exit;
    return output;
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
          variants={sliderLeft(true)}
          initial="initial"
            whileInView="animate"
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{once:true}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`}onClick={()=>setToggle(false)}>{item} </a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
