import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import NavMobile from "./Components/NavMobile";
import TestProjects from "./Components/TestProjects";
import Experience from "./Components/Experience";

const MainApp = styled.div`
  color: white;
  background: #0d1821;
  // background: linear-gradient(to bottom,  #190c2b, #cd8eb3);
`;

function App() {
  return (
    <MainApp>
      <Navbar />
      <NavMobile />
      <Hero />
      <About />
      <TestProjects />
      <Experience />
      <Contact />
    </MainApp>
  );
}

export default App;
