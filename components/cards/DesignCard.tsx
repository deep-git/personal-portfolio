import React from 'react';
import { IconType } from 'react-icons';
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Image from 'next/image';

interface ProjectCardProps {
    project: {
        title: string;
        projectImg: string;
        description: string;
        Stack: IconType[];
        github: string;
        view_link: string;
        tag: string;
    }
}

const DesignCard = ({ project }: ProjectCardProps) => {

    return (
        <div className="flex flex-col gap-2 bg-mainbackground_gray w-[300px] xl:w-[350px] h-max max-h-[500px] rounded-md overflow-hidden border border-light_gray_3">
            <div className="relative w-full h-[150px] sm:h-[200px] overflow-hidden">
                <Image src={project.projectImg} alt={project.title} width={400} height={400} className="w-full h-full object-cover object-center select-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 p-3">
                    <div className="flex justify-end items-center w-full gap-3">
                        <Link href={project.github} target="_blank" className="bg-white rounded-lg p-1 active:scale-95 hover:bg-mainbackground_gray transition duration-100">
                            {/* <IconButtons Icon={BsGithub} classStyle="rounded-lg" innerClassStyle="rounded-lg" iconClassStyle="w-5 h-5" /> */}
                            <BsGithub className="w-6 h-6 text-black" />

                        </Link>

                        <Link href={project.view_link} target="_blank" className="bg-white rounded-lg p-1 active:scale-95 hover:bg-mainbackground_gray transition duration-100">
                            {/* <IconButtons Icon={FaExternalLinkAlt} classStyle="rounded-lg" innerClassStyle="rounded-lg" iconClassStyle="w-5 h-5" /> */}
                            <FaExternalLinkAlt className="w-6 h-6 text-black" />
                        </Link>
                    </div>
                </div>
            </div>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className="w-full">
                        <div className="flex flex-col gap-3 p-3">
                            <h3 className="text-[16px] sm:text-[24px] text-wrap line-clamp-1 truncate">{project.title}</h3>
                            <p className="hidden text-[16px] text-wrap line-clamp-4 truncate">{project.description}</p>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="flex justify-center w-full">
                        <div className="flex justify-center items-center w-full gap-2 flex-wrap">
                            {project.Stack.map((Tech: IconType, index) => (
                                <Tech key={index} className="w-5 h-5 text-black" />
                            ))}
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <div className={`hidden flex-col mt-auto px-3 py-2 gap-3`}>
                <div className="flex items-center gap-2 flex-wrap">
                    {project.Stack.map((Tech: IconType, index) => (
                        <Tech key={index} className="w-5 h-5 text-black" />
                    ))}
                </div>

                <div className="flex w-full gap-3 border-t-[1px] border-light_gray_3 pt-2">
                    <span className="text-[12px] bg-black_background text-white px-3 py-1 rounded-full">{project.tag}</span>
                </div>
            </div>
        </div>
    )
}

export default DesignCard