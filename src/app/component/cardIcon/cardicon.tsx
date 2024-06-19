// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
import Image from 'next/image'
import './style.css'
export default function CardIcon() {
    return(
<section>
  <h2>leading companies<br />have trusted us</h2>
  <div className="container">
    <div className="card">
      <div className="card-inner"
    //    style="--clr:#fff;"
       >
        <div className="box">
          <div className="imgBox">
            <Image className='img' src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trust & Co." />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
                arrow_outward
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>trust &amp; co.</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
        <ul>
          <li 
        //   style="--clr-tag:#d3b19a;"
           className="branding">branding</li>
          <li 
        //   style="--clr-tag:#70b3b1;"
           className="packaging">packaging</li>
        </ul>
      </div>
    </div>
    <div className="card">
      <div className="card-inner"
    //    style="--clr:#fff;"
       >
        <div className="box">
          <div className="imgBox">
            <Image className='img' src="https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tonic" />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
                arrow_outward
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>tonic</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
        <ul>
          <li 
        //   style="--clr-tag:#d3b19a;"
           className="branding">branding</li>
          <li 
        //   style="--clr-tag:#d05fa2;"
           className="marketing">marketing</li>
        </ul>
      </div>
    </div>
    <div className="card">
      <div className="card-inner" 
    //   style="--clr:#fff;"
      >
        <div className="box">
          <div className="imgBox">
            <Image  className='img' src="https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shower Gel" />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
                arrow_outward
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>shower gel</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
        <ul>
          <li 
        //   style="--clr-tag:#d3b19a;"
           className="branding">branding</li>
          <li 
        //   style="--clr-tag:#70b3b1;"
           className="packaging">packaging</li>
          <li 
        //   style="--clr-tag:#d05fa2;"
           className="marketing">marketing</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    )
}