import Title from "./Title";
import educationImage from "../images/education.png";
import experienceImage from "../images/experience.jpg";

const About = () => {
  return (
    <>
    <div id="about"></div>
<section className="aboutSection">
  <div className="container">
    <Title title="About Me" subTitle= "Get To Know More"/>
    <div className="row justify-content-center">
      <div className="col-xl-6">
        <div data-aos="fade-right" className="aboutExp text-center">
          <img src={experienceImage} alt="experienceImage"/>
          <p>Experience</p>
          <p>5 + years</p>
          <p>Frontend Development</p>
        </div>
      </div>
      <div className="col-xl-6">
        <div data-aos="fade-left" className="aboutExp text-center">
          <img src={educationImage} alt="educationImage"/>
          <p>Education</p>
          <p>Bachelor Of Engineering (Information Technology)</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-12">
    <p className="aboutMe"> Hello there! 👋 I'm  a passionate front-end developer with a knack for crafting captivating digital experiences.A creative and detail-oriented Front-End Developer with 5+ years of experience designing and developing responsive websites and applications.
Proficient in HTML, CSS, bootstrap, and jquery, and always stays up-to-date with the latest front-end technologies. Skilled at collaborating with crossfunctional
teams to ensure high- quality code and user experience. Developed and maintained client websites using HTML, CSS, JavaScript, and CMS platforms such as WordPress and laravel framework.</p>
</div>
</div>
  </div>
      </section>
      </>
  )
}

export default About;