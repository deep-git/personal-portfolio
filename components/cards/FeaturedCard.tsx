import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface ProjectCardProps {
    project: {
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
    num: Number;
}

const FeaturedCard = ({ project, num }: ProjectCardProps) => {

    const IconUtil: IconType = project.ProjectIcon;

    return (
        <div className={`relative flex flex-col bg-light_gray_2 h-[400px] p-4 lg:p-10 ${num === 1 ? "2xl:mt-10" : num === 2 ? "2xl:mt-20" : ""} rounded-md hover:shadow-lg transition duration-300`}>
            <h3 className="text-[32px] lg:text-[40px] z-20">{project.title}</h3>
            <p className="text-[20px] lg:text-[24px] mt-5 z-20">{project.type}</p>

            <IconUtil className="absolute bottom-0 right-5 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] z-0 text-black_background/30" />

            <Link href={`/project/${project.page_link}`} className="relative flex group items-center gap-2 mt-auto mr-auto px-5 py-2 bg-black_background text-white rounded-sm hover:bg-black_background/90 transition duraton-100 cursor-pointer select-none active:scale-95">
                <span className="text-white text-[18px]">View</span>
                <ArrowRight className="absolute opacity-0 -right-1 group-hover:opacity-100 group-hover:translate-x-7 transition duration-300 text-black_background z-0" />
            </Link>

            <div className="w-full h-[5px] absolute top-0 left-0 bg-gradient-to-r from-red to-purple"></div>
        </div>
    )
}

export default FeaturedCard