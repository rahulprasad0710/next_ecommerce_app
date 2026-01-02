import { getAllCategories, getAllProducts } from "@/db/query/home";

import Link from "next/link";
import ProductHeading from "@/components/Products/ProductHeading";
import ProductMain from "@/components/Products/ProductMain";
import ProductSidebar from "@/components/Products/ProductSidebar";
import React from "react";
import { unstable_cache } from "next/cache";

interface IPageProps {
    searchParams?: Promise<{
        category?: string;
        page?: string;
        search_query?: string;
    }>;
}

const ProductsPage = async ({ searchParams }: IPageProps) => {
    const params = await searchParams;
    console.log("LOG: ~ ProductsPage ~ params:", params);
    const currentPage = Number(params?.page ?? "1");
    const searchQuery = params?.search_query ?? undefined;
    const categoryId = params?.category ?? undefined;

    const getCachedCategory = unstable_cache(
        async () => {
            const result = await getAllCategories();
            return result;
        },
        ["all-categories"],
        {
            tags: ["categories"],
        }
    );

    const categoryList = await getCachedCategory();

    const { products, pagination } = await getAllProducts(
        undefined,
        Number(categoryId) || undefined,
        currentPage,
        searchQuery
    );

    return (
        <section className='px-4 md:px-2 lg:px-0   mx-auto container py-16 my-12 md:my-16'>
            <div
                className='
                    grid
                    grid-cols-1
                    lg:grid-cols-[220px_1fr]
                    gap-x-6
                    gap-y-5
    '
            >
                <ProductHeading
                    searchQuery={searchQuery}
                    categoryId={categoryId}
                    categoryList={categoryList}
                />
                <div
                    className='
                        lg:col-start-1
                        lg:row-start-2
                        self-start
                        grid
                        gap-9
                        relative lg:sticky
                        top-0 lg:top-24
                        mb-6 lg:mb-0
      '
                >
                    <ProductSidebar
                        categoryId={categoryId}
                        categoryList={categoryList}
                    />
                </div>

                {/* Products */}
                <div className='lg:col-start-2 lg:row-start-2'>
                    <ProductMain productList={products} />
                    <div>
                        <div className='flex gap-2 mt-6 justify-end '>
                            <Link
                                href={
                                    currentPage > 1
                                        ? `/products?page=${currentPage - 1}`
                                        : "#"
                                }
                                aria-disabled={currentPage <= 1}
                                tabIndex={currentPage <= 1 ? -1 : 0}
                                className={`px-3 py-1 border transition
                                ${
                                    currentPage <= 1
                                        ? "border-gray-300 text-gray-400 pointer-events-none cursor-not-allowed"
                                        : "border-accent text-accent hover:bg-accent hover:text-white"
                                }
  `}
                            >
                                Prev
                            </Link>

                            <Link
                                href={
                                    currentPage < pagination.totalPages
                                        ? `/products?category=${categoryId}&page=${
                                              currentPage + 1
                                          }`
                                        : "#"
                                }
                                aria-disabled={
                                    currentPage >= pagination.totalPages
                                }
                                tabIndex={
                                    currentPage >= pagination.totalPages
                                        ? -1
                                        : 0
                                }
                                className={`px-3 py-1 border transition
                                    ${
                                        currentPage >= pagination.totalPages
                                            ? "border-gray-300 text-gray-400 pointer-events-none cursor-not-allowed"
                                            : "border-accent text-accent hover:bg-accent hover:text-white"
                                    }
                                `}
                            >
                                Next
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
