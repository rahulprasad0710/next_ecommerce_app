"use client";

import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [openMobileSearchModal, setOpenMobileSearchModal] =
        useState<boolean>(false);
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim().length >= 3) {
            router.push(
                `/products?search_query=${encodeURIComponent(searchQuery)}`
            );
            setOpenMobileSearchModal(false);
        } else {
            // Optional: show alert or feedback
            console.log("Please enter at least 3 characters");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleClear = () => {
        setSearchQuery("");
    };

    const handleToggleSearch = () => {
        setOpenMobileSearchModal(!openMobileSearchModal);
    };

    return (
        <div className=''>
            <div className='block md:hidden '>
                <button
                    className='cursor-pointer  hover:text-accent transition py-1'
                    onClick={handleToggleSearch}
                    aria-label='Search'
                >
                    <Image
                        src='/images/products/search.svg'
                        alt='Search Icon'
                        width={20}
                        height={20}
                        className=' hover:text-accent transition'
                    />
                </button>
            </div>
            <div
                className={
                    openMobileSearchModal
                        ? "absolute block  w-full left-0 top-16 lg:flex items-center bg-secondary px-3 py-2 rounded-md transition"
                        : "hidden md:block  w-full left-0 top-16 lg:flex items-center bg-secondary px-3 py-2 rounded-md transition"
                }
            >
                <div className='flex w-full items-center bg-secondary '>
                    <input
                        type='text'
                        className='focus:outline-none w-full bg-secondary placeholder:text-muted-foreground'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyPress} // Optional: press Enter to search
                        placeholder='Search products...'
                    />
                    {searchQuery.length > 0 && (
                        <button
                            className='cursor-pointer mr-2'
                            onClick={handleClear}
                            aria-label='Clear Search'
                        >
                            <Image
                                src='/images/products/close.svg'
                                alt='Search Icon'
                                width={14}
                                height={14}
                            />
                        </button>
                    )}
                    <div className='bg-gray-400 w-[1px] h-4 mx-1'></div>
                    <button
                        className='cursor-pointer ml-2 hover:text-accent transition'
                        onClick={handleSearch}
                        aria-label='Search'
                    >
                        <Image
                            src='/images/products/search.svg'
                            alt='Search Icon'
                            width={20}
                            height={20}
                            className='mt-1 hover:text-accent transition'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
