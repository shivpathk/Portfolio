import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";

import { images } from "../../constants";

import "./Header.scss";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">
                <h2>Hello ,</h2>
              </p>
              <h1 className="head-text">
                {" "}
                I'm <span>Shivam</span>
                <div className="waving-hand">
                  <div className="finger">👋</div>
                </div>
              </h1>
              <h1 className="head-text">Web Developer</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">
              <h3>
                I am skilled and passionate web Developer with experience in
                creating visually appealing and user-friendly websites
              </h3>
            </p>
          </div>
          <div>
            <a href="https://drive.google.com/drive/folders/1AHpwXH7dINOyi4wm6QUcVPSmru4o0d_P?usp=sharing" target="_blank">
              <button type="button" className="p-text">
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button type="button" className="p-text">
                Hire me
              </button>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildern: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" height={"590px"} />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.javascript, images.sass].map((circle, index) => (
          <div className="cicle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
