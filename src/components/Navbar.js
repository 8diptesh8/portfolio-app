import { navlist } from "./data";
import logo from '../images/profile_dip.webp';


const Navbar = () => {
  
  return (
  
  <header>
    <nav className="navbar navbar-expand-lg navbar-light mainMenu">
      <div className="container">
         <div className="brandLogo">
      <a className="navbar-brand" href="/"><img src={logo} alt="logo"/> iptesh Teli</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
    
            {navlist.map((nav) => {
              return (
                <li className="nav-item" key = {nav.id}>
                  <a className="nav-link" href={`#${nav.href}`}>{ nav.text}</a>
        </li>
              )
            })}
     

  
  
   

    
    
    
    
        
      </ul>
    </div>
  </div>
</nav>
</header>
   
  );
};

export default Navbar;