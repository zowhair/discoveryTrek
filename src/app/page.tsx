// import CardIcon from "./component/cardIcon/cardicon";
import CardsDiv from "./component/carddiv/cards/card";
import Gallery from "./component/gallery/gallery";
import Hero from "./component/heroswiper/swiper";
import Pakages from "./component/pakages/pakages";
import Distination from "./component/services/distination/disti";
import Services from "./component/services/services";
import Testimonial from "./component/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Distination />
      <Testimonial />
      {/* <Services /> */}
      {/* <Pakages /> */}
      <CardsDiv />
      <Gallery />
    </>
  );
}
