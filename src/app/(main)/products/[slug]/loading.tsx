type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UserLoadingPage = async () => {
    return (
        <div className='relative min-h-[80vh] mt-12'>
            <div className='px-8 lg:x-0'>
                <div className='px-4 md:px-2 lg:px-0 mx-auto max-w-7xl py-12 lg:py-16 md:mt-16'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-9 min-h-[80vh] gap-16'>
                        {/* Image Skeleton */}
                        <div className='w-full col-span-1 lg:col-span-5'>
                            <div className='w-full h-[600px] bg-gray-200 animate-pulse'></div>
                        </div>

                        {/* Content Skeleton */}
                        <div className='col-span-1 lg:col-span-4 px-2 lg:px-6'>
                            {/* Breadcrumb Skeleton */}
                            <div className='text-sm mb-3'>
                                <div className='flex items-center'>
                                    <div className='h-4 bg-gray-200 w-16 animate-pulse'></div>
                                    <div className='mx-2 h-4 w-4 bg-gray-200 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-24 animate-pulse'></div>
                                    <div className='mx-2 h-4 w-4 bg-gray-200 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-32 animate-pulse'></div>
                                </div>
                            </div>

                            {/* Title Skeleton */}
                            <div className='mb-3'>
                                <div className='h-10 bg-gray-200 w-3/4 mb-2 animate-pulse'></div>
                            </div>

                            {/* Description Skeleton */}
                            <div className='mb-6'>
                                <div className='h-4 bg-gray-200 w-full mb-2 animate-pulse'></div>
                                <div className='h-4 bg-gray-200 w-5/6 mb-2 animate-pulse'></div>
                                <div className='h-4 bg-gray-200 w-4/6 mb-2 animate-pulse'></div>
                            </div>

                            {/* Price Skeleton */}
                            <div className='mb-6'>
                                <div className='h-8 bg-gray-200 w-32 animate-pulse'></div>
                            </div>

                            {/* Add to Cart Section Skeleton */}
                            <div className='border-b border-t border-gray-300 py-4 my-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='h-6 bg-gray-200 w-20 animate-pulse'></div>
                                        <div className='h-12 bg-gray-200 w-20 animate-pulse'></div>
                                    </div>
                                    <div>
                                        <div className='h-12 bg-gray-200 w-32 animate-pulse'></div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Details Skeleton */}
                            <div className='product-details'>
                                {/* Highlights */}
                                <div className='mb-6'>
                                    <div className='h-7 bg-gray-200 w-32 mb-3 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-full mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-11/12 mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-10/12 mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-9/12 mb-2 animate-pulse'></div>
                                </div>

                                {/* Dimensions */}
                                <div className='mb-6'>
                                    <div className='h-7 bg-gray-200 w-40 mb-3 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-48 mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-44 mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-36 mb-2 animate-pulse'></div>
                                </div>

                                {/* Description */}
                                <div className='mb-6'>
                                    <div className='h-7 bg-gray-200 w-36 mb-3 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-full mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-11/12 mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-10/12 mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-9/12 animate-pulse'></div>
                                </div>

                                {/* Shipping Info */}
                                <div className='mb-6'>
                                    <div className='h-7 bg-gray-200 w-40 mb-3 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-full mb-2 animate-pulse'></div>
                                    <div className='h-4 bg-gray-200 w-5/6 animate-pulse'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HomeProducts Loading Skeleton */}
                <div className='px-4 md:px-2 lg:px-0 mx-auto max-w-7xl py-12'>
                    <div className='h-8 bg-gray-200 w-48 mb-8 animate-pulse'></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className='space-y-4'>
                                <div className='h-64 bg-gray-200 animate-pulse'></div>
                                <div className='h-6 bg-gray-200 w-3/4 animate-pulse'></div>
                                <div className='h-5 bg-gray-200 w-1/3 animate-pulse'></div>
                                <div className='h-10 bg-gray-200 w-full animate-pulse'></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLoadingPage;
