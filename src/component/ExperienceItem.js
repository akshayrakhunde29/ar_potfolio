import { motion } from "framer-motion";

const ExperienceItem = ({ experience, iconImage, variants }) => {
  return (
    <motion.div 
      id="" 
      className="vertical-timeline-element"
      variants={variants}
      whileHover={{ scale: 1.02 }}
    >
      <motion.span
        className="vertical-timeline-element-icon is-hidden"
        style={{ background: experience.iconBg }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={iconImage}
            alt={experience.company}
            className="w-[100%] h-[100%] object-contain"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </motion.span>
      <motion.div
        className="vertical-timeline-element-content is-hidden"
        style={{
          background: "rgb(29, 24, 54)",
          color: "rgb(255, 255, 255)",
        }}
        whileHover={{ 
          boxShadow: "0 10px 30px rgba(145, 94, 255, 0.3)",
          scale: 1.02
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="vertical-timeline-element-content-arrow"
          style={{ borderRight: "7px solid rgb(35, 38, 49)" }}
        />
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {responsibility}
            </li>
          ))}
        </ul>
        <span className="vertical-timeline-element-date">
          {experience.date}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;

