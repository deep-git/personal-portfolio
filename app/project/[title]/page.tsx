import ProjectNavbar from '@/components/navbar/ProjectNavbar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { featuredProject } from '@/constants';
import React from 'react'

const page = ({ params }: { params: { title: string } }) => {
    const title = params.title;

    const getProject = featuredProject.find((project) => project.page_link === title);

    return (
        <>
            {getProject ? (
                <div className="flex flex-col w-full">
                    <ProjectNavbar project={getProject} />
                    <div className="px-5 xl:px-0">
                        <div className="flex flex-col border border-light_gray_3 p-4 md:p-10 justify-center max-w-screen-xl mx-auto mt-10 gap-2 rounded-lg">
                            <h2 className="text-[28px]">Description</h2>
                            <p className="text-[16px]">{getProject.description}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10 mt-10 w-full max-w-screen-xl mx-auto">
                            <div className="flex flex-col flex-1 bg-light_gray_3 p-4 md:p-10">
                                <h2 className="text-[28px]">Objectives</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-y-10 gap-x-5 sm:gap-5 mt-5">
                                    {getProject.objectives.map((objective) => {

                                        const Icon = objective.Icon;

                                        return (
                                            <div key={objective.num} className="flex flex-col gap-2 h-max sm:h-[200px] w-full">
                                                <div className="flex gap-1 font-bold text-[16px] sm:text-[18px] h-max">
                                                    <span>{objective.num}.</span>
                                                    <span>{objective.title}</span>
                                                </div>

                                                <div className="flex sm:justify-center mt-2">
                                                    <HoverCard>
                                                        <HoverCardTrigger>
                                                            <Icon className="w-10 h-10 sm:w-14 sm:h-14 text-black_background/70" />
                                                        </HoverCardTrigger>
                                                        <HoverCardContent>
                                                            <span className="text-[14px]">{objective.details}</span>
                                                        </HoverCardContent>
                                                    </HoverCard>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 bg-light_gray_2 p-4 md:p-10">
                                <h2 className="text-[28px]">Purpose</h2>

                                <div className="flex flex-col gap-3">
                                    <span className="text-[14px]">{getProject.purpose.description}</span>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-y-10 gap-x-5 sm:gap-5 mt-5">
                                        {getProject.purpose.purpose_list.map((list) => {

                                            const Icon = list.Icon;

                                            return (
                                                <div key={list.num} className="flex flex-col gap-2 h-max sm:h-[150px] w-full">
                                                    <div className="flex gap-1 font-bold text-[16px] sm:text-[18px] h-max">
                                                        <span>{list.num}.</span>
                                                        <span>{list.title}</span>
                                                    </div>

                                                    <div className="flex sm:justify-center mt-2">
                                                        <HoverCard>
                                                            <HoverCardTrigger>
                                                                <Icon className="w-10 h-10 sm:w-14 sm:h-14 text-black_background/70" />
                                                            </HoverCardTrigger>
                                                            <HoverCardContent>
                                                                <span className="text-[14px]">{list.details}</span>
                                                            </HoverCardContent>
                                                        </HoverCard>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col max-w-screen-xl mx-auto mt-20 mb-20 w-full">
                            <h2 className="text-[32px]">Structural Map</h2>
                            <p className="w-full max-w-[400px] mt-2 text-[16px]">Structural map detailing how the frontend and backend are integrated and how various components interact with each other through user actions.</p>
                            <div className="flex items-center gap-5 mt-10">
                                {/* <img src={getProject.entity_map} alt="Entity map" className="w-[700px] h-[600px]" /> */}
                                <img src={getProject.object_map} alt="Object map" className="w-full md:w-[750px] md:h-[600px]" />
                            </div>
                        </div>


                        <div className="flex flex-col max-w-screen-xl mx-auto mt-20 mb-20 w-full h-full gap-20 md:gap-44">
                            {getProject.design_objectives.map((design) => {
                                return (
                                    <div key={design.num} className={`${design.num % 2 === 1 ? "bg-light_gray_2" : "bg-mainbackground_gray"} w-full h-full px-4 py-10 md:p-10 rounded-2xl`}>
                                        <div key={design.num} className={`${design.num % 2 === 1 ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"} w-full lg:w-max flex flex-col gap-5`}>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[25px] md:text-[32px] text-wrap">{design.title}</span>
                                                <p className={`w-full max-w-[700px] ${design.num % 2 === 1 ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"} text-wrap text-[16px]`}>{design.description}</p>
                                            </div>
                                            <div className="w-full mt-5">
                                                <img src={design.image} alt={design.title} className="w-full max-w-[900px]" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex flex-col mt-20 w-full max-w-screen-xl mx-auto mb-40 gap-5">
                            <h2 className="text-[32px]">Conclusion</h2>
                            <p className="text-[16px]">{getProject.conclusion}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Not found</div>
            )}
        </>
    )
}

export default page