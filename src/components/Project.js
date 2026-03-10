import Title from "./Title";
import { projects } from "./data";

const Project = () => {
  return (
    <>
    <div id="projects"></div>
<section className="projectSection">
  <div className="container">
    <Title title="Projects" subTitle="Browse my"/>
          <div className="row">
            {projects.map(({ id, title, url, img }) => {
              return (
                <div className="col-xl-4" key={id}>
        <div data-aos="zoom-in" className="projectCont">
          <a href={url} aria-label={`Open ${title} project`} target="_blank" rel="noopener noreferrer" className="linkBlock"></a>
          <img src={img} alt={title}/>
          <h3>{title}</h3>
          <a href={url} className="demoBtn">Live Demo</a>
        </div>
      </div>
              )
            })}
      
    
    </div>
  </div>
      </section>
    </>
  )
}


export default Project;