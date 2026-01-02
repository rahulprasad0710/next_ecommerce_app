import Image from "next/image";
import Link from "next/link";
import { getAllCategories } from "@/db/query/home";
import { unstable_cache } from "next/cache";

const HomeCategory = async () => {
    const getCachedRoom = unstable_cache(
        async () => {
            const result = await getAllCategories();
            console.log("LOG: ~ HomeCategory ~ result:", result);
            return result;
        },
        ["all-categories"],
        {
            tags: ["categories"],
        }
    );

    const categoryList = await getCachedRoom();

    return (
        <div className=' px-4 md:px-2 lg:px-0   mx-auto container '>
            <div className='section-title text-center py-4 mb-6'>
                <div className='caption-title text-gray-600'>Get Started</div>
                <h1 className='heading text-2xl'>Find Something You Love</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {categoryList.map((category) => (
                    <Link
                        key={category.id}
                        className='cursor-pointer'
                        href={`/products?category=${category.id}&page=1`}
                    >
                        <div className='relative  w-full '>
                            <Image
                                src={
                                    category.image || "/images/placeholder.jpg"
                                }
                                alt={category.name}
                                width={1200}
                                height={800}
                                loading='lazy'
                                className='w-full max-w-full inline-block align-middle'
                            />
                        </div>
                        <div className='text-center p-4'>
                            <h3 className='text-xl font-normal mb-2'>
                                {category.name}
                            </h3>
                            <p className='text-gray-600'>
                                {category.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeCategory;
