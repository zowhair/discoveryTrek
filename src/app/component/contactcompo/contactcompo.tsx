import './style.css'
 

export default function ContactCompo() {
    return(

<section className='contactus'>
<div className="container responsive">
  <div className="contactinfo">
    <div>
        <h2>Contact With Discovery Tours Askoli</h2>
      <ul className="info">
        <li>
          <span><i className="fas fa-street-view"></i></span>
          <span>Shahrah e Quaid, Skardu Gilgit-Baltistan</span>
        </li>
        <li>
          <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
          <span>discoveryaskoli@gmail.com</span>
        </li>
        <li>
          <span><i className="fas fa-phone-alt"></i></span>
          <span>+92 3555781494 </span>
        </li>
      </ul>      
    </div>
    <ul className="sci">
        <li><a><i className="fab fa-instagram fa-2x"></i></a></li>
        <li><a><i className="fab fa-pinterest-p fa-2x"></i></a></li>
        <li><a><i className="fab fa-linkedin-in fa-2x"></i></a></li>
        <li><a><i className="fab fa-twitter fa-2x"></i></a></li>
      </ul>
  </div>
  <div className="contactForm">
    <h2>Send us a message</h2>
    <div className="formBox">
      <div className="inputBox w50">
        <input type="text" name="" required/>
        <span>First name</span>
      </div>
      <div className="inputBox w50">
        <input type="text" name="" required/>
        <span>Last name</span>
      </div>
      <div className="inputBox w50">
        <input type="text" name="" required/>
        <span>Email</span>
      </div>
      <div className="inputBox w50">
        <input type="text" name="" required/>
        <span>Mobile Number</span>
      </div>
      <div className="inputBox w100">
        <textarea required name=""></textarea>
        <span>Write your msg here...</span>
      </div>
      <div className="inputBox w100">
        <input type="submit" value="Send"/>
      </div>
    </div>
  </div>
</div>
</section>
    )
}