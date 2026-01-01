import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-gray-300'>
            <div className='container mx-auto px-4 py-12'>
                {/* Main footer content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
                    {/* Brand & Contact Info */}
                    <div className='lg:col-span-2'>
                        {/* Logo */}
                        <div className='mb-6'>
                            <Link
                                href='/'
                                className='inline-block'
                                aria-current='page'
                            >
                                <div className='relative h-8 w-40'>
                                    <Image
                                        src='/images/logo.svg'
                                        alt='A light version of this website logo'
                                        fill
                                        className='object-contain'
                                        priority={false}
                                        sizes='160px'
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Address & Contact */}
                        <div className='space-y-1 text-sm'>
                            <p>Kathmandu</p>
                            <p>Bagmati, Nepal</p>
                            <div className='pt-2'>
                                <p>
                                    Tel:{" "}
                                    <Link
                                        href='tel:+22223631022'
                                        className='text-blue-300 hover:text-blue-200 transition-colors'
                                    >
                                        +977 9819828300
                                    </Link>
                                </p>
                                <p>
                                    Email:{" "}
                                    <Link
                                        href='mailto:rahulshah0710@hotmail.com'
                                        className='text-blue-300 hover:text-blue-200 transition-colors'
                                    >
                                        rahulshah0710@hotmail.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Homeable Menu */}
                    <div>
                        <h6 className='text-xs font-semibold uppercase tracking-wider mb-4'>
                            Homeable
                        </h6>
                        <div className='space-y-2'>
                            <Link
                                href='/shop'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Shop
                            </Link>
                            <div className='space-y-2 ml-2 border-l border-gray-700 pl-3'>
                                <Link
                                    href='/category/wall-art'
                                    className='block text-sm hover:text-white transition-colors'
                                >
                                    Wall Art
                                </Link>
                                <Link
                                    href='/category/vases'
                                    className='block text-sm hover:text-white transition-colors'
                                >
                                    Vases
                                </Link>
                                <Link
                                    href='/category/living-room'
                                    className='block text-sm hover:text-white transition-colors'
                                >
                                    Living Room
                                </Link>
                                <Link
                                    href='/category/lighting'
                                    className='block text-sm hover:text-white transition-colors'
                                >
                                    Lighting
                                </Link>
                                <Link
                                    href='/category/decor'
                                    className='block text-sm hover:text-white transition-colors'
                                >
                                    Decor
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Company Menu */}
                    <div>
                        <h6 className='text-xs font-semibold uppercase tracking-wider mb-4'>
                            Company
                        </h6>
                        <div className='space-y-2'>
                            <Link
                                href='/about'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                About
                            </Link>
                            <Link
                                href='/blog'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Blog
                            </Link>
                            <Link
                                href='/contact'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Contact
                            </Link>
                            <Link
                                href='/return-policy'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Return Policy
                            </Link>
                            <Link
                                href='/terms'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Terms of Use
                            </Link>
                            <Link
                                href='/privacy'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Privacy
                            </Link>
                        </div>
                    </div>

                    {/* Template Menu */}
                    <div>
                        <h6 className='text-xs font-semibold uppercase tracking-wider mb-4'>
                            Template
                        </h6>
                        <div className='space-y-2'>
                            <Link
                                href='/licenses'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                License
                            </Link>
                            <Link
                                href='/styleguide'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Style Guide
                            </Link>
                            <Link
                                href='/changelog'
                                className='block text-sm hover:text-white transition-colors'
                            >
                                Changelog
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Base */}
                <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <p className='text-xs'>
                            ©{currentYear} Company | Designed by{" "}
                            <a
                                href='https://github.com/rahulprasad0710'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-300 hover:text-blue-200 transition-colors'
                            >
                                Rahul Prasad
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className='text-xs'>
                            Code At:
                            <a
                                href='https://github.com/rahulprasad0710'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-300 hover:text-blue-200 transition-colors'
                            >
                                Rahul Prasad
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
