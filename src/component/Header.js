import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/akLogo.svg";
import menu from "../assets/menu-b5599218.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      x: 50,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <motion.nav 
        className="sm:px-16 px-6  w-full flex items-center py-5 fixed top-0 z-20 bg-primary"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <motion.a 
            className="flex items-center gap-2" 
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Akshay
            </p>
          </motion.a>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {["About", "Work", "Contact"].map((item, index) => (
              <motion.li 
                key={item}
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
            <motion.li 
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <a href="/resume_akshay.pdf" download>Resume</a>
            </motion.li>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <motion.img
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: showMenu ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            />
            {showMenu && (
              <motion.div
                className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl showMenu"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ul className="list-none flex justify-end flex-col gap-4 menuItem">
                  {["About", "Work", "Contact"].map((item) => (
                    <motion.li 
                      key={item}
                      className="text-secondary font-poppins font-medium cursor-pointer text-[20px]"
                      whileHover={{ x: -5, color: "#fff" }}
                    >
                      <a href={`#${item.toLowerCase()}`} onClick={() => setShowMenu(false)}>
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>
      <section className="relative w-full h-screen mx-auto">
        <motion.div 
          className="sm:px-16 px-6 absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex flex-col justify-center items-center mt-5"
            variants={itemVariants}
          >
            <motion.div 
              className="w-5 h-5 rounded-full bg-[#915EFF]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="w-1 sm:h-80 h-40 violet-gradient"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(145, 94, 255, 0)",
                  "0 0 20px rgba(145, 94, 255, 0.5)",
                  "0 0 0px rgba(145, 94, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Hi, I'm <motion.span 
                className="text-[#915EFF]"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >Akshay</motion.span>
            </motion.h1>
            <motion.p 
              className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100"
              variants={itemVariants}
            >
              Full Stack Developer, <br className="sm:block hidden" />
              crafting captivating websites with seamless user experiences.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
export default Header;
