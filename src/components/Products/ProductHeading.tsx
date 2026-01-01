import Link from "next/link";
import React from "react";

type IProps = {
    categoryList: {
        id: string;
        description: string;
        name: string;
        slug: string;
        image: string | null;
        parentId: number | null;
        isActive: boolean | null;
        createdAt: string | null;
        updatedAt: string | null;
    }[];

    categoryId: string | undefined;
    searchQuery: string | undefined;
};

const ProductHeading = async (props: IProps) => {
    const { categoryList, categoryId, searchQuery } = props;
    const currentCategory = categoryList.find(
        (category) => category.id === categoryId
    );

    return (
        <div className='lg:col-start-2 lg:row-start-1 mb-6'>
            <div className='text-sm text-gray-500 mb-2'>
                <Link className='px-2' href='/'>
                    <span>Home</span>
                </Link>
                /
                {currentCategory ? (
                    <Link
                        className='px-2'
                        href={`/products?category=${currentCategory.id}`}
                    >
                        <span className='px-2'>{currentCategory.name}</span>
                    </Link>
                ) : (
                    <Link className='px-2' href='/products'>
                        <span className='px-2'>Products</span>
                    </Link>
                )}
                {searchQuery && (
                    <>
                        <span className='px-2'>Search: </span>
                        <span className='font-medium text-gray-700'>
                            {searchQuery}
                        </span>
                    </>
                )}
            </div>
            <h3 className='text-2xl'>
                {currentCategory ? currentCategory.name : "All Products"}
            </h3>
        </div>
    );
};

export default ProductHeading;
