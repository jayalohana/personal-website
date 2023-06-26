import React from "react";
import styled from "styled-components";
import  { BiCaretRight }  from "react-icons/bi";

const Section = styled.div`
  /* Add any desired styling for the section */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  margin-left: 1rem;
  // align-text: center;
  letter-spacing: -0.05em;
`;

const Introduction = styled.p`
  font-size: 1.8rem;
  padding: 20px;
  // text-align: center;
  line-height: 1.5;
  
  letter-spacing: 0.05em;
  font-weight: 400;
  @media screen and (max-width: 600px) {
    text-align: left;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 60px;
`;

const SkillsTitle = styled.h2`
  font-size: 3rem;
  letter-spacing: -0.05em;
`;

const SkillsList = styled.div`
  column-count: 2;
  text-align: left;
  column-gap: 3rem;
  margin-top: 2rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <Section>
      <Container id="About" className="container">
        <Left>
          <Title> <h1> about me </h1></Title>
          <Introduction>
            hi, i'm Jaya Lohana, a second year computer science student at york
            university. passionate about coding and technology, i'm excited to
            pursue a career in the tech industry. i enjoy experimenting with new
            programming languages and building websites and applications.
          </Introduction>
        </Left>
        <Right>
          <SkillsContainer>
            <SkillsTitle> <h2> technical skills </h2></SkillsTitle>
            <SkillsList>
              <ul>
                <li> < BiCaretRight /> React.js</li>
                <li> < BiCaretRight /> Three.js</li>
                <li> < BiCaretRight /> Node.js</li>
                <li> < BiCaretRight /> JavaScript</li>
                <li> < BiCaretRight /> Java</li>
                <li> < BiCaretRight /> Python</li>
                <li> < BiCaretRight /> REST APIs</li>
                <li> < BiCaretRight /> GraphQL</li>
                {/* <li>MUI</li>
                <li>SQL</li> */}
              </ul>
            </SkillsList>
          </SkillsContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
