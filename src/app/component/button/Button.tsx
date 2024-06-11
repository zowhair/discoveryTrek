'use client';
import "./style.css"

import Link from "next/link"
export function Button(...props: any){
    console.log(props, ' btn tx')
    const {link,slug,textContent} = props[0]
    return(
        <>
            {
            props[0].type == "bookbtn" ? 
            <div className="book-now">
                <Link href={link ? `/${link}/${slug}`  : '' } className="btn">
                    <span>{textContent}</span> 
                </Link>
            </div>
            :
                <Link href={props[0].link ? props[0].link : '' } className="btn">
                    <span>{props[0].content}</span>
                </Link>
            }
        </>
    )
}