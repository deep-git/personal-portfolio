import React from "react";
import IconButtons from "./buttons/IconButtons";
import { BiHeart, BiRocket, BiUser } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col mt-20 mb-20 gap-10 px-4">
      <div className="relative flex flex-col-reverse lg:flex-row mt-20 gap-20">
        {/* <div className="flex flex-col justify-between w-full lg:w-2/5 flex-1 bg-white p-10 gap-7 lg:gap-0 rounded-2xl">
                    <div className="flex flex-col gap-5 max-w-[400px]">
                        <div className="flex items-center gap-4">
                            <IconButtons Icon={BiPalette} classStyle="rounded-lg w-max" innerClassStyle="rounded-lg" iconClassStyle="w-7 h-7 sm:w-9 sm:h-9" />
                            <span className="text-[24px]">UI/UX</span>
                        </div>
                        <p>Focusing on crafting aesthetically pleasing layouts and interactive elements that enhance user engagement and streamline navigation, ensuring a visually cohesive experience.</p>
                    </div>

                    <hr className="bg-dark_gray w-full h-[1px]" />

                    <div className="flex flex-col gap-5 max-w-[300px]">
                        <div className="flex items-center gap-4">
                            <IconButtons Icon={BiGlobe} classStyle="rounded-lg w-max" innerClassStyle="rounded-lg" iconClassStyle="w-7 h-7 sm:w-9 sm:h-9" />
                            <span className="text-[24px]">Front-end</span>
                        </div>
                        <p>Focus on using HTML, CSS, and JavaScript, and various frameworks to create responsive layouts and interactive features for seamless user interactions.</p>
                    </div>

                    <hr className="bg-dark_gray w-full h-[1px]" />

                    <div className="flex flex-col gap-5 max-w-[400px]">
                        <div className="flex items-center gap-4">
                            <IconButtons Icon={FaArrowsRotate} classStyle="rounded-lg w-max" innerClassStyle="rounded-lg" iconClassStyle="w-7 h-7 sm:w-9 sm:h-9" />
                            <span className="text-[24px]">Full-stack</span>
                        </div>
                        <p>Focusing on integrating front-end and back-end services to build complete web applications and managing everything from user interfaces to server-side logic, ensuring cohesive and efficient systems.</p>
                    </div>
                </div> */}

        {/* <div className="relative mx-auto lg:absolute w-[200px] h-[200px] bg-light_gray_3 rounded-2xl lg:mx-0 lg:top-[calc(50%-100px)] lg:left-[calc(40%-110px)] xl:left-[calc(40%-140px)] p-4 overflow-hidden">
          <Image
            src="/images/profile.png"
            alt="profile"
            width={200}
            height={200}
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </div> */}

        <div className="w-full bg-white px-5 py-4 sm:p-10 rounded-2xl">
          <div className="flex w-full justify-center items-center gap-5 flex-wrap">
            <div className="flex flex-col items-center">
              <h2 className="text-[32px] md:text-[40px] lg:text-[64px] text-center">
                About Me
              </h2>
              <span className="text-[20px] text-center border-l-[2px] border-black_background pl-4 w-max">
                Deepak Thangella
              </span>
            </div>

            <div className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] rounded-full p-1 bg-black_background overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="profile"
                width={200}
                height={200}
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col lg:grid grid-cols-2 place-items-center justify-center items-center px-14 xl:px-32 mt-10 gap-y-10 lg:gap-y-4 lg:gap-x-10">
            <div className="flex items-center gap-4 w-full flex-wrap md:flex-nowrap border-b-[1px] border-light_gray_2 pb-5">
              <IconButtons
                Icon={BiUser}
                classStyle="rounded-lg w-max"
                innerClassStyle="rounded-lg"
                iconClassStyle="w-9 h-9"
              />
              <p>
                Creative professional with 3 years of experience in learning and
                developing web applications
              </p>
            </div>

            <div className="flex items-center gap-4 w-full flex-wrap md:flex-nowrap border-b-[1px] border-light_gray_2 pb-5">
              <IconButtons
                Icon={BsTools}
                classStyle="rounded-lg w-max"
                innerClassStyle="rounded-lg"
                iconClassStyle="w-9 h-9"
              />
              <p>
                Expertise in web development, specifically front-end,
                full-stack, and UI component development
              </p>
            </div>

            <div className="flex items-center gap-4 w-full flex-wrap md:flex-nowrap border-b-[1px] border-light_gray_2 pb-5">
              <IconButtons
                Icon={BiHeart}
                classStyle="rounded-lg w-max"
                innerClassStyle="rounded-lg"
                iconClassStyle="w-9 h-9"
              />
              <p>
                Passionate about creating innovative designs, providing great
                user experience, and trying out new web design fundamentals
              </p>
            </div>

            <div className="flex gap-4 w-full flex-wrap md:flex-nowrap border-b-[1px] border-light_gray_2 pb-5">
              <IconButtons
                Icon={FaGraduationCap}
                classStyle="rounded-lg w-max h-max"
                innerClassStyle="rounded-lg"
                iconClassStyle="w-9 h-9"
              />
              <div className="flex flex-col gap-3">
                <span className="text-[18px]">Education</span>
                <span>Studied at Ontario Tech University</span>
                <span>2018-2023</span>
                <span>Bachelor of Software Engineering</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full flex-wrap md:flex-nowrap border-b-[1px] border-light_gray_2 pb-5">
              <IconButtons
                Icon={BiRocket}
                classStyle="rounded-lg w-max"
                innerClassStyle="rounded-lg"
                iconClassStyle="w-9 h-9"
              />
              <p>
                Driven by a commitment to quality, collaboration, and continuous
                learning
              </p>
            </div>

            <span className="text-[20px] sm:text-[32px] font-bold">
              Feel free to connect!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
