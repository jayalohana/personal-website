import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import Jaya_Lohana_Website from "../assets/Jaya_Lohana_Website.pdf";

const Section = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

const Left = styled.div`
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  text-align: left;
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 2rem;
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
  text-align: left;
`;

const ButttonContainer = styled.div`
  display: flex;
  margin-top: 4.5rem;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  overflow: hidden; 

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  // padding: 8px 16px;
  border: none;
  outline: none;

  &:hover {
    opacity: 0.8;
    color: #da4ea2;
    background-color: #fff;
  }


`;

const Right = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  padding-top: 25rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }
`;

const Hero = () => {
  return (
    <Section id="Home">
      <Container className="container">
        <div className="row">
          <div className="col-md-6">
            <Left>
              <Title>jaya lohana</Title>
              <Intro>
                <Line src="./img/line.png" alt="line" />
                <Subtitle>who am I?</Subtitle>
              </Intro>
              <Description>
                second-year computer science student who loves experimenting
                with new frameworks and developing my skills.
              </Description>
              <ButttonContainer>
                <Button
                  className="btn btn-primary btn-lg"
                  role="button"
                  href={Jaya_Lohana_Website}
                >
                  Resume
                </Button>
              </ButttonContainer>
            </Left>
          </div>
          <div className="col-md-6">
            <Right>
              <ImageContainer>
                <Img src="./img/homecut.PNG" alt="homecut" />
              </ImageContainer>
            </Right>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
