import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Section = styled.div``

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: stretch;
`;

const Header = styled.h1`
text-align: center;`
;

const Projects = () => {
  return (
    <Section id = "Projects">
    <div>
      <Header><h1>projects</h1></Header>
      <Wrapper>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Wrapper>
    </div>
    </Section>
  );
};

export default Projects;