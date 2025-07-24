import { useState } from "react";
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
const Contact = () => {
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
      <footer
        id="join"
        style={{ position: "fixed", bottom: "0", right: "16px" }}
      >
        <div className="p-4 text-white">
          {/* <h1 className="text-center mt-3 mb-3" style={{ fontSize: "36px" }}>
              JOIN-WITH-ME
            </h1> */}
          <ol
            className="pt-4 list-unstyled align-items-center gap-4 fs-4 d-flex justify-content-center text-center"
            style={{
              fontSize: "30px",
              display: "block",
              justifyContent: "center",
              gap: "10px",
              margin: "26px 0",
            }}
          >
            <li className="">
              <a
                href="https://www.instagram.com/akshay__rakhunde/"
                target="_blank"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li className="mt">
              <a
                href="https://www.facebook.com/profile.php?id=100008784332640"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
            {/* <li>
                <a href="https://twitter.com/" target="_blank">
                  <FaXTwitter />
                </a>
              </li> */}
            <li className="mt">
              <a href="https://t.me/akshayrakhunde2" target="_blank">
                <FaTelegram />
              </a>
            </li>
            <li className="mt">
              <a href="https://web.whatsapp.com/" target="_blank">
                <FaWhatsappSquare />
              </a>
            </li>
            <li className="mt">
              <a
                href="https://www.linkedin.com/in/akshay-rakhunde-837819206/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            {/* <li>
                <a
                  href="https://github.com/akshayrakhunde29/UICodes"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
              </li> */}
          </ol>
          <p className="text-center mt-4" style={{ paddingBottom: "14px" }}>
            {/* inspirition taken from @Youtube and @Google */}
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Contact;
