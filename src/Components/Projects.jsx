import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Section = styled.div` @media only screen and (max-width: 768px) {
  padding: 20px;
  margin-top : 50px;
  text-align: center;
}`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: stretch;
@media only screen and (max-width: 768px) {
  padding: 20px;
  text-align: center;
}
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