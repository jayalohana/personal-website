import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 10px 2% 10px 0;
  width: 30%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  scroll-snap-align: center;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    margin-bottom: 600px;
  }
`;

const Image = styled.img`
  align-items: center;
  width: 175px;
  height: 175px;
  margin-bottom: 10px;
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Link = styled.a`
  color: #fff
  font-size: 25px;
  margin-top: 10px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Link href={project.url}>
        <FaGithub color="#fff" size={30} />
      </Link>
    </Card>
  );
};

export default ProjectCard;
