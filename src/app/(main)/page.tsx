// import Footer from "@/components/Footer";
import HomeBlog from "@/components/HomeBlog";
import HomeCategory from "@/components/HomeCategory";
import HomeProducts from "@/components/HomeProducts";
import SwiperImages from "@/components/SwiperImages";

export default function Home() {
    return (
        <div className='relative'>
            <SwiperImages />
            <HomeCategory />
            <div className='py-16'>
                <HomeProducts tag='NEW_ARRIVAL' />
            </div>
            <HomeBlog />
        </div>
    );
}
