"use client";

import { otherProjectsList } from '@/constants';
import React, { useState } from 'react';
import ProjectCard from './cards/ProjectCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowDown } from 'lucide-react';

const OtherProjects = () => {
    const [projectType, setProjectType] = useState("All");
    const [currentAmount, setCurrentAmount] = useState(8);

    // Filtered projects based on selected project type
    const filteredProjects = projectType === "All"
        ? otherProjectsList
        : otherProjectsList.filter((project) => project.tag === projectType);

    // Sliced projects based on current amount
    const displayedProjects = filteredProjects.slice(0, currentAmount);

    return (
        <div className="flex flex-col mt-20 gap-10 px-4">
            <div className="flex justify-between items-center flex-wrap gap-5">
                <div className="flex items-center gap-7 flex-wrap">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[64px]">Other Projects</h2>
                    <span className="flex justify-center items-center bg-light_gray_2 w-10 h-10 rounded-full">{filteredProjects.length}</span>
                </div>

                <Select defaultValue={projectType} onValueChange={(val) => setProjectType(val)}>
                    <SelectTrigger className="w-[180px] bg-black_background text-white">
                        <SelectValue placeholder="Type" className="text-white" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark_gray text-white">
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Frontend">Frontend</SelectItem>
                        <SelectItem value="Fullstack">Fullstack</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-10 sm:mt-20 mb-20 gap-10 place-items-center">
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            {currentAmount < filteredProjects.length && (
                <div className="flex w-full justify-center">
                    <div onClick={() => setCurrentAmount((prev) => prev + 8)} className="flex group items-center bg-black_background w-max gap-2 px-4 py-2 rounded-full cursor-pointer">
                        <span className="text-[16px] text-white">View More</span>
                        <ArrowDown className="w-7 h-7 text-white group-hover:translate-y-1 transition duration-100" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default OtherProjects;