import pic from "../assets/pic.png";
const About = () => {
  return (
    <>
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
            Akshay Arvind Rakhunde
          </h1>
          <h4 style={{ fontSize: "22px", marginBottom: "8px" }}>
            I'm a Full Stack Developer
          </h4>
          <p>
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
          </p>
        </div>
      </p>
    </>
  );
};
export default About;
