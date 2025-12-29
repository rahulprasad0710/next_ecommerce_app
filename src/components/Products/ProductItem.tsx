import Image from "next/image";
import React from "react";

type IProductItem = {
    id: number;
    title: string;
    short_description: string;
    image: string;
    mrp: number;
    selling_price: number;
};

const ProductItem = (props: { product: IProductItem }) => {
    const { product } = props;
    return (
        <div
            key={product.id}
            className='cursor-pointer  shadow-none  hover:shadow-xs transition mb-4'
        >
            <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={600}
                className='w-full  object-cover mb-4'
            />
            <div className='px-2 mb-2'>
                <h4 className='text-lg font-semibold mb-2'>{product.title}</h4>
                <p className='text-gray-600 mb-4'>
                    {product.short_description}
                </p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4'>
                        <span className='font-sans text-base leading-[1.4] font-medium tracking-tight text-secondary-dark '>
                            ${product.selling_price}
                        </span>
                        <span className='text-gray-500 line-through'>
                            ${product.mrp}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
