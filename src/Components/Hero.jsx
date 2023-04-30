import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Description = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #c73985;
    background-color: #fff;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 900px;
  height: 700px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(25px);
      // transform: translateX(20px);
    }
  }
`;

const Hero = () => {

  return (
    <Section id="Home">
      <Navbar />
      <Container>
        <Left>
          <Title>jaya lohana</Title>
          <Intro>
            <Line src="./img/line.png" />
            <Subtitle>who am I?</Subtitle>
          </Intro>
          <Description>
            second-year computer science student who loves experimenting with
            new frameworks and developing my skills.
          </Description>
          <Icons>
          <a href="jayalohana/portfolio-website/Jaya Lohana (1).pdf">
            <Button>Resume</Button>
          </a>
        </Icons>
        </Left>
        <Right>
          <Img src="./img/homecut.PNG" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

{
  /* <Canvas camera={{fov:25, position: [5, 5, 5] }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas> */
}
{
  /* - welcome to my little corner of the internet! As a second-year
            computer science student, I'm on a mission to conquer new frameworks
            and make some cute code creations along the way. 
            -greetings, fellow
            techies! I'm a second-year computer science student with a passion
            for all things coding. Follow along as I learn new frameworks and
            create some cute and quirky projects.  */
}

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";