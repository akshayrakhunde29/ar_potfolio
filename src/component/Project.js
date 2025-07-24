import neplay from "../assets/neplay.png";
import vleague from "../assets/vleague.png";
import cricdesi from "../assets/cricdesi.jpg";
import samba from "../assets/samba.png";
import github from "../assets/github-3b4e1609.png";
import cricct from "../assets/cricct-7b288464.png";
import playbig from "../assets/playbig-7e661a1a.png";
import juuuno from "../assets/juuuno.png";

const Project = () => {
  return (
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
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-5">
        <div>
          <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
              <img
                src={juuuno}
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
                Juuuno Ad Platform
              </h3>
              <p className="mt-2 text-secondary text-[14px]">
                Juuuno Ad Platform campaign management platform for an
                advertising company to create, manage, and monitor digital ad
                campaigns.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <p className="text-[14px] blue-text-gradient">#react</p>
              <p className="text-[14px] green-text-gradient">#html/scss</p>
              <p className="text-[14px] pink-text-gradient">#node</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
              <img
                src={vleague}
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
                src={samba}
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
              <h3 className="text-white font-bold text-[24px]">Samba</h3>
              <p className="mt-2 text-secondary text-[14px]">
                Samba is a React web application where socker enthusiasts can
                play games and earn coins
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
                src={cricdesi}
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
              <p className="text-[14px] green-text-gradient">#redux/toolkit</p>
              <p className="text-[14px] pink-text-gradient">#Sass</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
              <img
                src={neplay}
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
                NE Play is a Next.js web application designed for influencers to
                create and manage their own games.
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
  );
};
export default Project;
