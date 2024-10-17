import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../ui/menubar';

const Navbar = () => {

    return (
        <div className="fixed justify-center items-center top-0 left-0 right-0 flex w-full h-[90px] z-30">
            <div className="hidden sm:flex relative justify-center items-center gap-10 bg-light_gray_2 px-5 py-2 rounded-full">
                <Link href="#home">
                    <span className="hover:text-purple transition duration-100">
                        Home
                    </span>
                </Link>
                <Link href="#featured" className="pr-10">
                    <span className="hover:text-purple transition duration-100">
                        Projects
                    </span>
                </Link>
                <img src="/logo.png" alt="" className="absolute" />
                <Link href="#about" className="pl-10">
                    <span className="hover:text-purple transition duration-100">
                        About
                    </span>
                </Link>
                <Link href="#contact">
                    <span className="hover:text-purple transition duration-100">
                        Contact
                    </span>
                </Link>
            </div>

            <div className="flex sm:hidden relative justify-between items-center w-full h-full gap-10 bg-light_gray_2 px-5 py-2">
                <img src="/logo.png" alt="" className="sm:absolute" />
                <Menubar className="bg-light_gray_2">
                    <MenubarMenu>
                        <MenubarTrigger className="bg-light_gray_2">
                            <Menu className="w-7 h-7" />
                        </MenubarTrigger>
                        <MenubarContent className="sm:hidden">
                            <Link href="#home">
                                <MenubarItem className="text-[16px]">
                                    Home
                                </MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href="#featured">
                                <MenubarItem className="text-[16px]">
                                    Projects
                                </MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href="#about">
                                <MenubarItem className="text-[16px]">
                                    About
                                </MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href="#contact">
                                <MenubarItem className="text-[16px]">
                                    Contact
                                </MenubarItem>
                            </Link>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    )
}

export default Navbar