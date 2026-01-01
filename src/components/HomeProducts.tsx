import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/db/query/home";
import { unstable_cache } from "next/cache";

type IProps = {
    tag?: string;
};

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

const HomeProducts = async (props: IProps) => {
    const { tag } = props;
    const getCachedData = unstable_cache(
        async () => {
            const result = await getAllProducts(tag, undefined, 1);
            console.log("LOG: ~ HomeProduct ~ result:", result);
            return result;
        },
        ["new-arrival-products"],
        {
            tags: ["new-arrival-products"],
        }
    );

    const { products, pagination } = await getCachedData();

    console.log({
        products,
        pagination,
    });

    return (
        <div className=' px-4 md:px-2 lg:px-0   mx-auto container py-16 '>
            <div className='section-title align-center mb-6'>
                <div className='caption-title text-gray-600'>Winter Season</div>
                <h1 className='heading text-2xl'>New Arrivals</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {products?.map((product: IProductItem) => (
                    <Link
                        key={product.id}
                        className='cursor-pointer'
                        href={`/products/${product.slug}`}
                    >
                        <div className='relative  w-full '>
                            <Image
                                src={product.image || "/images/placeholder.jpg"}
                                alt={product.name}
                                width={1200}
                                height={800}
                                loading='lazy'
                                className='w-full max-w-full inline-block align-middle'
                            />
                        </div>
                        <div className=' py-4'>
                            <h3 className='text-lg font-normal'>
                                {product.name}
                            </h3>
                            <div className='text-md text-gray-600'>
                                {product.description}
                            </div>
                            <p className='font-medium text-lg mt-2'>
                                $.{product.sellingPrice} USD
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;
