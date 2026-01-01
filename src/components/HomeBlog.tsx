import Image from "next/image";
import Link from "next/link";
import { getAllCategories } from "@/db/query/home";
import { unstable_cache } from "next/cache";

const HomeBlog = async () => {
    const categoryList = [
        {
            id: 1,
            name: "Room Makeover Ideas on a Budget",
            date: "August 10, 2025",
            image: "https://pmapublic2.s3.ap-south-1.amazonaws.com/blog1.jpeg",
        },
        {
            id: 2,
            name: "The World of Wall Art by Vanessa Green",
            date: "June 10, 2025",
            image: "https://pmapublic2.s3.ap-south-1.amazonaws.com/blog2.jpeg",
        },
        {
            id: 3,
            name: "Home Tour: Elegant and Warm ",
            date: "Jan 15, 2024",
            image: "https://pmapublic2.s3.ap-south-1.amazonaws.com/blog3.jpeg",
        },
    ];

    return (
        <div className=' px-4 md:px-2 lg:px-0   mx-auto container '>
            <div className='section-title  py-4 mb-6'>
                <div className='caption-title text-gray-600'>Explore</div>
                <h1 className='heading text-2xl'>Our Blog</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {categoryList.map((category) => (
                    <Link
                        key={category.id}
                        className='cursor-pointer'
                        href={`/category/${category.id}`}
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
                        <div className=' p-4'>
                            <p className='text-gray-600'>{category.date}</p>
                            <h3 className='text-xl font-normal mb-2'>
                                {category.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeBlog;
