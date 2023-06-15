import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Section = styled.section`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: 700;
  align-text: center;
  letter-spacing: -0.05em;
`; 

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProjectList = styled.div`
  width: 200px;
  height: 100%;
  overflow-y: scroll;
`;

const ProjectItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#f0f0f0' : 'transparent')};

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
  }
  
  .github-icon {
    margin-right: 5px;
    vertical-align: middle;
  }
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--lightest-slate);
  }
`;

const ProjectDescription = styled.div`
  flex: 1;
  font-size: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-right: 1rem;
`;

const TechnologiesUsed = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const DescriptionList = styled.ul``;

const DescriptionBulletPoint = styled.li`
  margin-bottom: 0.5rem;
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--lightest-slate);
`;

const GithubIcon = styled(FaGithub)`
  margin-right: 0.5rem;
`;


const projectsData = [
  {
    id: 1,
    title: "Todo List",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/jayalohana/react-todo",
    technologies: ['React', 'Styled Components'],
  },
  {
    id: 2,
    title: "Weather App",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/your-github-repo/project2",
    technologies: ['React', 'Styled Components'],
  },
  {
    id: 3,
    title: "Schizphrenia Society Website",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/jayalohana/ssy-website",
    technologies: ['React', 'Styled Components'],
  },
  {
    id: 4,
    title: "The Blog Spot",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/your-github-repo/project4",
    technologies: ['React', 'Styled Components'],
  },
  {
    id: 5,
    title: "Personal Website",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/jayalohana/personal-website",
    technologies: ['React', 'Styled Components'],
  },
  {
    id: 6,
    title: "Sudoku Solver",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/jayalohana/Sudoku",
    technologies: ['React', 'Styled Components'],
  },
  {
    id: 7,
    title: "Project 7",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/your-github-repo/project7",
    technologies: ['React', 'Styled Components'],
  },
  {
    id: 8,
    title: "Project 8",
    description: [
      "A React-based to-do list web application for managing tasks and projects.",
      "User-friendly interface that allows easy creation, tracking, and organization of to-do lists",
    ],
    githubLink: "https://github.com/your-github-repo/project8",
    technologies: ['React', 'Styled Components'],
  },
];


const TestProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleProjectClick = (project) => {
      setSelectedProject(project.id);
    };
  
    return (
      <Section id="Projects1">
        <Title>Projects</Title>
        <BodyContainer>
          <ProjectContainer>
            <ProjectList>
              {projectsData.map((project) => (
                <ProjectItem
                  key={project.id}
                  active={selectedProject === project.id}
                  onClick={() => handleProjectClick(project)}
                >
                  {project.title}
                </ProjectItem>
              ))}
            </ProjectList>
            <ProjectDescription>
              {selectedProject !== null ? (
                <>
                  <ProjectHeader>
                    <ProjectTitle>
                      {projectsData.find((project) => project.id === selectedProject).title}
                    </ProjectTitle>
                    <GithubLink
                      href={projectsData.find((project) => project.id === selectedProject).githubLink}
                      target="_blank"
                    >
                      <FaGithub />
                      GitHub
                    </GithubLink>
                  </ProjectHeader>
                  <TechnologiesUsed>
                    Technologies Used:{' '}
                    {projectsData.find((project) => project.id === selectedProject).technologies.join(', ')}
                  </TechnologiesUsed>
                  <DescriptionList>
                    {projectsData
                      .find((project) => project.id === selectedProject)
                      .description.map((bulletPoint, index) => (
                        <DescriptionBulletPoint key={index}>{bulletPoint}</DescriptionBulletPoint>
                      ))}
                  </DescriptionList>
                </>
              ) : (
                <div>Please select a project</div>
              )}
            </ProjectDescription>
          </ProjectContainer>
        </BodyContainer>
      </Section>
    );
  };
  
  export default TestProjects;