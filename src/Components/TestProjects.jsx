import React, { useEffect } from "react";
import styled from "styled-components";
import { FiFolder } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import sudoku from "../../public/img/sudoku.png"
import jaya from "../../public/img/jaya.png";
import Ssy from "../../public/img/Ssy.jpg";
import todo from "../../public/img/todo.png";
import blog from "../../public/img/blog.png";
import weather from "../../public/img/weather.png"
import pink from "../../public/img/pink.png";

const Section = styled.section``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin-top: 8.5rem;
`;

const CardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  justify-content: center;

  @media (max-width: 680px) {
    margin-left: 2px;
    margin-right: 2px;
  }
`;

const ExperienceCard = styled.div`
  width: 25rem;
  color: var(--color-white);
  background-color: #452c58;
  border-radius: 15px;
  margin: 1rem;
  transition: transform 0.2s ease-in-out;

  border :1px solid white;
  &:hover {
    transform: translateY(-10px);
  }
  .card-text {
    color: var(--color-slate);
    font-size: 1rem;
  }
  .card-header {
    a {
      color: var(--color-slate-light);
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: color 0.2s ease-in-out;
      margin-left: 90px;
    }
    a:hover {
      color: pink;
    }
    display: flex;
    align-items: center;
    img {
      border-radius: 10px;
      height: 6rem;
      margin-top: 1rem;
    }
    span {
      margin-left: 2rem;
    }
  }
  .job-role {
    margin-top: 1rem;

    li {
      margin-top: 1rem;
    }
  }
  .technologies {
    text-transform: uppercase;
    color: var(--color-slate-light);
    font-size: 0.8rem;
    margin-top: 1rem;
  }

  // @media (max-width: 680px) {
  //   margin-left: 2px;
  //   margin-right: 2px;
  // }
`;

const CardFooter = styled.div`
  background-color: #452c58;
  padding: 1rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const TestProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      name: "The Blog Spot",
      image: blog,
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://www.example.com/project4",
      description:
      "A full-stack blog application that utilizes MongoDB, Express, React, and Node.js to create, read, update, and delete blog posts.",
    },
    {
      name: "Personal Website",
      image: pink,
      technologies: ["React", "Tailwind CSS", "Three.js"],
      githubLink: "https://github.com/jayalohana/personal-website",
      description: "My personal website that features a 3D experience using Three.js library, built with React and Tailwind CSS.",
    },
    {
      name: "Todo List",
      image: todo,
      technologies: ["React"],
      githubLink:"https://github.com/jayalohana/react-todo",
      description: "A React-based to-do list web application for managing tasks and projects. ",
    },
    {
      name: "Weather App",
      image: weather,
      technologies: ["React", "API"],
      githubLink: "https://www.example.com/project2",
      description: "A weather app that utilizes APIs to fetch and display weather data for user-selected locations.",
    },
    {
      name: "Schizophrenia Society Website",
      image: Ssy,
      technologies: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/jayalohana/ssy-website",
      description:
      "A responsive website developed with React and styled with Tailwind CSS that presents your work and expertise, with a mobile-first approach for seamless navigation on any device.",
    },
    {
      name: "Sudoku Solver",
      image: sudoku,
      technologies: ["Python"],
      githubLink: "https://github.com/jayalohana/Sudoku",
      description: "A Python-based Sudoku solver that utilizes algorithms and logic to find the solution for any given puzzle.",
    },
  ];

  return (
    <Section id="Projects">
      <Container className="container">
        <h1 data-aos="fade-up">projects</h1>
        <CardDeck>
          {projects.map((project, index) => (
            <ExperienceCard className="card" data-aos="fade-up" key={index}>
              <div className="card-header">
                <div className="folder">
                  <img src={project.image} alt={project.name} />
                </div>
                <span>{project.name}</span>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FiGithub style={{ marginLeft: "auto" }} />
                </a>
              </div>
              <div className="card-body">
                <ul className="job-role">
                  <li>{project.description}</li>
                </ul>
                <CardFooter>
                <div className="technologies">
                  Technologies used: {project.technologies.join(", ")}
                </div>
              </CardFooter>
              </div>
            </ExperienceCard>
          ))}
        </CardDeck>
      </Container>
    </Section>
  );
};

export default TestProjects;
