import UnderlineLink from '@modules/common/components/underline-link';
import Image from 'next/image';

const FooterCTA = () => {
    return (
        <div className="bg-rose-50 w-full">
            <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
                <div>
                    <h3 className="text-2xl-semi">Embrace the spirit of Brazilian gold in your everyday style</h3>
                    <div className="mt-6">
                        <UnderlineLink href="/store">
                            Explore our collection
                        </UnderlineLink>
                    </div>
                </div>

                <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
                    <Image
                        src="/images/brazilian_model_1.png"
                        alt="https://www.instagram.com/lelojewelry"
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                        className="absolute inset-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default FooterCTA;
