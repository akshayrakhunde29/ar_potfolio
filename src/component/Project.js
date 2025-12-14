import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import neplay from "../assets/neplay.png";
import vleague from "../assets/vleague.png";
import cricdesi from "../assets/cricdesi.jpg";
import samba from "../assets/samba.png";
import github from "../assets/github-3b4e1609.png";
import cricct from "../assets/cricct-7b288464.png";
import playbig from "../assets/playbig-7e661a1a.png";
import juuuno from "../assets/juuuno.png";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <span className="hash-span" id="">
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
        className="w-full flex"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>
      <motion.div 
        ref={ref}
        className="mt-20 flex flex-wrap gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={cardVariants}>
          <motion.div 
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(145, 94, 255, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative w-full h-[230px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={juuuno}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
              <motion.div 
                className="absolute inset-0 flex justify-end m-3 card-img_hover"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div 
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">
                Juuuno Ad Platform
              </h3>
              <p className="mt-2 text-secondary text-[14px]">
                Juuuno Ad Platform campaign management platform for an
                advertising company to create, manage, and monitor digital ad
                campaigns.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <p className="text-[14px] blue-text-gradient">#react</p>
              <p className="text-[14px] green-text-gradient">#html/scss</p>
              <p className="text-[14px] pink-text-gradient">#node</p>
            </div>
          </motion.div>
        </motion.div>
        {[
          { img: vleague, title: "Virtual League Game", desc: "Virtual League Game is a React web application that allows players to engage in various games and earn money.", tags: ["#react", "#html/scss", "#bootstrap"] },
          { img: cricct, title: "CriCTT", desc: "It's a React web application, where we can play games and earn coins, and also can get Exciting prizes", tags: ["#react", "#restapi", "#scss"] },
          { img: playbig, title: "PlayBig Games", desc: "It's a React Native App, Which is free to play soccer games which is free to play and can also win exciting gifts", tags: ["#nextjs", "#MongoDB", "#css"] },
          { img: samba, title: "Samba", desc: "Samba is a React web application where socker enthusiasts can play games and earn coins", tags: ["#nextjs", "#MongoDB", "#Sass"] },
          { img: cricdesi, title: "CricDesi", desc: "CricDesi is a React Native mobile app that lets users play cricket games and earn coins", tags: ["#react native", "#redux/toolkit", "#Sass"] },
          { img: neplay, title: "NE Play", desc: "NE Play is a Next.js web application designed for influencers to create and manage their own games.", tags: ["#nextjs", "#MongoDB", "#Sass"] }
        ].map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <motion.div 
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(145, 94, 255, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative w-full h-[230px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.img}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <motion.div 
                  className="absolute inset-0 flex justify-end m-3 card-img_hover"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {project.title}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {project.desc}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className={`text-[14px] ${
                    tagIndex === 0 ? "blue-text-gradient" : 
                    tagIndex === 1 ? "green-text-gradient" : 
                    "pink-text-gradient"
                  }`}>
                    {tag}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Project;
