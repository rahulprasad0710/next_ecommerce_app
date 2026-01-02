import AddToCartButton from "@/components/AddToCartButton";
import HomeProducts from "@/components/HomeProducts";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import { getProductBySlug } from "@/db/query/home";
import { unstable_cache } from "next/cache";

export const dynamicParams = false;

type IProductItem = {
    id: string;
    categoryId: string;
    description: string;
    name: string;
    slug: string;
    sellingPrice: string;
    image: string | null;
    short_description: string | null;
    mrpPrice: string;
    stock: number | null;
    isActive: boolean | null;
    tag: string;
};

export const metadata: Metadata = {
    title: "Product Details",
    description: "Detailed view of the selected product.",
};

const ProductDetailsPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    const product = await getProductBySlug(slug);

    return (
        <div className='relative min-h-[80vh] mt-12'>
            <div className='px-8 lg:x-0'>
                {product && (
                    <div className='px-4 md:px-2 lg:px-0   mx-auto max-w-7xl py-12  lg:py-16 md:mt-16 '>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-9  min-h-[80vh] gap-16'>
                            <div className='w-full col-span-1 lg:col-span-5 '>
                                {product.image && (
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={1200} // real image width
                                        height={800} // real image height
                                        className='w-full h-auto mb-4'
                                        sizes='100vw'
                                        priority
                                    />
                                )}
                            </div>

                            <div className='col-span-1 lg:col-span-4  px-2 lg:px-6'>
                                <div>
                                    <div className='text-sm text-gray-500 mb-3'>
                                        <Link className='px-2' href='/'>
                                            <span>Home</span>
                                        </Link>
                                        /
                                        <Link className='px-2' href='/products'>
                                            <span className='px-2'>
                                                Products
                                            </span>
                                        </Link>
                                        /
                                        <span className='px-2'>
                                            {product.name}
                                        </span>
                                    </div>
                                    <h1 className='text-3xl  font-normal mb-1'>
                                        {product.name}
                                    </h1>

                                    <p className=' text-gray-600 mb-4'>
                                        {product.description}
                                    </p>
                                    <p className='text-xl font-semibold'>
                                        Rs.{product.sellingPrice}
                                    </p>
                                </div>
                                <div className='border-b border-t border-gray-300 py-4 my-4'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center space-x-3'>
                                            <span className='text-gray-700 font-medium'>
                                                Quantity:
                                            </span>
                                            <select
                                                className='
                                                    border border-gray-300 
                                                    
                                                    px-3 py-2 
                                                    cursor-pointer 
                                                    bg-white 
                                                    text-gray-800 
                                                    font-semibold
                                                    focus:outline-none 
                                                    focus:ring-2 focus:ring-accent 
                                                    transition
                                                    duration-200 '
                                                defaultValue='1'
                                            >
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, i) => (
                                                        <option
                                                            key={i + 1}
                                                            value={i + 1}
                                                        >
                                                            {i + 1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        <AddToCartButton />
                                    </div>
                                </div>
                                <div className='product-details'>
                                    <div className='mb-3'>
                                        <h6 className='text-lg font-semibold mb-2'>
                                            Highlights
                                        </h6>
                                        <div className='large-text'>
                                            <p>
                                                Materials: acrylic paint, paint,
                                                plywood, wood glue, glue, metal
                                                hanging kit, upcycled wood
                                                scraps, metal hanging system,
                                                nails, reclaimed wood, wood,
                                                construction adhesive
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-lg font-semibold mb-2'>
                                            Dimensions:
                                        </h6>
                                        <p>Height: 30 inches</p>
                                        <p>Width: 60 inches</p>
                                        <p>Depth: 1.5 inches</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-lg font-semibold mb-2'>
                                            Description
                                        </h6>
                                        <div className='large-text'>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.{" "}
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-lg font-semibold mb-2'>
                                            Shipping Info
                                        </h6>
                                        <div className='large-text'>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipiscing elit sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='pb-12'>
                    <HomeProducts tag='NEW_ARRIVAL' />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
