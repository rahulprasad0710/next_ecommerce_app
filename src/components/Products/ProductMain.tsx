import ProductItem from "./ProductItem";
import React from "react";

type IProductItem = {
    id: number;
    title: string;
    short_description: string;
    image: string;
    mrp: number;
    selling_price: number;
};

const ProductMain = (props: { productList: IProductItem[] }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-4 lg:mx-0'>
            {props.productList.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductMain;
