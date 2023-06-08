import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import styled from "styled-components";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Test from "./Components/Test";
import Navbar from "./Components/Navbar";
import NavMobile from "./Components/NavMobile";



const Container = styled.div`
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
      <Navbar />
      {/* <NavMobile /> */}
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      {/* <Test /> */}
    </Container>
  );
}

export default App;


// import React, { useState } from "react";
// import styled from "styled-components";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import About from "./Components/About";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
// import Experience from "./Components/Experience";

// const Container = styled.div`
//   height: 100vh;
//   scroll-snap-type: y mandatory;
//   scroll-behavior: smooth;
//   overflow-y: auto;
//   scrollbar-width: none;
//   color: white;
//   scroll-snap-align: center;
//   background: url("./img/bg.jpeg");
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

// function App() {
//   const [scrollPos, setScrollPos] = useState("hero");

//   const handleLinkClick = (sectionName) => {
//     setScrollPos(sectionName);
//   };

//   return (
//     <Container>
//       <Navbar onLinkClick={handleLinkClick} />
//       <Hero />
//       <About scrollPos={scrollPos} />
//       <Projects scrollPos={scrollPos} />
//       <Experience scrollPos={scrollPos} />
//       <Contact scrollPos={scrollPos} />
//     </Container>
//   );
// }

// export default App;
