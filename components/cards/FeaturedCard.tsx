import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { PiGithubLogo } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Separator } from "../ui/separator";
import { projectWorkedOnSkills } from "@/constants";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    type: string;
    projectImg: string;
    page_link: string;
    ProjectIcon: IconType;
    description: string;
    Stack: IconType[];
    github: string;
    view_link: string;
    completedBy: string;
    objectives: {
      num: number;
      title: string;
      details: string;
      Icon: IconType;
    }[];
    purpose: {
      description: string;
      purpose_list: {
        num: number;
        title: string;
        details: string;
        Icon: IconType;
      }[];
    };
    design_objectives: {
      num: number;
      title: string;
      description: string;
      image: string;
    }[];
    conclusion: string;
    object_map: string;
    tag: string;
  };
  num: number;
}

const FeaturedCard = ({ project, num }: ProjectCardProps) => {
  const IconUtil: IconType = project.ProjectIcon;

  return (
    <div
      className={`relative flex flex-col bg-light_gray_2 h-[450px] p-4 lg:p-10 ${
        num === 1 ? "2xl:mt-10" : num === 2 ? "2xl:mt-20" : ""
      } rounded-md hover:shadow-lg transition duration-300`}
    >
      <h3 className="text-[32px] lg:text-[40px] z-20">{project.title}</h3>
      <p className="text-[20px] lg:text-[24px] mt-5 z-20">{project.type}</p>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="z-20">
            <p className="text-left line-clamp-3 z-20">{project.description}</p>
          </TooltipTrigger>
          <TooltipContent className="max-w-[450px]">
            <p className="">{project.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <IconUtil className="absolute bottom-0 right-5 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] z-0 text-black_background/10" />

      <div className="mt-auto z-20">
        <div className="flex gap-5">
          <Link
            href={project.github}
            target="_blank"
            className="flex group justify-center items-center bg-white rounded-full w-10 h-10 p-1"
          >
            <PiGithubLogo className="w-7 h-7 group-hover:text-purple transition-all duration-100" />
          </Link>
          <Link
            href={project.view_link}
            target="_blank"
            className="relative flex group items-center gap-2 w-max mr-auto px-5 py-2 bg-black_background text-white rounded-sm hover:bg-black_background/90 transition duraton-100 cursor-pointer select-none active:scale-95"
          >
            <span className="text-white text-[18px]">View</span>
            <ArrowRight className="absolute opacity-0 -right-1 group-hover:opacity-100 group-hover:translate-x-7 transition duration-300 text-black_background z-0" />
          </Link>
        </div>

        <Separator className="bg-black_background/50 mt-5" />

        <ul className="flex items-center gap-2 mt-5 flex-wrap">
          {project.Stack.map((Icon, index) => {
            const techSkill = projectWorkedOnSkills.find(
              (skill) => skill.Icon === Icon
            );
            return (
              <li key={index} className="flex items-center gap-2">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon className="w-6 h-6 text-black_background" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-black_background">
                        {techSkill ? techSkill.name : "Unknown Tech"}
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full h-[5px] absolute top-0 left-0 bg-gradient-to-r from-red to-purple"></div>
    </div>
  );
};

export default FeaturedCard;
