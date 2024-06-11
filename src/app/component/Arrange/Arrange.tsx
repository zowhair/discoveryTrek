
import Image from "next/image"
import { Round } from "../round/Round"
import { Stay } from "../stay/Stay"
import './arrange.css'
import { Text } from "@/app/component/text/Text"
import { Highlights } from "../highlight/Highlights"
import { Bluetext } from "../bluetext/Bluetext"


export function Arrange(...props: any){
    const slug = props[0].slug ? props[0].slug : ''
    const details = props[0].details
    console.log("arrange ", details[0].banner)
 /*
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: details[0]?.title ? details[0]?.title : "tour",
      image: details[0]?.banner,
      description: details[0]?.description,
    }
    */
    return(

        <div className="product-banner">
            <Image
                className="product-image-banner" 
                src={details[0].banner}
                alt="banner image"
                width={500}
                height={500}
            />
            <div className="container-block">
                <div className="space-manager">
                    <div className="arrange-container-left">
                    {/* <Product/> */}

                        <div className="mera-peak margin">
                            <div className="container-block">
                                {details[0]?.title ? 
                                <h1 className="mera-title">{details[0]?.title}</h1>
                                 :                                
                                <h1 className="mera-title">{slug}</h1>
                                }
                            </div>
                        </div>
                        <Bluetext />
                        <div className="blue-buttons-body">
                            <div className="blue-buttons">
                            <Highlights text="Distance: 15 - 20 km per day" />
                            <Highlights text="More than 1000 m ascent per day" />

                            </div>
                        </div>
                        <div className="margin">
                            <div className="container-block">
                                <ul className="anchor-list">
                                    <li className="anchor-list-item">
                                        <a href="#">overview</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        {/* <Greytext/> */}
                        <Text itenerary={details[0].itenerary} />
                        {/* <Content/> */}
                    </div>
                    <div className="arrange-container-right">
                        <Stay price={details[0].price} slug={slug} textContent="Book now"   />
                        {/* <Round/> */}
                        <div className="margin">
                            <div className="container-block">
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            /> */}
        </div>
        
    )
    
}