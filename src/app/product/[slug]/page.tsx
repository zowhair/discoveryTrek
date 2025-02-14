'use client'
import Link from 'next/link';
import { k2_concordia, nangaparbet, biafoHispar,indus_valley_itinerary,northSouth, skardu, helicopterSafari, hunzaTrip } from '@/app/data';
import StaticBlog from '../../component/blog/Blogs';
import { Arrange } from '../../component/Arrange/Arrange';

export default function Product(props: any) {
    const slug = props.params.slug;
    let data;
    if(slug == 'k2-expedition') {
        data = k2_concordia
    } else if(slug == 'nangaparbet') {
        data = nangaparbet
    } else if(slug == 'biafohispar') {
        data = biafoHispar
    } else if(slug == 'indusvalley') {
        data = indus_valley_itinerary
    } else if(slug =='northandsouth') {
        data = northSouth
    } else if(slug == 'skardutours') {
        data = skardu
    } else if(slug == 'helicopter-safari') {
        data = helicopterSafari
    } else if(slug == 'hunza-trip') {
        data = hunzaTrip
    }
    return (
        <>  
            <Arrange slug={slug} details={data} />

            <div className="productDetailPageContainer responsive">
                <div className="productPageTopHead">
                    <div className="productHeading">
                    </div>
                    <div className="productDescription">
                    </div>
                </div>
                <div className="productPageBottomHead">
                    <div className="productLeftContainer">
                        <div className="productTabs">
                            {/* <h1>{title} {slug}</h1> */}

                        </div>
                    </div>
                    <div className="productRightContainer">
                    </div>
                </div>
            </div>
            <style jsx global>{`
                html,
                body {
                    query: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
            {/* <StaticBlog /> */}
        </>

    )
}

