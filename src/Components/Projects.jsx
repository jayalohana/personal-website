import React from "react";
import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

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
  return (
    <Section id="Projects">
      <Container className="container">
        <Header>projects</Header>
        <Wrapper>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Projects;
