import Image from "next/image";
import "./services.css"
import Link from "next/link";

export default function AllServices() {
    const data = [
        {
            slug: '/services/trekking',
            title: 'Trekking',
            image: '/image/Rectangle 17.png'
        },
        {
            slug: '/services/expedition',
            title: 'Expedition',
            image: '/image/Rectangle 17.png'
        }
    ]
    return (
        <div className="services__container">
            <div className="services_wrapper responsive">
                <div className="title">Our Services</div>

                <div className="catalog">
                    {data && data.map((tour:any, index:any) => (
                        <div className="collection" key={index}>
                            <Link href={tour.slug}>
                                <Image src={tour.image} width={800} height={400} alt="collection trekking" className='img' />
                                <span className="text">{tour.title}</span>
                                <div className="overlay"></div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}