import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import styled from "styled-components";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Test from "./Components/Test";
import Navbar from "./Components/Navbar";
import NavMobile from "./Components/NavMobile";
import Nav from "./Components/Nav";
import TestProjects from "./Components/TestProjects";

const MainApp = styled.div`
  color: white;
  background: #190c2b;
  // background: linear-gradient(to bottom,  #190c2b, #cd8eb3);
`;

function App() {
  return (
    <MainApp>
      <Navbar />
      <NavMobile />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      {/* <TestProjects />  */}
    </MainApp>
  );
}

export default App;
