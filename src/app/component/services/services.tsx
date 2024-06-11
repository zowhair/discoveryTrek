import './style.css'
export default function Services(){
    return(
        <div className='responsive services margin-bottom_top flex-column'>
            <p className="section-subtitle">Popular Packeges</p>

<h2 className="h2 section-title">Checkout Our Packeges</h2>

<p className="section-text">
We have many packages and deals and also support custom deals for you.
</p>
            <div className='flex-row justify-center'>
                <div className="card">
                    <img src="https://s13.postimg.cc/5al19x0d3/media_img.jpg" className="card-media" />
                    <div className="card-details">
                        <h2 className="card-head">Kangaroo Valley Safari</h2>
                        <p>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</p>
                        <a href="#/" className="card-action-button">SHARE</a>
                        <a href="#/" className="card-action-button">EXPLORE</a>
                    </div>
                </div>
                {/* repeate */}

                <div className="card">
                    <img src="https://s13.postimg.cc/5al19x0d3/media_img.jpg" className="card-media" />
                    <div className="card-details">
                        <h2 className="card-head">Kangaroo Valley Safari</h2>
                        <p>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</p>
                        <a href="#/" className="card-action-button">SHARE</a>
                        <a href="#/" className="card-action-button">EXPLORE</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://s13.postimg.cc/5al19x0d3/media_img.jpg" className="card-media" />
                    <div className="card-details">
                        <h2 className="card-head">Kangaroo Valley Safari</h2>
                        <p>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</p>
                        <a href="#/" className="card-action-button">SHARE</a>
                        <a href="#/" className="card-action-button">EXPLORE</a>
                    </div>
                </div>

            </div>
            
        </div>
    )
}