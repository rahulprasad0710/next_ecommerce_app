import Image from "next/image";
import Link from "next/link";

const SwiperImages = () => {
    const ImageList = "/images/h2.avif";

    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-16 h-[80vh]'>
                <div className='relative h-full bg-secondary flex justify-center items-center'>
                    <div className=' px-48 mb-12 mx-auto text-center text-white '>
                        <h1 className='mx-auto mb-6  text-black text-[32px]   lg:text-[64px]'>
                            Home Decor Collection
                        </h1>
                        <div className='mb-12 font-light text-amber-800  '>
                            A wide collection of extraordinary products, from
                            unique handmade pieces to vintage gems
                        </div>
                        <Link
                            href='/rooms'
                            className='btn px-12 py-4 cursor-pointer bg-accent text-white '
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <Image
                    src={ImageList}
                    alt='Logo'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-[80vh] object-cover'
                />
            </div>
        </div>
    );
};

export default SwiperImages;
