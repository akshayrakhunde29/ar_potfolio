import { useState } from "react";
import logo from "../assets/akLogo.svg";
import menu from "../assets/menu-b5599218.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <nav className="sm:px-16 px-6  w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a className="flex items-center gap-2" href="/">
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Akshay
            </p>
          </a>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#work">Work</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
              <a href="/resume_akshay.pdf" download>Resume</a>
            </li>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
            <div
              className={`p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ${
                showMenu ? "showMenu" : "hidden"
              }`}
            >
              <ul className="list-none flex justify-end flex-col gap-4 menuItem">
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[20px]">
                  <a href="#about" onClick={() => setShowMenu(false)}>
                    About
                  </a>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[20px]">
                  <a href="#work" onClick={() => setShowMenu(false)}>
                    Work
                  </a>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[20px]">
                  <a href="#contact" onClick={() => setShowMenu(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative w-full h-screen mx-auto">
        <div className="sm:px-16 px-6 absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5`">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
              Hi, I'm <span className="text-[#915EFF]">Akshay</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              Full Stack Developer, <br className="sm:block hidden" />
              crafting captivating websites with seamless user experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
