"use client";

import React, { useEffect } from "react";

import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { authClient } from "@/lib/auth-client";

const Header = () => {
    const { isPending, data } = authClient.useSession();
    useEffect(() => {
        console.log("Session updated:", { isPending, data });
    }, [isPending, data]);
    return (
        <div className=' bg-white fixed top-0 left-0   shadow-sm  z-50 w-full transition-all duration-500  '>
            <div className='container w-full  mx-auto flex flex-row justify-between items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 py-4 px-4'>
                <Link href='/'>
                    <Image
                        src='/images/logo_dark.svg'
                        alt='Logo'
                        width={128}
                        height={40}
                    />
                </Link>
                <HeaderMenu />
                <div>
                    <div className='flex w-full items-center gap-x-4 font-tertiary text-[15px]  tracking-wider lg:gap-x-4'>
                        <Searchbar />

                        <div className='bg-gray-400 w-[1px] h-4 mx-1'></div>

                        {data?.session?.token ? (
                            <div className='flex items-baseline gap-5'>
                                <div>
                                    <Link href='/'>
                                        {data?.user?.image ? (
                                            <Image
                                                src={data?.user?.image}
                                                alt='Logo'
                                                width={28}
                                                height={28}
                                                className='rounded-full'
                                            />
                                        ) : (
                                            <Image
                                                src={
                                                    "/images/products/circle-user.svg"
                                                }
                                                alt='Logo'
                                                width={20}
                                                height={20}
                                            />
                                        )}
                                    </Link>
                                </div>

                                {/* <Link
                                    className='cursor-pointer'
                                    href='/wishlist'
                                >
                                    <Image
                                        src={"/images/products/home-heart.svg"}
                                        alt='Logo'
                                        width={22}
                                        height={22}
                                        className='mt-1'
                                    />
                                </Link> */}
                                <Link href='/cart' className='cursor-pointer'>
                                    <Image
                                        src='/images/products/cart.svg'
                                        alt='Logo'
                                        width={20}
                                        height={18}
                                    />
                                </Link>
                            </div>
                        ) : (
                            <Link
                                href='/auth/login'
                                type='button'
                                className='transition tracking-widest  bg-accent px-4 py-1  text-white hover:bg-accent/90'
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
