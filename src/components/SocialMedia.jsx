import React from "react";
import {
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaLinkedin,
  FaSquareGithub,
  FaTelegram
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href={"https://instagram.com/shivpathk?igshid=MmVlMjlkMTBhMg=="}
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareInstagram />
        </a>
      </div>
      <div>
        <a
          href={"https://t.me/shivpathak"}
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
        </a>
      </div>
      <div>
        <a
          href={
            "mailto:shivampathakjnv21@gmail.com"
          }
          target="_blank"
          rel="noreferrer"
        >
          <IoIosMail />
        </a>
      </div>
      <div>
        <a
          href={"https://wa.me/+919155307250"}
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareWhatsapp />
        </a>
      </div>
      <div>
        <a
          href={"https://www.linkedin.com/in/shivam-kumar-pathak/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          href={"https://github.com/shivpathk"}
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
