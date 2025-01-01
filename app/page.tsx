import About from "@/components/About";
import IconButtons from "@/components/buttons/IconButtons";
import Contact from "@/components/Contact";
import DesignProjects from "@/components/DesignProjects";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import OtherProjects from "@/components/OtherProjects";
import Skills from "@/components/Skills";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  TooltipContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projectWorkedOnSkills } from "@/constants";
import { industries } from "@/constants/expertise";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-[100vh]">
      <Navbar />
      <div className="fixed hidden right-10 bottom-10 lg:flex flex-col justify-center items-center gap-5">
        <Link href="https://github.com/deep-git" target="_blank">
          <IconButtons
            Icon={BsGithub}
            classStyle="rounded-full"
            innerClassStyle="rounded-full"
            iconClassStyle="w-7 h-7 rounded-full"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/deepak-thangella-ab5187279/"
          target="_blank"
        >
          <IconButtons
            Icon={BsLinkedin}
            classStyle="rounded-full"
            innerClassStyle="rounded-full"
            iconClassStyle="w-7 h-7 rounded-full"
          />
        </Link>
      </div>
      <section
        id="home"
        className="flex flex-col items-center mt-[90px] w-full"
      >
        <div className="w-full max-w-max px-4">
          <h1 className="text-[72px] sm:text-[96px] md:text-[128px] text-center mt-20 leading-[75px] md:leading-tight">
            Nice to see you!
          </h1>

          <div className="flex flex-col lg:flex-row px-4 sm:px-10 lg:px-0 max-w-[900px] mt-5 lg:mt-0 gap-5 lg:gap-20">
            <div className="flex items-center md:items-start gap-3">
              <p className="text-[32px] sm:text-[40px]">Hi!</p>
              <Image
                src="/icons/main/hello.png"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[28px] sm:text-[32px] md:text-[40px]">
              My name is Deepak, a passionate entry-level web developer!
            </p>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-sm bg-black_background text-white px-5 py-1 rounded-md">
            Based in Sarnia, ON, Canada
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div className="flex justify-center items-center gap-3">
            <Link
              href="https://deep-git.github.io/resume/"
              target="_blank"
              className="bg-black_background text-white px-5 py-3 rounded-md text-[16px] cursor-pointer hover:bg-black_background/90 transition duration-150 active:scale-95 select-none"
            >
              View Resume
            </Link>

            <Dialog>
              <DialogTrigger>
                <IconButtons
                  Icon={BiDownload}
                  classStyle="rounded-lg"
                  innerClassStyle="rounded-lg"
                  iconClassStyle="w-7 h-7 rounded-lg"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download Resume</DialogTitle>
                  <DialogDescription>
                    Are you sure you would like to download this resume?
                  </DialogDescription>
                </DialogHeader>

                <div className="flex items-center ml-auto mt-5 gap-5">
                  <DialogClose asChild>
                    <span className="px-4 py-3 bg-mainbackground_gray text-dark_gray rounded-sm hover:bg-light_gray_2/90 transition duration-100 cursor-pointer active:scale-95">
                      Close
                    </span>
                  </DialogClose>
                  <a
                    href="/resume.pdf"
                    download
                    className="px-4 py-3 bg-black_background text-white rounded-sm hover:bg-black_background/90 transition duration-100 cursor-pointer active:scale-95"
                  >
                    Download
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <hr className="w-full bg-light_gray_3 h-[2px]" />

          <div className="flex lg:hidden justify-center items-center gap-5">
            <span className="text-[32px]">Visit</span>

            <Link href="https://github.com/deep-git" target="_blank">
              <IconButtons
                Icon={BsGithub}
                classStyle="rounded-full"
                innerClassStyle="rounded-full"
                iconClassStyle="w-7 h-7 rounded-full"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/deepak-thangella-ab5187279/"
              target="_blank"
            >
              <IconButtons
                Icon={BsLinkedin}
                classStyle="rounded-full"
                innerClassStyle="rounded-full"
                iconClassStyle="w-7 h-7 rounded-full"
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 w-full gap-20 bg-black_background shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:flex justify-center items-center w-full gap-20 px-5 py-10 max-w-[1440px] bg-black_background flex-wrap">
            {/* <ScrollingText /> */}
            {industries.map((industry) => {
              const RepIcon = industry.represent;

              return (
                <div
                  key={industry.id}
                  className="flex flex-col group w-full bg-zinc-800 max-w-[350px] h-[250px] border border-gray-700 p-4 rounded-md shadow-lg hover:border-purple hover:-translate-y-14 transition-all duration-300"
                >
                  <h3 className="text-white text-center text-2xl">
                    {industry.title}
                  </h3>

                  <div className="flex w-full justify-center mt-10">
                    <RepIcon className="w-10 h-10 text-gray-500 group-hover:text-purple transition-all duration-300" />
                  </div>

                  <div className="flex items-center mt-auto flex-wrap gap-2">
                    {industry.skills.map((Icon, index) => {
                      const techSkill = projectWorkedOnSkills.find(
                        (skill) => skill.Icon === Icon
                      );
                      return (
                        <TooltipProvider key={index} delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Icon
                                key={index}
                                className="w-6 h-6 text-white"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>
                                {techSkill ? techSkill.name : "Unknown Tech"}
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="featured" className="flex flex-col max-w-screen-2xl w-full">
        <FeaturedProjects />
      </section>

      <section id="other" className="flex flex-col max-w-screen-2xl w-full">
        <OtherProjects />
      </section>

      <section id="design" className="flex flex-col max-w-screen-2xl w-full">
        <DesignProjects />
      </section>

      <section
        id="skills"
        className="flex flex-col max-w-screen-2xl w-full bg-black_background text-white px-10 rounded-2xl"
      >
        <Skills />
      </section>

      <section id="about" className="flex flex-col max-w-screen-2xl w-full">
        <About />
      </section>

      <section
        id="contact"
        className="flex flex-col max-w-screen-2xl w-full rounded-2xl px-4"
      >
        <Contact />
      </section>

      <Link
        href="#home"
        className="flex justify-center items-center bg-black_background rounded-full mb-10 p-2 ml-auto mr-10 pointer-cursor hover:bg-black_background/90"
      >
        <ArrowUp className="w-7 h-7 text-white" />
      </Link>

      <section
        id="footer"
        className="flex flex-col items-center w-full bg-light_gray_3"
      >
        <Footer />
      </section>
    </main>
  );
}
