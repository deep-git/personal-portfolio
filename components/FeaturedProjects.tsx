import React from 'react'
import FeaturedCard from './cards/FeaturedCard'
import { featuredProject } from '@/constants'

const FeaturedProjects = () => {
    return (
        <div className="flex flex-col mt-20 gap-20 mb-20 px-4">
            <h2 className="text-[32px] md:text-[40px] lg:text-[64px]">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
                {featuredProject.map((project, index) => (
                    <FeaturedCard key={index} project={project} num={index} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProjects