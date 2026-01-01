import Image from "next/image";
import ProductMain from "@/components/Products/ProductMain";
import ProductSidebar from "@/components/Products/ProductSidebar";
import React from "react";
import { getAllProducts } from "@/db/query/home";
import { unstable_cache } from "next/cache";

const ProductsPage = async () => {
    const productList = [
        {
            id: 1,
            title: "Wooden Wall Shelf",
            short_description:
                "Handmade ply shelf to decorate your living room or bedroom.",
            image: "/images/products/pp1.jpeg",
            mrp: 2999,
            selling_price: 2699,
        },
        {
            id: 2,
            title: "Ceramic Flower Pot - Medium",
            short_description:
                "Elegant ceramic flower pot for indoor plants and décor.",
            image: "/images/products/pp2.jpeg",
            mrp: 1499,
            selling_price: 1299,
        },
        {
            id: 3,
            title: "Stainless Steel Lunch Box",
            short_description:
                "Compact and durable lunch box, perfect for daily meals.",
            image: "/images/products/pp3.jpeg",
            mrp: 1099,
            selling_price: 999,
        },
        {
            id: 4,
            title: "Ply Wooden Coasters - Set of 4",
            short_description:
                "Handcrafted coasters to protect your surfaces in style.",
            image: "/images/products/pp4.jpeg",
            mrp: 899,
            selling_price: 799,
        },
        {
            id: 5,
            title: "Glass Water Bottle with Bamboo Lid",
            short_description:
                "Eco-friendly water bottle, ideal for home or office use.",
            image: "/images/products/pp5.jpeg",
            mrp: 1299,
            selling_price: 1099,
        },
        {
            id: 6,
            title: "Kitchen Storage Container - 3pcs Set",
            short_description:
                "Durable airtight containers for keeping your pantry organized.",
            image: "/images/products/pp6.jpeg",
            mrp: 1499,
            selling_price: 1299,
        },
    ];

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
                {/* Header */}
                <div className='lg:col-start-2 lg:row-start-1 mb-6'>
                    <div className='text-sm text-gray-500 mb-2'>Shop</div>
                    <h3 className='text-2xl'>All Products</h3>
                </div>

                {/* Sidebar */}
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
                    <ProductSidebar />
                </div>

                {/* Products */}
                <div className='lg:col-start-2 lg:row-start-2'>
                    <ProductMain productList={productList} />
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
