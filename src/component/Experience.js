import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ExperienceItem from "./ExperienceItem";
import experienceData from "../data/experience.json";
import css from "../assets/css-79a7f026.png";
import html from "../assets/html-92b76a73.png";
import mongodb from "../assets/mongodb-54000b2b.png";
import nodejs from "../assets/nodejs-d83eb6dd.png";
import react from "../assets/reactjs-966214a8.png";
import redux from "../assets/redux-171787ca.png";
import nodelogo from "../assets/nextjs.png";

// Import company logos
import swayamLogo from "../assets/swayam.png";
import sportsitLogo from "../assets/negroup.jpeg";
import juuunoLogo from "../assets/juuuno_logo.jpg";
import isofttechLogo from "../assets/isofttech.png";

// Map icon names to imported images
const iconImageMap = {
  swayam: swayamLogo,
  sportsit: sportsitLogo,
  juuuno: juuunoLogo,
  isofttech: isofttechLogo,
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <>
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="work">
          &nbsp;
        </span>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
            What I have done so far
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Work Experience.
          </h2>
        </motion.div>
        <motion.div 
          ref={ref}
          className="mt-20 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
            {[...experienceData].reverse().map((experience) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                iconImage={iconImageMap[experience.iconImage]}
                variants={itemVariants}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* language icons */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="">
          &nbsp;
        </span>
        <motion.div 
          ref={techRef}
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {[
            { src: html, name: "HTML" },
            { src: css, name: "CSS" },
            { src: react, name: "React" },
            { src: nodejs, name: "Node.js" },
            { src: redux, name: "Redux" },
            { src: mongodb, name: "MongoDB" },
            { src: nodelogo, name: "Next.js" }
          ].map((tech, index) => (
            <motion.div 
              key={index}
              className="w-28 h-28"
              variants={techVariants}
              initial="hidden"
              animate={techInView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                transition: { duration: 0.5 }
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: "auto",
                  touchAction: "none",
                }}
              >
                <div style={{ width: "100%", height: "100%" }}>
                  <img src={tech.src} alt={tech.name} />
                </div>
              </div>
            </motion.div>
          ))}
          {/* <div className="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <img src={bootstrap} />
              </div>
            </div>
          </div>
          <div className="w-28 h-28">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "auto",
                touchAction: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <img src={typescript} />
              </div>
            </div>
          </div> */}
        </motion.div>
      </section>
    </>
  );
};
export default Experience;





