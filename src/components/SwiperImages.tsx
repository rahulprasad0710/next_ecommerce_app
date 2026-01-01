import Image from "next/image";
import Link from "next/link";

const SwiperImages = () => {
    const ImageList = "/images/h2.avif";

    return (
        <div className='px-4 md:px-2 lg:px-0   mx-auto container py-16 my-12 md:my-16'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  h-[80vh]'>
                <div className='order-2 md:order-1 relative h-full bg-secondary flex justify-center items-center'>
                    <div className=' w-[280px] md:w-[340px] lg:w-[440px]  py-16 text-center text-white '>
                        <h1 className='mx-auto mb-6  text-black text-[40px]   lg:text-[64px]'>
                            Home Decor Collection
                        </h1>
                        <div className='mb-12 font-light text-amber-800  '>
                            A wide collection of extraordinary products, from
                            unique handmade pieces to vintage gems
                        </div>
                        <Link
                            href='/products'
                            className='btn px-8 py-4 cursor-pointer bg-accent text-white '
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className='order-1 md:order-2 relative w-full aspect-square md:aspect-auto md:h-[80vh]'>
                    <Image
                        src={ImageList}
                        alt='Logo'
                        fill
                        sizes='100vw'
                        loading='lazy'
                        className='inline-block w-full max-w-full align-middle object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default SwiperImages;
