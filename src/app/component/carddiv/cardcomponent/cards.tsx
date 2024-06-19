import Link from 'next/link';
import './style.css'
import { FaStar, FaUser, FaCalendarDays, FaLocationDot, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

export default function CardComponent({data}: any) {
    return(
        <div className="items_wrap  margin-bottom_top">
            <Link href={data[0].slug}>
                <div className="item">
                    <div className="image_wrapper">
                        <div className="image flex">
                            <Image className='image-z img' src="/image/Rakaposhi.jpg" alt="" width={900} height={650} />
                            <span className="offer bgcolor">15% OFF</span>
                        </div>
                        <div className="card_icon-wrap flex align_center justify_space-between">
                            <div className="icon_wrap flex">
                                <div className="card_icon flex align_center">
                                    <div className="icon">
                                        <FaCalendarDays />
                                    </div>
                                    <span className="card_icon-text">4 days</span>
                                </div>
                                <div className="card_icon flex align_center">
                                    <div className="icon">
                                        <FaUser />                                          
                                    </div>
                                    <span className="card_icon-text">50</span>
                                </div>
                            </div>
                            <div className="card_start-wrap">
                                <div className="start_icon">
                                    <FaStar />                                      
                                    <FaStar />                                      
                                    <FaStar />                                      
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_content">
                        <h3 className="sub_title text_capitalize">{data[0].title}</h3>
                        <div className="location_wrap flex">
                            <div className="location-icon " >
                                <FaLocationDot />
                            </div>
                            <span className="location-text">Gilgit ,Baltistan</span>
                        </div>
                        <div className="info">
                            <div className="info_wrap flex align_center justify_space-between">
                                <div className="info_text">
                                    <h4 className="info_title text_capitalize">from</h4>
                                    <p className="price text_capitalize"> rs 8,000<span className="compare_price text_capitalize">rs 9,000</span></p>
                                </div>
                                <div className="explore flex align_center">
                                    <span className="ex-text text_capitalize">explore</span>
                                    <div className="arrow">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}