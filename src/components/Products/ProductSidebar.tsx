import Link from "next/link";

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
    categoryId?: string | undefined;
};

const ProductSidebar = async (props: IProps) => {
    const { categoryList, categoryId } = props;

    const selectedCategoryId = categoryId ? Number(categoryId) : null;
    return (
        <div>
            <div>
                <h3 className='text-xl font-medium'>By Category</h3>
                <ul className='mt-4 space-y-2'>
                    <li>
                        <Link
                            href={`/products?page=1`}
                            className={`text-lg  ${
                                selectedCategoryId === null
                                    ? "bg-accent px-3 py-0.5 text-white "
                                    : "hover:text-accent transition"
                            }`}
                        >
                            All
                        </Link>
                    </li>
                    {categoryList.map((category) => (
                        <li key={category.id}>
                            <Link
                                href={`/products?category=${category.id}&page=1`}
                                className={`text-lg  ${
                                    selectedCategoryId === Number(category.id)
                                        ? "bg-accent px-3 py-0.5 text-white "
                                        : "hover:text-accent transition"
                                }`}
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
