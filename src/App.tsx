"use client";
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import frame from "./assets/frame.png";
import podcast from "./assets/podcast.png";
import  mic from "./assets/mic.png";
const App = () => {
  return (
    <div className="  bg-hero-bg h-[100%] w-[100%] bg-no-repeat bg-cover">
      <div className="container max-w-['1440px'] mx-auto w-full h-full">
        <div className="w-full h-full">
          {/* Navbar */}
          <div className="font-Poppins w-full pt-6 pb-[100px] px-[175px] flex justify-between items-center">
            <div>
              <p className="text-white text-[16px] font-[500]">Logo</p>
            </div>
            <div className=" font-Poppins text-[16px] font-[500] flex justify-evenly items-center gap-[107px] text-white">
              <p>About</p>
              <p>Pricing</p>
              <p>Review</p>
            </div>
          </div>
          {/* Hero Section */}
          <div className=" font-Poppins w-full pb-[380px]">
            <div className="w-full flex flex-row-reverse px-[175px]  ">
              <div className="w-full relative">
                <img className=" absolute" src={hero1} alt="" />
                <img className="-translate-x-10 translate-y-20"  src={hero2} alt="" />
                <img
                  src={frame}
                  className="absolute top-10 left-0 z-[-100]"
                  alt=""
                />
                <img className="absolute bottom-32 -right-6" src={podcast} alt="" />
                <img className="translate-y-[10px] translate-x-[420px]" src={mic} alt="" />
              </div>
              <div className="flex flex-col gap-[24px]">
                <p className="text-white w-[580px] text-[48px] font-[700]">
                  Learn how to launch a successful podcast
                </p>
                <p className="text-white w-[433px] font-[400] text-[16px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting in ustry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button className="w-[200px] h-[55px] rounded-md text-white text-[20px] font-[700] bg-linear-grad">
                  Sign up Now
                </button>
              </div>
            </div>
          </div>

          {/* Course card */}
          <div className="w-full pb-[155px]">
            <div className="w-full flex gap-[5rem] px-[175px]">
              <div className="grid grid-rows-2 grid-flow-col gap-y-10 gap-x-5 relative">
                {/* Card */}
                <div className="-translate-y-4 px-8 py-5 border-2 border-purple-300 w-[268px] h-[160px] rounded-md ">
                  <h2 className="py-2 font-bold text-[20px]">
                    Interactive Features
                  </h2>
                  <p className=" text-leftfont-[400] text-[13px] w-[200px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>

                <div className="-translate-y-4 px-8 py-5 border-2 border-purple-300 w-[268px] h-[160px] rounded-md ">
                  <h2 className="py-2 font-bold text-[20px]">
                    Interactive Features
                  </h2>
                  <p className=" text-leftfont-[400] text-[13px] w-[200px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>

                <div className=" px-8 py-5  border-2 border-purple-300 w-[268px] h-[160px] rounded-md ">
                  <h2 className="py-2 font-bold text-[20px]">
                    Interactive Features
                  </h2>
                  <p className=" text-leftfont-[400] text-[13px] w-[200px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>

                <div className=" px-8 py-5  border-2 border-purple-300 w-[268px] h-[160px] rounded-md ">
                  <h2 className="py-2 font-bold text-[20px]">
                    Interactive Features
                  </h2>
                  <p className=" text-leftfont-[400] text-[13px] w-[200px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
        
              {/* Left part of the course card */}
              <div className="flex flex-col gap-[24px] justify-center">
                <h1 className="text-[30px] font-[700] w-[250px]">
                About the Course
                </h1>
                <p className="w-[280px] text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno
                </p>
                <button className="bg-linear-grad text-white w-[125px] h-[30px] rounded-md pt-2 pb-8">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
