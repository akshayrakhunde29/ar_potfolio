import university from "../assets/university_logo.png";
const Eduction = () => {
  return (
    <div
      className="mt-20 flex flex-wrap gap-10"
      style={{ justifyContent: "center" }}
    >
      <div className="xs:w-[530px] w-full">
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
      <div className="xs:w-[530px] w-full">
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
              Course - Bachelor of Science in Information Technology B.sc (I.T)
            </div>
            <div className="text-white text-[14px]  text-center">
              Year of Passing - 2021
            </div>
          </div>
        </div>
      </div>
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
