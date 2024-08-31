import React from 'react'
import  { Tilt }  from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { Card } from "./canvas";

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly 
          items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" 
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>
      </motion.div>

    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <div className='flex'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A results-driven and innovative Software Engineer with a diverse skill set 
        encompassing Node.js, React.js, and Python. 🚀 My passion for cybersecurity 
        led me to attain the prestigious OSCP certification, enhancing my ability to 
        develop secure and robust web applications. 💻 As a seasoned Web Developer, 
        I'm dedicated to creating cutting-edge solutions that not only meet clients' 
        needs but also prioritize security at every stage of development. 🛡️ <br/> <br/>
        ✨ Key Highlights ✨ <br/>
        🔹 Proficient in Node.js, React.js, and Python, with a proven track record of building efficient and scalable applications. <br/>
        🔹 OSCP-certified, adept at identifying vulnerabilities and implementing robust security measures to safeguard critical data. <br/>
        🔹 Web development expertise: Creating intuitive user interfaces and seamless user experiences. <br/>
        🔹 Passionate about ethical hacking and staying ahead of emerging cybersecurity threats. <br/>
      </motion.p>
      <div>
        <Card />
      </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service} 
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");