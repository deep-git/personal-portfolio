import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { projectWorkedOnSkills } from '@/constants'

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

const ProjectCard = ({ project }: ProjectCardProps) => {

    return (
        <div className="flex flex-col gap-2 bg-mainbackground_gray w-full max-w-[350px] max-h-[500px] rounded-md overflow-hidden border border-light_gray_3">
            <div className="relative w-full h-[200px] overflow-hidden">
                <img src={project.projectImg} alt={project.title} className="w-full h-full object-cover object-center select-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 p-3">
                    <div className="flex justify-end items-center w-full gap-3">
                        <Link href={project.github} target="_blank" className="bg-white rounded-lg p-1 active:scale-95 hover:bg-mainbackground_gray transition duration-100 border-[2px] border-black_background">
                            {/* <IconButtons Icon={BsGithub} classStyle="rounded-lg" innerClassStyle="rounded-lg" iconClassStyle="w-5 h-5" /> */}
                            <BsGithub className="w-6 h-6 text-black" />
                        </Link>

                        <Link href={project.view_link} target="_blank" className="bg-white rounded-lg p-1 active:scale-95 hover:bg-mainbackground_gray transition duration-100 border-[2px] border-black_background">
                            {/* <IconButtons Icon={FaExternalLinkAlt} classStyle="rounded-lg" innerClassStyle="rounded-lg" iconClassStyle="w-5 h-5" /> */}
                            <FaExternalLinkAlt className="w-6 h-6 text-black" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 p-3">
                <h3 className="text-[24px] text-wrap line-clamp-1 truncate">{project.title}</h3>
                <HoverCard>
                    <HoverCardTrigger>
                        <p className="text-[16px] text-wrap line-clamp-4 truncate">{project.description}</p>
                    </HoverCardTrigger>
                    <HoverCardContent side="top">
                        <p className="text-[16px] text-wrap">{project.description}</p>
                    </HoverCardContent>
                </HoverCard>
            </div>

            <div className="flex flex-col mt-auto px-3 py-2 gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                    {project.Stack.map((Tech: IconType, index) => {

                        const techSkill = projectWorkedOnSkills.find((skill) => skill.Icon === Tech);

                        return (
                            <TooltipProvider key={index}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Tech key={index} className="w-5 h-5 text-black" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>{techSkill ? techSkill.name : "Unknown Tech"}</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    })}
                </div>

                <div className="flex w-full gap-3 border-t-[1px] border-light_gray_3 pt-2">
                    <span className="text-[12px] bg-black_background text-white px-3 py-1 rounded-full">{project.tag}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard