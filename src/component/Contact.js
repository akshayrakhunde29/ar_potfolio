import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { BsGeoAltFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import axios from "axios";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState({
    nameError: false,
    emailError: false,
    mobileError: false,
    messageError: false,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSuccessMsg("");
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

  const handleSubmit = async () => {
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
    try {
      const response = await axios.post(
        "https://contact-api-ten.vercel.app/api/contact",
        userDetail
      );

      if (response?.data?.success === "Message sent successfully.") {
        setUserDetail({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        setSuccessMsg("Message sent successfully.");
        setTimeout(() => {
          setSuccessMsg("");
        }, 3000);
      }
    } catch (error) {
      console.error(
        "Error sending data",
        error.response?.data || error.message
      );
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <div className="realtive z-0">
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span
          style={{ marginTop: "-110px" }}
          className="hash-span"
          id="contact"
        >
          &nbsp;
        </span>
        <motion.div 
          ref={ref}
          className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            style={{ flex: "1" }}
            variants={itemVariants}
          >
            <motion.h3
              style={{ textAlign: "center" }}
              className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              Contact ME.
            </motion.h3>
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
                    If You Want to contact me personally you can call me between
                    10 AM to 6 PM my mobile no. 8329093880
                  </dt>
                  <dt
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <IoMdPerson /> Name
                  </dt>
                  <dd className="ms-4"> Akshay Rakhunde</dd>
                  <dt
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <BsGeoAltFill /> Premnent Address
                  </dt>
                  <dd className="ms-4">
                    {" "}
                    Ward-1 At-Mangli Post-Dhanora TQ-Zari Jamni Dist-Yavatmal
                    Maharashtra - 445305
                  </dd>
                  <dt
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <BsGeoAltFill /> Current Address
                  </dt>
                  <dd className="ms-4">
                    {" "}
                    flat no 303 R K Mythri Apartment, P Janardhan Reddy Nagar,
                    Gachibowli, Hyderabad Telangana - 500081
                  </dd>
                  <dt
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <MdMarkEmailRead /> Gmail
                  </dt>
                  <dd className="ms-4"> rakhundeakshay29@gmail.com</dd>
                </dl>
              </div>
              <form
                style={{ marginTop: "2rem", flex: "2" }}
                className="mt-12 flex flex-col gap-8"
              >
                <motion.label 
                  className="flex flex-col"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <span className="text-white font-medium mb-4">
                    Your Name <span className="color-red">*</span>
                  </span>
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="What's your good name?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                      error.nameError ? "border-red" : "border-none"
                    }`}
                    onChange={(e) => handleInput(e)}
                    value={userDetail?.name}
                    whileFocus={{ scale: 1.02, borderColor: "#915EFF" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.label>
                <motion.label 
                  className="flex flex-col"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <span className="text-white font-medium mb-4">
                    Your email <span className="color-red">*</span>
                  </span>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="What's your email?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                      error.emailError ? "border-red" : "border-none"
                    }`}
                    onChange={(e) => handleInput(e)}
                    value={userDetail?.email}
                    whileFocus={{ scale: 1.02, borderColor: "#915EFF" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.label>
                <motion.label 
                  className="flex flex-col"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <span className="text-white font-medium mb-4">
                    Your mobile <span className="color-red">*</span>
                  </span>
                  <motion.input
                    type="phone"
                    name="mobile"
                    placeholder="What's your mobile no?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                      error.mobileError ? "border-red" : "border-none"
                    }`}
                    onChange={(e) => handleInput(e)}
                    value={userDetail?.mobile}
                    whileFocus={{ scale: 1.02, borderColor: "#915EFF" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.label>
                <motion.label 
                  className="flex flex-col"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <span className="text-white font-medium mb-4">
                    Your Message <span className="color-red">*</span>
                  </span>
                  <motion.textarea
                    rows={4}
                    name="message"
                    placeholder="What you want to say?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                      error.messageError ? "border-red" : "border-none"
                    }`}
                    onChange={(e) => handleInput(e)}
                    value={userDetail?.message}
                    whileFocus={{ scale: 1.02, borderColor: "#915EFF" }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div 
                    style={{ paddingTop: "8px", color: "green" }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={successMsg ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {successMsg}
                  </motion.div>
                </motion.label>
                <motion.button
                  type="button"
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                  onClick={handleSubmit}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(145, 94, 255, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Send
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <footer
        id="join"
        style={{ position: "fixed", bottom: "0", right: "16px" }}
      >
        <div className="p-4 text-white">
          {/* <h1 className="text-center mt-3 mb-3" style={{ fontSize: "36px" }}>
              JOIN-WITH-ME
            </h1> */}
          <motion.ol
            className="pt-4 list-unstyled align-items-center gap-4 fs-4 d-flex justify-content-center text-center"
            style={{
              fontSize: "30px",
              display: "block",
              justifyContent: "center",
              gap: "10px",
              margin: "26px 0",
            }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              { icon: FaInstagramSquare, href: "https://www.instagram.com/akshay__rakhunde/", name: "Instagram" },
              { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100008784332640", name: "Facebook" },
              { icon: FaTelegram, href: "https://t.me/akshayrakhunde2", name: "Telegram" },
              { icon: FaWhatsappSquare, href: "https://web.whatsapp.com/", name: "WhatsApp" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/akshay-rakhunde-837819206/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in", name: "LinkedIn" }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.li 
                  key={index}
                  className={index > 0 ? "mt" : ""}
                  variants={socialVariants}
                  custom={index}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      color: "#915EFF"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon />
                  </motion.a>
                </motion.li>
              );
            })}
          </motion.ol>
          <p className="text-center mt-4" style={{ paddingBottom: "14px" }}>
            {/* inspirition taken from @Youtube and @Google */}
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Contact;
