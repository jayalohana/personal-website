import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Container = styled.div`
  @media (max-width: 680px) {
  }
`;

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  margin-left: 1rem;
  // align-text: center;
  letter-spacing: -0.05em;
  @media (max-width: 680px) {
    text-align: center;
    margin: 0 0 8px;
  }
`;

const BodyContainer = styled.div``;

const ExperienceContainer = styled.div`
  display: flex;

  @media (max-width: 680px) {
    flex-direction: column;
    font-size: 1rem;
  }
`;

const ExperienceList = styled.div`
  font-size: 1rem;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 680px) {
    display: flex;
    width: 100%;
    overflow-x: auto;
  }
  scrollbar-width: thin; /* For Firefox */

  /* Styling for the scrollbar */
  &::-webkit-scrollbar {
    width: 4px; /* Width of the scrollbar */
    height: 3px; /* Height of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Color of the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Remove border radius */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }

  /* New styles for scrollbar on the left side */
  scrollbar-position: left;

  // // @media (max-width: 680px) {
  // //   border: 1px solid white;
  // //   display: flex;
  // //   flex-direction: row;
  // //   height: 10vh;
  // //   overflow-y: auto;
  // //   overflow-x: hidden;
  // //   scrollbar-width: thin;
  // // }
`;

const ExperienceItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;

  background-color: ${(props) => (props.active ? "#da4ea2" : "transparent")};

  border-radius: 8px;
  color: ${(props) => (props.active ? "#fff" : "var(--lightest-slate)")};

  .experience-title {
    font-size: 3rem;

    font-size: var(--fz-xxl);
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--lightest-slate);
  }

  .experience-icon {
    margin-right: 8px;
    font-size: 1.5rem;
    color: ${(props) => (props.active ? "#da4ea2" : "var(--lightest-slate)")};
  }

  @media (max-width: 680px) {
    font-size: 1rem;
    width: 40%;
  }
`;

const ExperienceDescription = styled.div`
  flex: 1;
  font-size: 1.5rem;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .company-info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .company-info h4 {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  // @media (max-width: 680px) {
  //   border: 1px solid white;
  // }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const CompanyName = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ExperienceDate = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const DescriptionList = styled.ul`
  font-size: 1.5rem;
  overflow: break-word;
`;

const DescriptionBulletPoint = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.5;
`;

const experienceData = [
  {
    id: 1,
    experienceTitle: "QA Analyst",
    companyName: "Transformers Academy",
    date: "April 2024 – Present",
    description: [
      "Led the deployment of automated testing tools to streamline content validation processes, reducing manual testing time by 40% and enhancing overall content accuracy.",
      "Pioneered a feedback integration system that captures real-time user interactions, providing critical insights that have led to a 25% improvement in user satisfaction scores.",
    ],
    image: "./img/ta.webp",
  },

  {
    id: 2,
    experienceTitle: "Software Developer Intern",
    companyName: "GaoTek",
    date: "May 2023 - September 2023",
    description: [
      "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
      "Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time.",
      "Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.",
    ],
    image: "./img/Gaotek.jpeg",
  },
  {
    id: 3,
    experienceTitle: "Front-end Developer",
    companyName: "yuHacks 2023",
    date: "May 2023 - December 2023",
    description: [
      "Utilizing React.js, TypeScript, and Next.js to build scalable and modular components for the hackathon website, enabling efficient state management and seamless integration with the backend APIs.",
      "Employing modern frontend frameworks and libraries like Vue.js and GraphQL to develop dynamic and interactive features for the hackathon website, enhancing user engagement and providing real-time data updates.",
    ],
    image: "./img/YuHacks.jpeg",
  },
  {
    id: 4,
    experienceTitle: "Software Developer",
    companyName: "Schizphrenia Society at York",
    date: "September 2022 – May 2023",
    description: [
      "Developed and maintained the club's website to ensure it was up-to-date, visually appealing, and easy to navigate, resulting in a positive user experience for visitors.",
      "Created and managed online content to promote the club's mission and activities, which increased website traffic and engagement among target audiences.",
    ],
    image: "./img/Mgh.jpg",
  },
  {
    id: 5,
    experienceTitle: "Outreach Executive",
    companyName: "hEr VOLUTION",
    date: "May 2023 - February 2024",
    description: [
      "Organized and coordinated 5 successful community events, including tech fairs and networking sessions, with an average attendance of 200 participants per event.",
      "Developed and published 20 pieces of compelling content for newsletters, blogs, and social media posts, reaching an audience of over 10,000 individuals.",
      "Mentored and supported 10 volunteers and interns, ensuring their active involvement in outreach activities.",
    ],
    image: "./img/herv.png",
  },
  {
    id: 6,
    experienceTitle: "UI/UX Designer",
    companyName: "Bold Brew Insights",
    date: "March 2022 - July 2022",
    description: [
      "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
      "Researched financial technology concepts to synthesize key findings surrounding the financial market of NFTs, blockchain technology, and national cryptocurrencies for web-content creation by using my written communication and presentation skillset.",
    ],
    image: "./img/bbi.png",
  },
  {
    id: 7,
    experienceTitle: "Vice President (Advocacy)",
    companyName: "Many Green Hands",
    date: "July 2022 - Present",
    description: [
      "Participating in discussions and events related to online advocacy, such as webinars, forums, and social media campaigns.",
      "Creating and managing online content that promotes the club's mission and activities, including blog posts, social media updates, and event listings.",
    ],
    image: "./img/yu.png",
  },

  {
    id: 8,
    experienceTitle: "Community Engagement Volunteer",
    companyName: "York International",
    date: "September 2022 – May 2023",
    description: [
      "Promoted events, programs services, and activities to participants using social media and classroom visits to encourage participation for over 25 students on a weekly basisexercising my organization and planning skillset.",
      "Facilitated regular community engagement and global outreach discussions, while providing peer-to-peer support and mentorship to four students over four months, resulting in significant personal and academic growth.",
    ],
    image: "./img/Ssy.jpg",
  },
  // {
  //   id: 8,
  //   experienceTitle: "Software Developer",
  //   companyName: "ABC Company",
  //   date: "January 2020 - March 2022",
  //   description: [
  //     "Promoted events, programs services, and activities to participants using social media and classroom visits to encourage participation for over 25 students on a weekly basisexercising my organization and planning skillset.",
  //     "Collaborated with cross-functional teams to deliver high-quality software products.",
  //     "Implemented new features and enhanced existing functionality based on user feedback.",
  //   ],
  //   image: "./img/Ssy.jpg",
  // },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(1);

  const handleExperienceClick = (experienceId) => {
    setSelectedExperience(experienceId);
  };

  return (
    <Section id="Experience">
      <Container className="container">
        <BodyContainer>
          <Header>
            {" "}
            <h1>experience </h1>
          </Header>
          <ExperienceContainer>
            <ExperienceList>
              {experienceData.map((experience) => (
                <ExperienceItem
                  key={experience.id}
                  active={selectedExperience === experience.id}
                  onClick={() => handleExperienceClick(experience.id)}
                >
                  <div className="experience-title">
                    {experience.experienceTitle}
                  </div>
                  {selectedExperience === experience.id && (
                    <span className="dot" />
                  )}
                </ExperienceItem>
              ))}
            </ExperienceList>
            <ExperienceDescription>
              {selectedExperience !== null ? (
                <>
                  <ExperienceHeader>
                    <ExperienceTitle>
                      {
                        experienceData.find(
                          (experience) => experience.id === selectedExperience
                        ).experienceTitle
                      }
                    </ExperienceTitle>
                    <ExperienceDate>
                      {
                        experienceData.find(
                          (experience) => experience.id === selectedExperience
                        ).date
                      }
                    </ExperienceDate>
                  </ExperienceHeader>
                  <div className="company-info">
                    <Logo
                      src={
                        experienceData.find(
                          (experience) => experience.id === selectedExperience
                        ).image
                      }
                      alt="Company Logo"
                    />
                    <CompanyName>
                      {
                        experienceData.find(
                          (experience) => experience.id === selectedExperience
                        ).companyName
                      }
                    </CompanyName>
                  </div>
                  <DescriptionList>
                    {experienceData
                      .find(
                        (experience) => experience.id === selectedExperience
                      )
                      .description.map((bulletPoint, index) => (
                        <DescriptionBulletPoint key={index}>
                          {bulletPoint}
                        </DescriptionBulletPoint>
                      ))}
                  </DescriptionList>
                </>
              ) : (
                <div>Please select an experience</div>
              )}
            </ExperienceDescription>
          </ExperienceContainer>
        </BodyContainer>
      </Container>
    </Section>
  );
};

export default Experience;
