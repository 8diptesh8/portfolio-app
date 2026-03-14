import profileImage from '../images/profile.jpg';
import Social from "./Social";


const Profile = () => {
  return (
    <section className="profileSection">
      <div className="container">
        <div className="row">
          <div data-aos="flip-left" data-aos-duration="2000" className="col-xl-4 profileProfImg">
            <img className="profileImg" src={profileImage} height = "400" fetchpriority="high" alt="profile-image"/>
          </div>
          <div className="col-xl-4 profileProfCont">
            <div className="profileProf">
              <p>Hello, I'm</p>
              <p>Diptesh Teli</p>
              <p>Frontend Developer</p>
              <div className="profileSocial">
                <Social/>
              </div>

              <div className="profileBtn"><a className="profileCV" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/16Uh2W_jMFcGEss78XUVkpGK274FwE4Tw/view?usp=sharing">Download CV</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;