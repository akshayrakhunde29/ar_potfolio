import "./App.css";
import background from "./assets/backend-565fc01f.png";
import cInter from "./assets/swayam.png";
import creator from "./assets/creator-dbbffaec.png";
import cricct from "./assets/cricct-7b288464.png";
import css from "./assets/css-79a7f026.png";
import defender from "./assets/defender-ccbf66b9.png";
import github from "./assets/github-3b4e1609.png";
import herobg from "./assets/herobg-ecbfddc8.png";
import html from "./assets/html-92b76a73.png";
import logo from "./assets/backend-565fc01f.png";
import menu from "./assets/menu-b5599218.svg";
import mobile from "./assets/mobile-896ef2f5.png";
import mongodb from "./assets/mongodb-54000b2b.png";
import nodejs from "./assets/nodejs-d83eb6dd.png";
import playbig from "./assets/playbig-7e661a1a.png";
import react from "./assets/reactjs-966214a8.png";
import redux from "./assets/redux-171787ca.png";
import sportsit from "./assets/negroup.jpeg";
import tailwind from "./assets/tailwind-6ece120d.png";
import upcric from "./assets/upcric-2d1f9406.png";
import web from "./assets/web-0d05165f.png";
import bootstrap from "./assets/bootstrap.png";
import native from "./assets/native.png";
import typescript from "./assets/typescript.png";
import nodelogo from "./assets/nextjs.png";
import university from "./assets/university_logo.png";
import pic from "./assets/pic.png";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [error, setError] = useState({
    nameError: false,
    emailError: false,
    mobileError: false,
    messageError: false,
  });
  console.log("error", error);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setError({
      nameError: false,
      emailError: false,
      mobileError: false,
      messageError: false,
    });
    if (name === "name") {
      setUserDetail({ ...userDetail, name: value });
    }
    if (name === "email") {
      setUserDetail({ ...userDetail, email: value });
    }
    if (name === "mobile") {
      setUserDetail({ ...userDetail, mobile: value });
    }
    if (name === "message") {
      setUserDetail({ ...userDetail, message: value });
    }
  };

  const handleSubmit = () => {
    if (userDetail.name.trim() === "") {
      return setError({ ...error, nameError: true });
    }
    if (userDetail.email.trim() === "") {
      return setError({ ...error, emailError: true });
    }
    if (userDetail.mobile.trim() === "") {
      return setError({ ...error, mobileError: true });
    }
    if (userDetail.message.trim() === "") {
      return setError({ ...error, messageError: true });
    }
    console.log("userDetail", userDetail);
  };
  return (
    <div className="realative z-0 bg-primary">
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
                Frontend developer, <br className="sm:block hidden" />
                crafting captivating websites with seamless user experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="about">
          &nbsp;
        </span>
        <div>
          <h2
            style={{ textAlign: "center" }}
            className="text-white font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]"
          >
            ABOUT ME
          </h2>
        </div>
        <p className="aboutBlock mt-4 text-secondary text-[17px] leading-[30px]">
          <img className="myPic" src={pic} alt="pic" />
          <div>
            <h1
              style={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Akshay Rakhunde
            </h1>
            <h4 style={{ fontSize: "22px", marginBottom: "8px" }}>
              I'm a Full Stack Web Developer
            </h4>
            <p>
              Highly motivated and skilled web developer with two years of
              experience in designing and implementing web applications. Seeking
              a challenging role to leverage my expertise in front-end
              development, along with my passion for creating innovative and
              user-friendly websites.
            </p>
          </div>
        </p>
        <div
          className="mt-20 flex flex-wrap gap-10"
          style={{ justifyContent: "center" }}
        >
          <div className="xs:w-[530px] w-full" >
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={university}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Sardar Patel College Chandrapur
                </h3>
                <div className="text-white text-[14px]  text-center">
                  University - Gondwana University Gadchiroli
                </div>
                <div className="text-white text-[14px]  text-center">
                  Course – Master Of Computer Application (MCA)
                </div>
                <div className="text-white text-[14px]  text-center">
                  Year of Passing - 2023
                </div>
              </div>
            </div>
          </div>
          <div className="xs:w-[530px] w-full" >
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div
                options="[object Object]"
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={university}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Sardar Patel College Chandrapur
                </h3>
                <div className="text-white text-[14px]  text-center">
                  University - Gondwana University Gadchiroli
                </div>
                <div className="text-white text-[14px]  text-center">
                  Course - Bachelor of Science in Information Technology B.sc
                  (I.T)
                </div>
                <div className="text-white text-[14px]  text-center">
                  Year of Passing - 2021
                </div>
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
          </div>
          <div className="xs:w-[250px] w-full">
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
          </div>
        </div>
      </section>
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="work">
          &nbsp;
        </span>
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
            What I have done so far
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Work Experience.
          </h2>
        </div>
        <div className="mt-20 flex flex-col">
          <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
            <div id="" className="vertical-timeline-element">
              <span
                className="vertical-timeline-element-icon is-hidden"
                style={{ background: "rgb(56, 62, 86)" }}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={cInter}
                    alt="C360 softwares (Hyderabad)"
                    className="w-[100%] h-[100%] object-contain"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </span>
              <div
                className="vertical-timeline-element-content is-hidden"
                style={{
                  background: "rgb(29, 24, 54)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="vertical-timeline-element-content-arrow"
                  style={{ borderRight: "7px solid rgb(35, 38, 49)" }}
                />
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    Web Developer
                  </h3>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    Swayam Group (Hyderabad)
                  </p>
                </div>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Collaborated in the creation of responsive web designs and
                    user interfaces to meet project requirements
                  </li>
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Gained proficiency in HTML, CSS, JavaScript and React.js
                    working on projects to enhance coding skills
                  </li>
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Integrated of third-party APIs and services into web
                    applications
                  </li>
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Participated in team meetings and code reviews to learn best
                    practices and improve coding skills.
                  </li>
                </ul>
                <span className="vertical-timeline-element-date">
                  May 2022 – October 2022
                </span>
              </div>
            </div>
            <div id="" className="vertical-timeline-element">
              <span
                className="vertical-timeline-element-icon is-hidden"
                style={{ background: "rgb(230, 222, 221)" }}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={sportsit}
                    alt="Sports It (Hyderabad)"
                    className="w-[100%] h-[100%] object-contain"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </span>
              <div
                className="vertical-timeline-element-content is-hidden"
                style={{
                  background: "rgb(29, 24, 54)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="vertical-timeline-element-content-arrow"
                  style={{ borderRight: "7px solid rgb(35, 38, 49)" }}
                />
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    Frontend Developer
                  </h3>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    Sports It (Hyderabad)
                  </p>
                </div>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Developed and maintained responsive web applications using
                    HTML, CSS, JavaScript and React.Js to ensure optimal user
                    experiences across various devices and browsers.
                  </li>
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Participating in code reviews and providing constructive
                    feedback to other developers.
                  </li>
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Implemented front-end designs and interactive user
                    interfaces, ensuring seamless navigation and engaging user
                    experiences.
                  </li>
                  <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    Managed website deployments and server configurations,
                    ensuring a secure and efficient hosting environment.
                  </li>
                </ul>
                <span className="vertical-timeline-element-date">
                  November 2022 – Present
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="">
          &nbsp;
        </span>
        <div className="flex flex-row flex-wrap justify-center gap-10">
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
                <img src={html} />
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
                <img src={css} />
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
                <img src={react} />
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
                <img src={nodejs} />
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
                <img src={redux} />
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
                <img src={mongodb} />
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
                <img src={nodelogo} />
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
          </div>
        </div>
      </section>
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="">
          &nbsp;
        </span>
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
            What I have done so far
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Work Experience.
          </h2>
        </div>
        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          <div>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <img
                  src={upcric}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  Virtual League Game
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  Virtual League Game is a React web application that allows
                  players to engage in various games and earn money.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#react</p>
                <p className="text-[14px] green-text-gradient">#html/scss</p>
                <p className="text-[14px] pink-text-gradient">#bootstrap</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <img
                  src={cricct}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">CriCTT</h3>
                <p className="mt-2 text-secondary text-[14px]">
                  It's a React web application, where we can play games and earn
                  coins, and also can get Exciting prizes
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#react</p>
                <p className="text-[14px] green-text-gradient">#restapi</p>
                <p className="text-[14px] pink-text-gradient">#scss</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <img
                  src={playbig}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  PlayBig Games
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  It's a React Native App, Which is free to play soccer games
                  which is free to play and can also win exciting gifts
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#nextjs</p>
                <p className="text-[14px] green-text-gradient">#MongoDB</p>
                <p className="text-[14px] pink-text-gradient">#css</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <img
                  src={defender}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  One Cricket
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  One Cricket is a React web application where cricket
                  enthusiasts can play games and earn coins
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#nextjs</p>
                <p className="text-[14px] green-text-gradient">#MongoDB</p>
                <p className="text-[14px] pink-text-gradient">#Sass</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <img
                  src={defender}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">CricDesi</h3>
                <p className="mt-2 text-secondary text-[14px]">
                  CricDesi is a React Native mobile app that lets users play
                  cricket games and earn coins
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#react native</p>
                <p className="text-[14px] green-text-gradient">
                  #redux/toolkit
                </p>
                <p className="text-[14px] pink-text-gradient">#Sass</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <img
                  src={defender}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">NE Play</h3>
                <p className="mt-2 text-secondary text-[14px]">
                  NE Play is a Next.js web application designed for influencers
                  to create and manage their own games.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#nextjs</p>
                <p className="text-[14px] green-text-gradient">#MongoDB</p>
                <p className="text-[14px] pink-text-gradient">#Sass</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="realtive z-0">
        <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
          <span
            style={{ marginTop: "-110px" }}
            className="hash-span"
            id="contact"
          >
            &nbsp;
          </span>
          <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <div
              className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
              style={{ flex: "1" }}
            >
              <h3
                style={{ textAlign: "center" }}
                className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]"
              >
                Contact ME.
              </h3>
              <div className="contactBlock">
                <div
                  className="col ps-5 pe-5"
                  style={{ flex: "1.5", marginTop: "10px" }}
                >
                  <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    Get in touch
                  </p>
                  <dl>
                    <dt>
                      If You Want to contact me personally you can call me
                      between 10 AM to 6 PM my mobile no. 8329093880
                    </dt>
                    <dt>
                      <span className="bi bi-person-fill"></span> Name
                    </dt>
                    <dd className="ms-4"> Akshay Rakhunde</dd>
                    <dt>
                      <span className="bi bi-geo-alt-fill"></span> Premnent
                      Address
                    </dt>
                    <dd className="ms-4">
                      {" "}
                      Ward-1 At-Mangli Post-Dhanora TQ-Zari Jamni Dist-Yavatmal
                      Maharashtra - 445305
                    </dd>
                    <dt>
                      <span className="bi bi-geo-alt-fill"></span> Current
                      Address
                    </dt>
                    <dd className="ms-4">
                      {" "}
                      flat no 303 R K Mythri Apartment, P Janardhan Reddy Nagar,
                      Gachibowli, Hyderabad Telangana - 500081
                    </dd>
                    <dt>
                      <span className="bi bi-envelope-fill"></span> Gmail
                    </dt>
                    <dd className="ms-4"> rakhundeakshay29@gmail.com</dd>
                  </dl>
                </div>
                <form
                  style={{ marginTop: "2rem", flex: "2" }}
                  className="mt-12 flex flex-col gap-8"
                >
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                      Your Name <span className="color-red">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="What's your good name?"
                      className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                        error.nameError ? "border-red" : "border-none"
                      }`}
                      onChange={(e) => handleInput(e)}
                      value={userDetail?.name}
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                      Your email <span className="color-red">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="What's your email?"
                      className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                        error.emailError ? "border-red" : "border-none"
                      }`}
                      onChange={(e) => handleInput(e)}
                      value={userDetail?.email}
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                      Your mobile <span className="color-red">*</span>
                    </span>
                    <input
                      type="phone"
                      name="mobile"
                      placeholder="What's your mobile no?"
                      className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                        error.mobileError ? "border-red" : "border-none"
                      }`}
                      onChange={(e) => handleInput(e)}
                      value={userDetail?.mobile}
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                      Your Message <span className="color-red">*</span>
                    </span>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="What you want to say?"
                      className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                        error.messageError ? "border-red" : "border-none"
                      }`}
                      onChange={(e) => handleInput(e)}
                      value={userDetail?.message}
                    />
                  </label>
                  <button
                    type="button"
                    className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer id="join">
          <div className="p-4 text-white">
            <h1 className="text-center mt-3 mb-3" style={{ fontSize: "36px" }}>
              JOIN-WITH-ME
            </h1>
            <ol
              className="pt-4 list-unstyled align-items-center gap-4 fs-4 d-flex justify-content-center text-center"
              style={{
                fontSize: "30px",
                display: "flex",
                justifyContent: "center",
                margin: "26px 0",
              }}
            >
              <li>
                <a
                  href="https://instagram.com/akshayrakhunde29?utm_source=qr&amp;igshid=NGExMmI2YTkyZg%3D%3D"
                  target="_blank"
                >
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100008784332640"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="https://telegram.me/" target="_blank">
                  <FaTelegram />
                </a>
              </li>
              <li>
                <a href="https://web.whatsapp.com/" target="_blank">
                  <FaWhatsappSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/akshayrakhunde29?utm_source=qr&amp;igshid=NGExMmI2YTkyZg%3D%3D"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akshayrakhunde29/UICodes"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
              </li>
            </ol>
            <p className="text-center mt-4" style={{ paddingBottom: "14px" }}>
              inspirition taken from @Youtube and @Google
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
