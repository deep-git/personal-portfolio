import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col w-full mt-20 gap-10 max-w-screen-2xl px-10 py-4 2xl:px-0 2xl:py-0">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex items-center gap-10 w-max h-max">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[44px] xl:text-[64px] font-bold">Footer</h2>

                    <Image src="/logo.png" alt="logo" width={150} height={150} className="w-9 h-9 xl:w-14 xl:h-14" />
                </div>

                <div className="flex flex-col lg:flex-row gap-20 mt-10 md:mt-0 md:ml-auto">
                    <div className="flex flex-col gap-5">
                        <span className="text-[18px] md:text-[28px] md:mb-5 font-bold">Portfolio</span>
                        <Link href="#home" className="text-[16px] md:text-[20px]">Home</Link>
                        <Link href="#featured" className="text-[16px] md:text-[20px]">Featured Projects</Link>
                        <Link href="#other" className="text-[16px] md:text-[20px]">Other Projects</Link>
                        <Link href="#design" className="text-[16px] md:text-[20px]">Design-Focused Projects</Link>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-[18px] md:text-[28px] md:mb-5 font-bold">More Info</span>
                        <Link href="#skills" className="text-[16px] md:text-[20px]">Skills</Link>
                        <Link href="#about" className="text-[16px] md:text-[20px]">About Me</Link>
                        <Link href="#contact" className="text-[16px] md:text-[20px]">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-[18px] md:text-[28px] md:mb-5 font-bold">Visit</span>
                        <Link href="https://github.com/deep-git" className="text-[16px] md:text-[20px]" target="_blank">Github</Link>
                        <Link href="https://www.linkedin.com/in/deepak-thangella-ab5187279/" className="text-[16px] md:text-[20px]" target="_blank">LinkedIn</Link>
                    </div>
                </div>
            </div>

            <hr className="w-full bg-black_background h-[2px]" />

            <div className="flex w-full justify-center items-center mb-10">
                <p>Website designed and developed by Deepak T. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer