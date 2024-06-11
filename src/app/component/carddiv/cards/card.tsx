import CardComponent from '../cardcomponent/cards'
import './style.css'
import { k2_concordia } from '@/app/data'

export default function CardsDiv() {
    return(
        <div className='responsive cards-main_component'>
            <h1 className="section-subtitle">Your Adventure Begins Here with Discovery Tours Askoli</h1>

                <p className="section-text">
                We have many packages and deals and also support custom deals for you.
                </p>
                <section className="cards_section">
                    <div className="container">
                        <div className="wrapper">
                            <div className="cards_slide_container">
                                <div className="sub_wrapper flex align_center Cardslide">
                                    <CardComponent data={k2_concordia} />
                                    <CardComponent data={k2_concordia} />
                                    <CardComponent data={k2_concordia} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
                

        </div>
    )
}