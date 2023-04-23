import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: -0.05em;
 
`;

const Introduction = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin: 30px 0 0 50px;
  margin-bottom: 2rem;
  margin-left: 20px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  font-weight: 400;
  text-transform: capitalize;
  max-width: 800px;
  margin: 0 auto;

`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;
 
`;

const SkillsList = styled.div`
  column-count: 2;
  column-gap: 3rem;
  margin-top: 2rem;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    font-size: 1.5rem;
    margin-bottom: 1rem;
   
  }
`;

const About = () => {
 

  return (
    <Container>
      <Title>About Me</Title>
      <Introduction>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla
        laoreet nulla ac malesuada. Proin est purus, laoreet vitae lorem in,
        suscipit tincidunt augue. Vestibulum lacinia purus id velit dignissim,
        quis suscipit felis feugiat. In fringilla nunc purus, sed vestibulum
        lorem pulvinar ut. Integer quis sapien et augue porta feugiat.
      </Introduction>
      <SkillsContainer>
        <SkillsTitle>Technical Skills</SkillsTitle>
        <SkillsList>
          <ul>
            {/* <li> <FontAwesomeIcon icon="fa-sharp fa-light fa-heart" />Java</li> */}
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>REST APIs</li>
            <li>REST APIs</li>
            <li>REST APIs</li>
            <li>REST APIs</li>
            <li>REST APIs</li>
            <li>REST APIs</li>
          </ul>
        </SkillsList>
      </SkillsContainer>
    </Container>
  );
};

export default About;
