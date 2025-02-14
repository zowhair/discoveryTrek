import Image from "next/image";

import './text.css'

export function Text({...props}: any){
    console.log("text ", props)
    const itenerary = props.itenerary
    return(
        <div className="text-main_container ">
            <div className="container-block">
                
                    <div className="text-container">
                        <div className="title">
                            <h2>
                            Itinerary
                            </h2>

                        </div>


                        <div className="block-text">
                            {itenerary ? itenerary.map((data : any) => {
                                return (
                                    <div key={data.title}>
                                        <div className="text-title_heading">
                                            <div className="serial-number">
                                                <div className="small"> Day</div>
                                                <div className="bold">{data.day}</div>
                                            </div>
                                            <h3 className="h3">{data.title}</h3>
                                        </div>
                                        <div className="long-text">
                                            <ul>
                                                {data.steps && data.steps.length > 0 ? data.steps.map((x: any) => {
                                                    return <li key={x}>{x}</li>
                                                }) : '' }

                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <>
                            {/* <div className="text-title_heading">
                                <div className="serial-number">
                                    <div className="small"> Day</div>
                                    <div className="bold">1</div>
                                </div>
                                <h3 className="h3">Fly to Lukla and Trek to Paiya</h3>
                            </div>
                            <div className="long-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum ipsa eveniet suscipit sapiente cumque, delectus aspernatur minus quod quam, ipsum voluptate nobis cupiditate quae, atque obcaecati qui reiciendis sed.
                            </div> */}
                            </>
                             }



                            {/* <div className="image-container">
                                <div className="image">
                                    <Image width={500} height={500} alt="image" src="https://images.freeimages.com/365/images/previews/a7b/jumper-mockup-psd-56444.jpg"/> 
                                    <div className="green-main">
                                        <div className="green-bottom">
                                            <h3 className="priya">Priya</h3>
                                            <div className="green-info-btn">
                                                <span>Info</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>

            </div>
        </div>
        );
}