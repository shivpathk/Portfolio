import React, { useState } from "react";

import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../Wrapper";
import images from "../../constants/Images";
import "./Footer.scss";

const contacts = [
  {
    name: "Instagram",
    icon: images.instagram,
    link: "https://instagram.com/shivpathk?igshid=MmVlMjlkMTBhMg==",
  },
  {
    name: "Whatsapp",
    icon: images.whatsapp,
    link: "https://wa.me/+919155307250",
  },
  {
    name: "Telegram",
    icon: images.telegram,
    link: "https://t.me/shivpathak",
  },
  {
    name: "Gmail",
    icon: images.gmail,
    link: "mailto:shivampathakjnv21@gmail.com",
  },
  {
    name: "Linkedin",
    icon: images.linkedin,
    link: "https://www.linkedin.com/in/shivam-kumar-pathak/",
  },
  {
    name: "Github",
    icon: images.github,
    link: "https://github.com/shivpathk",
  },
];

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(false)
    setIsFormSubmitted(true)
  };

  return (
    <>
      <h2 className="head-text">
        <span>Chat </span>with me
      </h2>
      <div className="app__footer-cards">
          <a href="mailto:shivampathakjnv21@gmail.com" className="p-text">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
            shivampathakjnv21
        </div>
          </a>
          <a href="tel:+919155307250" className="p-text">
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
            +919155307250
        </div>
          </a>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
      <div className="app__footer-container">
        <motion.div className="app__footer-list">
          {contacts.map((contact) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__footer-item app__flex"
              key={contact.name}
            >
              <div className="app__flex">
                <a href={contact.link} target="_blank" rel="noreferrer">
                  <img src={contact.icon} alt={contact.name} />
                </a>
              </div>
              <p className="p-text">{contact.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
