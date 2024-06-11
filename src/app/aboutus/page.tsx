import './style.css'
export default function Aboutus() {
  const aboutData=  [
    {
      title: "About Us",
      id: "about-us-section",
      description:"Welcome to Discovery Treks Askoli, your premier trekking and tour operator in Gilgit-Baltistan. Located in the heart of the Karakoram mountain range, we specialize in curating unforgettable adventures to the most breathtaking destinations in the region, including the majestic K2.",
      image: "https://cdn.pixabay.com/photo/2017/05/18/07/45/mountains-2322759_1280.jpg",
      btnLabel: "ABOUT US",
      class_ : "about-us-info",
      classImg: "about-us-image"
    },
    {
      title: "Our Story",
      id: "history-section",
      description:"Founded by a team of passionate trekkers and locals, Discovery Treks Askoli was born out of a desire to share the beauty and splendor of Gilgit-Baltistan with the world. With years of experience in leading expeditions and treks, we have honed our expertise in crafting personalized itineraries that cater to all your needs and preferences.",
      image: "https://cdn.pixabay.com/photo/2020/11/16/16/05/lake-5749355_960_720.jpg",
      btnLabel: "Our Story",
      class_: "history-info",
      classImg: "history-image"
    },
    {
      title: "Our Mission",
      id: "history-section",
      description:"At Discovery Treks Askoli, we are committed to providing exceptional trekking and tour experiences that not only showcase the natural beauty of our region but also promote sustainable tourism and cultural exchange. We strive to create lifelong memories for our clients while supporting local communities and preserving the environment.",
      image: "https://cdn.pixabay.com/photo/2020/11/16/16/05/lake-5749355_960_720.jpg",
      btnLabel: "Our Mission",
      class_: "history-info",
      classImg: "history-image"
    },
    {
      title: "Our Team",
      id: "history-section",
      description:"Founded by a team of passionate trekkers and locals, Discovery Treks Askoli was born out of a desire to share the beauty and splendor of Gilgit-Baltistan with the world. With years of experience in leading expeditions and treks, we have honed our expertise in crafting personalized itineraries that cater to all your needs and preferences.",
      image: "https://cdn.pixabay.com/photo/2020/11/16/16/05/lake-5749355_960_720.jpg",
      btnLabel: "Our Team",
      class_: "history-info",
      classImg: "history-image"
    },
    {
      title: "Join Us",
      id: "history-section",
      description:"Embark on an adventure of a lifetime with Discovery Treks Askoli. Let us take you on a journey to the roof of the world, where the majestic mountains, pristine lakes, and warm hospitality will leave you in awe. Contact us to plan your dream trek or tour today!",
      image: "https://cdn.pixabay.com/photo/2020/11/16/16/05/lake-5749355_960_720.jpg",
      btnLabel: "Join Us",
      class_: "history-info",
      classImg: "history-image"
    }
  ]
    return(
      <div className="we-are-block ">

      {aboutData && aboutData.map(item => (
        <div id={item.id}>
          <div className={item.classImg}>
            <img src={item.image} width="808" height="458" alt="Lobby Image"/>
          </div>
          <div className={item.class_}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href="#" title="About Us Button">{item.btnLabel}</a>
          </div>
        </div>
      ))}
      </div>

    )
}