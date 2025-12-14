import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import pic from "../assets/pic.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <span className="hash-span" id="about">
        &nbsp;
      </span>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          style={{ textAlign: "center" }}
          className="text-white font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >
          ABOUT ME
        </h2>
      </motion.div>
      <motion.div 
        ref={ref}
        className="aboutBlock mt-4 text-secondary text-[17px] leading-[30px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img 
          className="myPic" 
          src={pic} 
          alt="pic"
          variants={imageVariants}
          whileHover={{ 
            scale: 1.05, 
            rotate: 5,
            boxShadow: "0 20px 40px rgba(145, 94, 255, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div variants={itemVariants}>
          <motion.h1
            style={{
              color: "#fff",
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
            whileHover={{ scale: 1.02, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            Akshay Arvind Rakhunde
          </motion.h1>
          <motion.h4 
            style={{ fontSize: "22px", marginBottom: "8px" }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I'm a Full Stack Developer
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Web Developer with 3 years of experience in building web
            applications, specializing in both frontend and backend development.
            Proficient in technologies like React, Node.js, Next.js, JavaScript,
            and TypeScript. Strong problem-solving skills with a focus on
            writing clean, reusable code and implementing scalable solutions.
            Quick to adapt to new technologies, with a proven ability to learn
            and apply concepts effectively. Committed to continuous improvement
            in both skills and productivity.
            <br /> I enjoy working with these technologies to deliver smooth and
            user-friendly web experiences. I have a proven track record of
            collaborating well with teams to complete projects successfully. I
            am always eager to learn new things and keep up with the latest
            trends in web development. I am looking forward to joining a company
            where I can contribute to exciting projects and grow my skills
            further.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};
export default About;
