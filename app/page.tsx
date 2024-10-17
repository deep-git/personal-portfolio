import About from "@/components/About";
import IconButtons from "@/components/buttons/IconButtons";
import Contact from "@/components/Contact";
import DesignProjects from "@/components/DesignProjects";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import OtherProjects from "@/components/OtherProjects";
import ScrollingText from "@/components/ScrollingText";
import Skills from "@/components/Skills";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-[100vh]">
      <Navbar />
      <section id="home" className="flex flex-col items-center mt-[90px] w-full">
        <div className="w-full max-w-max px-4">
          <h1 className="text-[72px] sm:text-[96px] md:text-[128px] text-center mt-20 leading-[75px] md:leading-tight">Nice to see you!</h1>

          <div className="flex flex-col lg:flex-row px-4 sm:px-10 lg:px-0 max-w-[900px] mt-5 lg:mt-0 gap-5 lg:gap-20">
            <div className="flex items-center md:items-start gap-3">
              <p className="text-[32px] sm:text-[40px]">Hi!</p>
              <img src="/icons/main/hello.png" alt="" className="w-12 h-12" />
            </div>
            <p className="text-[28px] sm:text-[32px] md:text-[40px]">My name is Deepak, a passionate entry-level software developer!</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div className="flex justify-center items-center gap-3">
            <Link href="https://deep-git.github.io/resume/" target="_blank" className="bg-black_background text-white px-5 py-3 rounded-md text-[16px] cursor-pointer hover:bg-black_background/90 transition duration-150 active:scale-95 select-none">
              View Resume
            </Link>

            <Dialog>
              <DialogTrigger>
                <IconButtons Icon={BiDownload} classStyle="rounded-lg" innerClassStyle="rounded-lg" iconClassStyle="w-7 h-7 rounded-lg" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Download Resume
                  </DialogTitle>
                  <DialogDescription>
                    Are you sure you would like to download this resume?
                  </DialogDescription>
                </DialogHeader>

                <div className="flex items-center ml-auto mt-5 gap-5">
                  <DialogClose asChild>
                    <span className="px-4 py-3 bg-mainbackground_gray text-dark_gray rounded-sm hover:bg-light_gray_2/90 transition duration-100 cursor-pointer active:scale-95">Close</span>
                  </DialogClose>
                  <a href="/resume.pdf" download className="px-4 py-3 bg-black_background text-white rounded-sm hover:bg-black_background/90 transition duration-100 cursor-pointer active:scale-95">
                    Download
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <hr className="w-full bg-light_gray_3 h-[2px]" />

          <div className="flex justify-center items-center gap-5">
            <span className="text-[32px]">Visit</span>

            <Link href="https://github.com/deep-git" target="_blank">
              <IconButtons Icon={BsGithub} classStyle="rounded-full" innerClassStyle="rounded-full" iconClassStyle="w-7 h-7 rounded-full" />
            </Link>

            <Link href="https://www.linkedin.com/in/deepak-thangella-ab5187279/" target="_blank">
              <IconButtons Icon={BsLinkedin} classStyle="rounded-full" innerClassStyle="rounded-full" iconClassStyle="w-7 h-7 rounded-full" />
            </Link>

          </div>
        </div>

        <div className="flex justify-center items-center mt-10 w-full gap-20 bg-black_background shadow-xl">
          <div className="flex xl:items-center w-full h-[250px] lg:h-[400px] xl:h-[250px] gap-20 max-w-[1440px] bg-black_background">
            <ScrollingText />
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

      <section id="skills" className="flex flex-col max-w-screen-2xl w-full bg-black_background text-white px-10 rounded-2xl">
        <Skills />
      </section>

      <section id="about" className="flex flex-col max-w-screen-2xl w-full">
        <About />
      </section>

      <section id="contact" className="flex flex-col max-w-screen-2xl w-full rounded-2xl px-4">
        <Contact />
      </section>

      <Link href="#home" className="flex justify-center items-center bg-black_background rounded-full mb-10 p-2 ml-auto mr-10 pointer-cursor hover:bg-black_background/90">
        <ArrowUp className="w-7 h-7 text-white" />
      </Link>

      <section id="footer" className="flex flex-col items-center w-full bg-light_gray_3">
        <Footer />
      </section>
    </main>
  );
}
