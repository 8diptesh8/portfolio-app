import About from "./components/About";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <Navbar/>
      <Profile />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer/>
      </>
  );
}

export default App;
