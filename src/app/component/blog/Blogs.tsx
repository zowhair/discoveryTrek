import Link from "next/link"
import Image from "next/image"

import { k2, Nangaparbet, Gasherbrum, BroadPeak, Gasherbrum_II, Gasherbrum_IV, Masherbrum, guidToSkardu, k2ExpeditionPreparation, mountainTrekking, nangaparbetTricks, sakrduTourWithUs } from '../../blog-data';

export default function StaticBlog() {
    const blogs = [k2, Nangaparbet, Gasherbrum, BroadPeak, Gasherbrum_II, Gasherbrum_IV, guidToSkardu, k2ExpeditionPreparation, mountainTrekking, nangaparbetTricks, sakrduTourWithUs];

    return (
        <div className="collection">
            <div className="blog_title">
                <h1>Blogs</h1>
            </div>
            <div className="container-block flex-row">
                {blogs && blogs.map((blog, index) => (
                    <Link href={'/blog/'+blog.slug} className=" width-fixed " key={index}>
                        <div className="blog__link">
                            {/* <Image className="blog-card" src="/images/k2-2inner.JPG" width={240} height={200} alt="Image of K2" /> */}
                            <div className="flex-row_nowrap">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                <p className="h3">where you want to go
                                </p>

                            </div>

                            <span className="margin-top">{blog.metadata_}</span>
                            <div className="flex-row square-blog_row">
                                <p className="square-blog">book a trip</p>
                                <p className="square-blog">take aticket</p>

                            </div>
                            <a className="btn" >
                                <span>save and watch later</span>
                            </a>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}