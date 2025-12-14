import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import university from "../assets/university_logo.png";

const Eduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  const educationData = [
    {
      title: "Sardar Patel College Chandrapur",
      university: "Gondwana University Gadchiroli",
      course: "Master Of Computer Application (MCA)",
      year: "2023"
    },
    {
      title: "Sardar Patel College Chandrapur",
      university: "Gondwana University Gadchiroli",
      course: "Bachelor of Science in Information Technology B.sc (I.T)",
      year: "2021"
    }
  ];

  return (
    <div
      ref={ref}
      className="mt-20 flex flex-wrap gap-10"
      style={{ justifyContent: "center" }}
    >
      {educationData.map((edu, index) => (
        <motion.div 
          key={index}
          className="xs:w-[530px] w-full"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={index}
        >
          <motion.div 
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(0, 206, 168, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              whileHover={{ 
                backgroundColor: "rgba(29, 24, 54, 0.9)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={university}
                alt="web-development"
                className="w-16 h-16 object-contain"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360 
                }}
                transition={{ duration: 0.6 }}
              />
              <motion.h3 
                className="text-white text-[20px] font-bold text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {edu.title}
              </motion.h3>
              <motion.div 
                className="text-white text-[14px] text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                University - {edu.university}
              </motion.div>
              <motion.div 
                className="text-white text-[14px] text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                Course - {edu.course}
              </motion.div>
              <motion.div 
                className="text-white text-[14px] text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                Year of Passing - {edu.year}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
      {/* <div className="xs:w-[250px] w-full">
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={web}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  React Developer
                </h3>
              </div>
            </div>
          </div>
          <div className="xs:w-[250px] w-full">
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={mobile}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  React Native Developer
                </h3>
              </div>
            </div>
          </div> */}
      {/* <div className="xs:w-[250px] w-full">
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={background}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Backend Developer
                </h3>
              </div>
            </div>
          </div>
          <div className="xs:w-[250px] w-full">
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={creator}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  NextJs Developer
                </h3>
              </div>
            </div>
          </div> */}
    </div>
  );
};
export default Eduction;
