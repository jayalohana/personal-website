import React, { useEffect } from "react";
import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = styled.div``;

const Container = styled.div`
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`;

const Header = styled.h1`
  text-align: center;
`;

const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (in milliseconds)
    });
  }, []);

  return (
    <Section id="Projects">
      <Container className="container">
        <Header>projects</Header>
        <Wrapper>
          {projectsData.map((project) => (
  <ProjectCard key={project.id} project={project} data-aos="fade-up" />
))}

        </Wrapper>
      </Container>
    </Section>
  );
};

export default Projects;
