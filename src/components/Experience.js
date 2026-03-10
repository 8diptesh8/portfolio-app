import Title from "./Title";
import { experienceData } from "./data";
import checkImage from "../images/check.jpg";

export const Experience = () => {
  return (
    <>
      <div id="experience"></div>
    <section className="experienceSection">
      <div className="container">

        <Title title="Experience" subTitle="Explore my" />

        <div className="row">

          {experienceData.map(({ id, title, columns,dataaos }) => (
            <div key={id} className="col-xl-6 expMobCont">

              <div className="experienceCont" data-aos={dataaos}>
                <h2 className="text-center">{title}</h2>

                <div className="row justify-content-center">

                  {columns.map((column, colIndex) => (
                    <div
                      key={colIndex}
                      className={colIndex === 0 ? "col-xl-6" : "col-xl-4"}
                    >

                      {column.map((skill, skillIndex) => (
                        <div key={skillIndex} className="expSkills">
                          <img src={checkImage} alt="check icon" />

                          <div className="skillsTxt">
                            <p>{skill}</p>
                          </div>
                        </div>
                      ))}

                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
      </section>
      </>
  );
};

export default Experience;