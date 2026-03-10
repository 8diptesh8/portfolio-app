import { socials } from "./data"
import Title from "./Title";


const Contact = () => {
  return (
    <>
    <div id="contact"></div>
<section className="contactSection">
  <div className="container">
    <Title title="Contact Me" subTitle = "Get In Touch"/>
          <div data-aos="fade-right" className="contactCont">
            {[...socials]
  .sort((a, b) => b.id - a.id)
  .map(({ id, url, img, text, title, text2 }) => {
    return (
      <div className="contactDetails" key={id}>
        <a href={url} className={`${text} ${text2}`}>
          <img src={img} alt={text} />
        </a>

        <div className="ctTxt">
          <a href={url}>
            <p>{title}</p>
          </a>
        </div>
      </div>
    );
  })}
      
    </div>
  </div>
</section>
    </>
  )
}

export default Contact;