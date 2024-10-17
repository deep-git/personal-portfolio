import { techSkills } from '@/constants'
import React from 'react'
import IconButtons from './buttons/IconButtons'

const Skills = () => {
    return (
        <div className="flex flex-col mt-10 gap-10">
            <h2 className="text-[32px] md:text-[40px] lg:text-[64px]">Skills</h2>
            <div className="grid grid-cols-2 2xl:grid-cols-3 mt-10 mb-20 mx-auto px-5 sm:px-20 w-max gap-20 lg:gap-x-64 gap-y-10">
                {techSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 w-max">
                        <IconButtons Icon={skill.Icon} classStyle="rounded-lg" innerClassStyle="rounded-lg" iconClassStyle="w-7 h-7 md:w-9 md:h-9" />
                        <span className="hidden sm:flex text-white text-[18px] md:text-[24px]">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills