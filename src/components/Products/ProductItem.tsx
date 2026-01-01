import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const ProductItem = (props: {
    product: IProductItem;
    currentCategory?: string | undefined;
}) => {
    const { product } = props;
    return (
        <Link
            href={`/products/${product.slug}`}
            key={product.id}
            className='cursor-pointer  shadow-none  hover:shadow-xs transition mb-4'
        >
            <Image
                src={product.image || "/placeholder.png"}
                alt={product.name}
                width={400}
                height={600}
                className='w-full  object-cover mb-4'
            />
            <div className='px-2 mb-2'>
                <h4 className='text-lg font-semibold mb-2'>{product.name}</h4>
                <p className='text-gray-600 mb-4'>
                    {product.short_description}
                </p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4'>
                        <span className='font-sans text-base leading-[1.4] font-medium tracking-tight text-secondary-dark '>
                            Rs.{product.sellingPrice}
                        </span>
                        <span className='text-gray-500 line-through'>
                            Rs.{product.mrpPrice}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
