import { aboutcard } from "./data";


export const AboutCard = () => {
  return (
    aboutcard.map(({ id, title, desc1, desc2, img }) => {
      return (
    <div className="col-xl-6" key={id}>
        <div data-aos="fade-right" className="aboutExp text-center">
          <img src={img} alt={title}/>
          <p>{title}</p>
          <p>{desc1}</p>
          <p>{desc2}</p>
        </div>
      </div>
  )
})


  );
};