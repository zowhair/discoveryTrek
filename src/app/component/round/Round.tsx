

import Image from "next/image";
import { Button } from "../button/Button";

export function Round(){
    return(
        <div className="colored-container container-block ">
            <div className="colored-flex_component">
                <div className="expert">Contact our Trekking Expert</div>
                <div className="image-container">
                    <Image src="/images/shams.jpg"  alt="image" className='img' />
                </div>
                <div className="expert">Sajid Sadpara</div>
                <Button content="Ask your question"/>
            </div>

        </div>
    );
}
