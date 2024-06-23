'use client'
import { usePathname } from 'next/navigation'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
function PackageCard(props : any) {
  return (
    <Link href={props.data[0].slug} className='responsive'>
      <div className="package-card ">
        <figure className="card-banner">
          <Image src="/image/12.jpg" width={200} height={200} loading="lazy" alt="" className='img' />
        </figure>
        <div className="card-content">
          <h3 className="h3 card-title">{props.data[0].title}</h3>
          <p className="card-text">
            We will take you for expedition great himalayan and karakoram mountains and peaks.
          </p>
          <ul className="card-meta-list">
            <li className="card-meta-item">
              <div className="meta-box">
                {/* <ion-icon name="time"></ion-icon> */}
                <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                <p className="text">20D/19N</p>
              </div>
            </li>
            <li className="card-meta-item">
              <div className="meta-box">
                {/* <ion-icon name="people"></ion-icon> */}
                <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>

                <p className="text">pax: 10</p>
              </div>
            </li>
            <li className="card-meta-item">
              <div className="meta-box">
                {/* <ion-icon name="location"></ion-icon> */}
                <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <p className="text">Baltistan</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-price">
          <div className="wrapper">
            <p className="reviews">(25 reviews)</p>
            <div className="card-rating">
              <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className='star-white' d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className='star-white' d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className='star-white' d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className='star-white' d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className='star-white' d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            </div>
          </div>
          <p className="price">
            $1750
            <span>/ per person</span>
          </p>
          <button className="btn btn-secondary">Book Now</button>
        </div>
      </div>
    </Link>
  )
}
export default function Pakages(props: any) {
  const pathname = usePathname()
  console.log('pp ',props.data, "pname", {pathname})
  let category=  ''
  if(pathname.includes('trekking')) {
    category = 'Trekking'
  }
    return(
        <>
          <section className="package" id="package">
            <div className="container">

              <p className="section-subtitle">{category} Packeges</p>

              <h2 className="h2 section-title">Checkout Our {category} Packeges</h2>

              <p className="section-text">
                We have many packages and deals and also support custom deals for you.
              </p>

              <ul className="package-list">
                {props.data.map((item: any, index: any) => (
                 <li key={index}>
                  <PackageCard data={item} />
                </li>

                ))}
              </ul>

              <button className="btn btn-primary">View All Packages</button>

            </div>
        </section>

      </>
    )
}