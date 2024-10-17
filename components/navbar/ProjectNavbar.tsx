import { projectWorkedOnSkills } from '@/constants';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface ProjectNavbarProps {
    project?: {
        id: Number,
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
            num: Number;
            title: string;
            details: string;
            Icon: IconType;
        }[];
        purpose: {
            description: string;
            purpose_list: {
                num: Number;
                title: string;
                details: string;
                Icon: IconType;
            }[];
        };
        design_objectives: {
            num: Number;
            title: string;
            description: string;
            image: string;
        }[],
        conclusion: string;
        object_map: string;
        tag: string;
    },
}

const ProjectNavbar = ({ project }: ProjectNavbarProps) => {
    return (
        <>
            {project ? (
                <div className="relative flex w-full bg-dark_gray h-max md:h-[550px] lg:max-h-[450px] py-7 md:py-0">
                    <div className="flex relative max-w-screen-2xl w-full bg-dark_gray h-full mx-auto">
                        <div className="flex flex-col w-full md:flex-1 md:p-10">
                            <Link href="/" className="w-max px-4 md:px-0">
                                <ArrowLeft className="w-9 h-9 text-white cursor-pointer hover:text-purple" />
                            </Link>

                            <h1 className="text-white text-[32px] md:text-[52px] text-wrap mt-5 px-4 md:px-0">{project.title}</h1>

                            <span className="text-white text-[24px] md:text-[32px] mt-1 px-4 md:px-0 line-clamp-3">{project.type}</span>

                            <div className="flex md:hidden relative w-full h-[300px] mt-10">
                                <img src={project.projectImg} alt={project.title} className="w-full md:w-[400px] ml-auto h-full object-cover object-center" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black_background/50">
                                    <div className="flex items-center gap-3 absolute top-5 right-5">
                                        <Link href={project.github} target="_blank" className="bg-white p-2 rounded-full hover:bg-mainbackground_gray transition duration-100">
                                            <BsGithub className="w-6 h-6 text-black_background" />
                                        </Link>
                                        <Link href={project.view_link} target="_blank" className="bg-white p-2 rounded-full hover:bg-mainbackground_gray transition duration-100">
                                            <FaExternalLinkAlt className="w-6 h-6 text-black_background" />
                                        </Link>
                                    </div></div>
                            </div>

                            <div className="flex flex-col lg:flex-row w-full justify-between items-center flex-wrap mt-10 gap-7 xl:gap-0 md:mt-auto">
                                <div className="hidden md:flex items-center gap-3">
                                    <Link href={project.github} target="_blank" className="bg-white p-2 rounded-full hover:bg-mainbackground_gray transition duration-100">
                                        <BsGithub className="w-6 h-6 text-black_background" />
                                    </Link>
                                    <Link href={project.view_link} target="_blank" className="bg-white p-2 rounded-full hover:bg-mainbackground_gray transition duration-100">
                                        <FaExternalLinkAlt className="w-6 h-6 text-black_background" />
                                    </Link>
                                </div>

                                <div className="flex items-center text-[18px] text-white gap-3 w-max bg-black_background px-3 py-1 rounded-md">
                                    Completed By:
                                    <span className="text-[18px] text-white">{project.completedBy}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 flex-wrap">
                                    {project.Stack.map((Tech, index) => {

                                        const techSkill = projectWorkedOnSkills.find((skill) => skill.Icon === Tech);

                                        return (
                                            <TooltipProvider key={index}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Tech key={index} className="w-6 h-6 text-white" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <span>{techSkill ? techSkill.name : "Unknown Tech"}</span>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex relative w-[300px] lg:w-[400px] h-full">
                            <img src={project.projectImg} alt={project.title} className="w-[300px] lg:w-[400px] ml-auto h-full object-cover object-center" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black_background/50" />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    Not available
                </div>
            )}
        </>
    )
}

export default ProjectNavbar