'use client';
import { useState } from "react";
import Pakages from "../../component/pakages/pakages";
import Services from "../../component/services/services";
import Testimonial from "../../component/testimonial/testimonial";
import { k2_concordia, nangaparbet, biafoHispar } from "@/app/data";

export default function Service({params}: string) {
    const slug_ = params.slug
    let data = []
    let category = ''
    
    if(slug_ == 'trekking') {
        console.log("you'r gonna see trekking page")
        data.push(k2_concordia)
        data.push(biafoHispar)
    } else if(slug_ == 'expedition') {
        data.push(k2_concordia)
        data.push(nangaparbet)
    }
    return(
        <>
            {/* <Services /> */}
            <Pakages data={data} />
            {/* <Testimonial /> */}
        </>
    )
}