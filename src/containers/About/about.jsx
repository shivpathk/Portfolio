import React from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants'
import './About.scss';

import { AppWrap,MotionWrap } from '../../Wrapper';

const abouts = [
    {
        title:'Web Design',description:'I am a web deginer with a passion for building beautiful web applications',imgUrl:images.about01
    },
    {
        title:'Frontend Developement',description:'I am a frontend developer with a passion for building beautiful web applications.',imgUrl:images.about02
    },
    {
        title:'Backend Developement',description:'I am a backend developer with a passion for building beautiful web applications',imgUrl:images.about03
    },
    {
        title:'Fullstack Developement',description:'I am a fullstack developer with a passion for building beautiful web applications',imgUrl:images.about04
    },
]

const About = ()=>{
    return (
        <>
        <h2 className="head-text">
            I Know that <span> Good Development </span> <br/> means <span> Good Bussiness</span>
        </h2>
        <div className='app__profiles'>
            {abouts.map((about,index)=>(
                <motion.div
                whileInView={{opacity:1}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5,type:'tween'}}
                className='app__profile-item'
                key={about.title+index}
                >
                    <img src={about.imgUrl} alt={about.title}/>
                    <h2 className='bold-text' style={{marginTop:20}}>
                        {about.title}
                    </h2>
                    <p className='p-text' style={{marginTop:10}}>
                        {about.description}
                    </p>
                </motion.div>
            ))}
        </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(About,'app__about'),
    'about',
    "app__whitebg"
);