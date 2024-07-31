import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import images from "../../constants/Images";

import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Testimonials.scss";

const testimonials = [
  {
    name: "Sunder Pichai",
    company: "GOOGLE",
    imgurl: images.sunder,
    feedback:
      "Shivam's web development prowess is truly commendable. His meticulous attention to detail and innovative approach make him a standout talent in the field.",
  },
  {
    name: "Elon Musk",
    company: "TESLA",
    imgurl: images.elon,
    feedback:
      "I went to Shivam for creating my commercial website , he was really awesome developer. He created the website very quickly and it was beautiful",
  },
  {
    name: "Bill Gates",
    company: "MICROSOFT",
    imgurl: images.bill,
    feedback:
      "Shivam's commitment to excellence, coupled with a keen eye for user experience, makes him a go-to professional for anyone seeking a skilled and reliable web developer.",
  },
  {
    name: "Mark Zuckerberg",
    company: "META",
    imgurl: images.mark,
    feedback:
      "I am glad that i met Shivam for creating a dynamic website for me , he is such a humble man and very tallented , he amazed me with his work, highly recommended",
  },
  {
    name: "Jeff Bezos",
    company: "AMAZON",
    imgurl: images.jeff,
    feedback:
      "Shivam's web wizardry is unmatched – his code turns concepts into captivating digital reality effortlessly. A true maestro in the realm of web development.",
  },
  {
    name: "Ashneen Grover",
    company: "BHARAT PAY",
    imgurl: images.ashneen,
    feedback:
      "Shivam's coding finesse and intuitive design sense set him apart as a remarkable web developer. His ability to turn ideas into functional and visually appealing websites showcases is a amazing",
  },
  {
    name: "Ritesh Aggrawal",
    company: "OYO",
    imgurl: images.ritesh,
    feedback:
      "Shivam's coding finesse transforms complexities into seamless online experiences, making him a standout web developer with a knack for turning vision into virtual reality.",
  },
];

const brands = [
  {
    name: "Amazon",
    imgurl: images.amazon,
  },
  {
    name: "Asus",
    imgurl: images.asus,
  },
  {
    name: "Bolt",
    imgurl: images.bolt,
  },
  {
    name: "Spotify",
    imgurl: images.spotify,
  },
  {
    name: "Skype",
    imgurl: images.skype,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const test = testimonials[currentIndex];

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
    () =>
    setCurrentIndex((prevIndex) =>
    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1),
  
    2500);
  
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);


  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="app__testimonial">
      <h2 className="head-text">My <span>Happy</span> Clients</h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={test.imgurl} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brands) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brands._id}
          >
            <img src={brands.imgurl} alt={brands.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials",
  "app__primarybg"
);
