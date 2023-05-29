import UnderlineLink from '@modules/common/components/underline-link';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="h-[90vh] w-full relative">
            <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
                <div className="bg-black/5 p-3">
                    <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
                        Authentic everyday jewelry crafted in Brazil
                    </h1>
                    <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
                        Discover our Gold collection, brought from the vibrant culture and rich heritage of Brazil.
                        From delicate necklaces to intricate bracelets, each creation blends traditional craftsmanship
                        and contemporary design, for effortless elegance and versatility in your everyday style.
                    </p>
                    <UnderlineLink href="/store">View collections</UnderlineLink>
                </div>
            </div>
            <Image
                src="/images/home/hero_white.jpeg"
                layout="fill"
                loading="eager"
                priority={true}
                quality={90}
                objectFit="cover"
                alt="https://www.instagram.com/lelojewelry"
                className="absolute inset-0"
                draggable="false"
            />
        </div>
    );
};

export default Hero;
