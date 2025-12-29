"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const HeaderMenu = () => {
    const [openMobileSearchModal, setOpenMobileSearchModal] =
        useState<boolean>(false);

    const handleToggleSearch = () => {
        setOpenMobileSearchModal(!openMobileSearchModal);
    };
    return (
        <div>
            <div
                className={
                    openMobileSearchModal
                        ? "absolute  flex w-full left-0 top-16 lg:flex flex-col items-center bg-secondary px-3 py-3 rounded-md transition"
                        : "hidden md:block  w-full left-0 top-16 lg:flex items-center bg-secondary px-3 py-2 rounded-md transition"
                }
            >
                <Link
                    className='px-2 font-medium hover:text-accent transition'
                    href='/products'
                >
                    Shop
                </Link>
                <Link
                    className='px-2 font-medium hover:text-accent transition'
                    href='/decor'
                >
                    Decor
                </Link>
                <Link
                    className='px-2 font-medium hover:text-accent transition'
                    href='/decor'
                >
                    Wall Art
                </Link>
                <Link
                    className='px-2 font-medium hover:text-accent transition'
                    href='/decor'
                >
                    Lighting
                </Link>
                <div className='bg-gray-400 w-[1px] h-4 mx-1'></div>
                <Link
                    className='px-2 font-medium hover:text-accent transition'
                    href='/decor'
                >
                    Gallery
                </Link>
                <Link
                    className='px-2 font-medium hover:text-accent transition'
                    href='/decor'
                >
                    Contact
                </Link>
            </div>
            <div className='block md:hidden '>
                <button
                    className='cursor-pointer  hover:text-accent transition py-1'
                    onClick={handleToggleSearch}
                    aria-label='Search'
                >
                    <Image
                        src='/images/products/menu.svg'
                        alt='Menu Icon'
                        width={20}
                        height={20}
                        className=' hover:text-accent transition'
                    />
                </button>
                {openMobileSearchModal && (
                    <div
                        className={
                            "hidden md:flex absolute   w-full left-0 top-16 lg:flex flex-col items-center bg-secondary px-3 py-3 gap-1 rounded-md transition"
                        }
                    >
                        <Link
                            className='px-2 py-2 font-medium hover:text-accent transition'
                            href='/products'
                        >
                            Shop
                        </Link>
                        <Link
                            className='px-2 py-2 font-medium hover:text-accent transition'
                            href='/decor'
                        >
                            Decor
                        </Link>
                        <Link
                            className='px-2 py-2 font-medium hover:text-accent transition'
                            href='/decor'
                        >
                            Wall Art
                        </Link>
                        <Link
                            className='px-2 py-2  font-medium hover:text-accent transition'
                            href='/decor'
                        >
                            Lighting
                        </Link>
                        <Link
                            className='px-2 py-2 font-medium hover:text-accent transition'
                            href='/decor'
                        >
                            Gallery
                        </Link>
                        <Link
                            className='px-2 py-2 font-medium hover:text-accent transition'
                            href='/decor'
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderMenu;
