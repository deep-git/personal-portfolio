"use client";

import { useEffect, useState } from 'react';

const words = ['Frontend', 'Full-stack', 'UI'];

const ScrollingText = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Set a fixed pixel value for sensitivity (e.g., 100 pixels)
        const scrollThreshold = 200; // Change this value as needed

        // Calculate the new index based on the scroll position
        const newIndex = Math.floor(scrollPosition / scrollThreshold);

        // Ensure we don't go out of bounds
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < words.length) {
            setCurrentIndex(newIndex);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentIndex]);

    return (
        <div className="relative mx-5 xl:mx-40 flex flex-col xl:flex-row items-center gap-10 w-full xl:overflow-hidden">
            <span className="text-[32px] sm:text-[44px] lg:text-[96px] text-light_gray_3 mt-10 xl:mt-0">Developing</span>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`absolute w-max text-[44px] sm:text-[64px] lg:text-[96px] 2xl:text-[128px] top-32 lg:top-44 xl:top-0 xl:right-0 transition-transform duration-500 ease-in-out bg-gradient-to-r from-red to-purple inline-block text-transparent bg-clip-text ${currentIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] xl:translate-y-[-200px] opacity-0'}`}
                >
                    {word}
                </span>
            ))}

        </div>
    );
};

export default ScrollingText;