import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: stretch;
`;

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Wrapper>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Projects;