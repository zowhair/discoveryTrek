import Image from 'next/image'
import './style.css'
export default function Distination() {
    return(
        <>
            <section className="distination">
    <div className="container">
        <div className="wrapper responsive flex align_center justify_space-between">
            <div className="alpha displayflex">
                <div className="item_wrap">
                    <div className="item displayflex">
                        <div className='image'>
                            <Image alt="" src="/image/Rectangle 17.png" />
                        </div>
                    </div>
                </div>
                <div className="item_wrap second_items">
                    <div className="item displayflex">
                        
                        <div className='image'>
                            <Image alt="" src="/image/Rectangle 17.png" />
                        </div>
                    </div>
                </div>
                <div className="item_wrap">
                    <div className="item displayflex">
                        <div className='image'>
                            <Image alt="" src="/image/Rectangle 17.png" />
                        </div>
                    </div>
                </div>
                <div className="item_wrap second_items">
                    <div className="item displayflex">
                        <div className='image'>
                            <Image alt="" src="/image/Rectangle 17.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="beta">
                <div className="content">
                    <h3 className="title">Explore the Unseen with Discovery Tours Askoli</h3>
                    <p className="text">Embark on a journey of a lifetime through the breathtaking landscapes of K2 and beyond. Our expert guides ensure a safe and unforgettable adventure, from serene valleys to challenging peaks. Discover hidden gems and create lasting memories with Discovery Tours Askoli.</p>
                    <div className="history-info butn">
                        <a  href='#'>explore our tours</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}