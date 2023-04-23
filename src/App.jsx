import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import styled from "styled-components";
// import Contact from "./Components/Contact";
import Experience from "./Components/Experience";



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* <Contact /> */}
    </Container>
  );
}

export default App;
