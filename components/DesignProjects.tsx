"use client";

import React, { useEffect, useRef, useState } from 'react';
import DesignCard from './cards/DesignCard';
import { designProjects } from '@/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const DesignProjects = () => {
    //let itemsPerPage; // Total items per carousel page
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const startX = useRef(0); // Initialize startX using useRef

    // Function to update itemsPerPage based on window width
    const updateItemsPerPage = () => {
        const width = window.innerWidth;

        if (width >= 1280) {
            setItemsPerPage(6); // For large screens
        } else if (width >= 1024) {
            setItemsPerPage(4); // For medium screens
        } else {
            setItemsPerPage(2); // For small screens
        }
    };

    useEffect(() => {
        updateItemsPerPage(); // Set initial items per page based on current width

        // Add resize event listener to update items per page on resize
        window.addEventListener('resize', updateItemsPerPage);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const totalPages = Math.ceil(designProjects.length / itemsPerPage);

    // Handle swiping
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        startX.current = touch.clientX; // Store the initial touch position
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const diffX = touch.clientX - startX.current; // Calculate the difference in X
        // Only trigger navigation if swiping is significant enough
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) { // Swipe right
                scrollPrev();
            } else if (diffX < 0) { // Swipe left
                scrollNext();
            }
        }
    };

    const scrollNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const scrollPrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex flex-col mt-20 mb-20 gap-10 px-4">
            <div className="flex items-center gap-7 flex-wrap">
                <h2 className="text-[32px] md:text-[40px] lg:text-[64px]">Design-Focused Projects</h2>
                <span className="flex justify-center items-center bg-light_gray_2 w-10 h-10 rounded-full">{designProjects.length}</span>
            </div>
            <div className="relative w-full flex justify-center items-center mt-10 gap-3 sm:gap-10">
                <button onClick={scrollPrev} disabled={currentPage === 0} className="hidden sm:flex bg-light_gray_3 rounded-full p-2 cursor-pointer hover:bg-light_gray_3/70 transition duration-75">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="flex flex-wrap overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}>
                    {designProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((project, index) => (
                        <div key={index} className="flex-shrink-0 ml-auto mr-auto lg:mx-0 basis-1/2 w-full sm:w-[300px] xl:w-[350px] xl:basis-1/3 p-2 flex justify-center">
                            <DesignCard project={project} />
                        </div>
                    ))}
                </div>

                <button onClick={scrollNext} disabled={currentPage === totalPages - 1} className="hidden sm:flex bg-light_gray_3 rounded-full p-2 cursor-pointer hover:bg-light_gray_3/70 transition duration-75">
                    <ArrowRight className="w-6 h-6" />
                </button>

            </div>
            <div className="flex w-full justify-center items-center text-center mt-4 gap-10">
                <button onClick={scrollPrev} disabled={currentPage === 0} className="flex sm:hidden bg-light_gray_3 rounded-full p-2 cursor-pointer hover:bg-light_gray_3/70 transition duration-75">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                Page {currentPage + 1} of {totalPages}
                <button onClick={scrollNext} disabled={currentPage === totalPages - 1} className="flex sm:hidden bg-light_gray_3 rounded-full p-2 cursor-pointer hover:bg-light_gray_3/70 transition duration-75">
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div >
    )
}

export default DesignProjects