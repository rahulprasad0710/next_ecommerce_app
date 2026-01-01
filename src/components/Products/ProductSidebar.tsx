import Link from "next/link";
import { getAllCategories } from "@/db/query/home";
import { unstable_cache } from "next/cache";

const ProductSidebar = async () => {
    const getCachedCategory = unstable_cache(
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

    const categoryList = await getCachedCategory();

    return (
        <div>
            <div>
                <h3 className='text-xl font-medium'>By Category</h3>
                <ul className='mt-4 space-y-2'>
                    <li>
                        <Link
                            href={`/products`}
                            className=' text-lg hover:text-accent transition'
                        >
                            All
                        </Link>
                    </li>
                    {categoryList.map((category) => (
                        <li key={category.id}>
                            <Link
                                href={`/products?category=${category.slug}`}
                                className='text-lg hover:text-accent transition'
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductSidebar;
