import React, { useEffect } from "react";
import styled from "styled-components";
import { FiFolder } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import Gaotek from "../../public/img/Gaotek.jpeg";
import Mgh from "../../public/img/Mgh.jpg";
import Ssy from "../../public/img/Ssy.jpg";
import bbi from "../../public/img/bbi.png";
import yu from "../../public/img/yu.png";
import YuHacks from "../../public/img/YuHacks.jpeg";

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
`;

const ExperienceCard = styled.div`
  width: 25rem;
  color: var(--color-white);
  background-color: #452c58;  
  border-radius: 15px;
  margin: 1rem;
  transition: transform 0.2s ease-in-out;
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
`;

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Section id="Experience">
      <Container className="container">
        <h1 data-aos="fade-up">experience</h1>
        <CardDeck>
          {/* Card 1 */}
          <ExperienceCard className="card" data-aos="fade-up">
            <div className="card-header">
              <div className="folder">
                <img src={Gaotek} alt="Gaotek" />
              </div>
              <span>Software Developer Intern</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">GaoTek</h5>
              <p className="card-company">May 2023 - Present</p>
              <ul className="job-role">
                <li>
                  Collaborated with the team to design and develop software
                  features, ensuring adherence to coding standards.
                </li>
                <li>
                  Assisted in optimizing database queries and implementing
                  efficient business logic to enhance system efficiency and
                  reduce response time.
                </li>
                <li>
                  Assisted in implementing and maintaining backend systems,
                  utilizing technologies such as Spring Boot and RESTful APIs.
                </li>
              </ul>
            </div>
          </ExperienceCard>

          {/* Card 2 */}
          <ExperienceCard className="card" data-aos="fade-up">
            <div className="card-header">
              <div className="folder">
                <img src={YuHacks} alt="yuHacks" />
              </div>
              <span>Software Developer Intern</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">yuHacks 2023</h5>
              <p className="card-company">May 2023 - Present</p>
              <ul className="job-role">
                <li>
                  Utilizing React.js, TypeScript, and Next.js to build scalable
                  and modular components for the hackathon website, enabling
                  efficient state management and seamless integration with the
                  backend APIs.
                </li>

                <li>
                  Employing modern frontend frameworks and libraries like Vue.js
                  and GraphQL to develop dynamic and interactive features for
                  the hackathon website, enhancing user engagement and providing
                  real-time data updates.
                </li>
              </ul>
            </div>
          </ExperienceCard>

          {/* Card 3 */}
          <ExperienceCard className="card" data-aos="fade-up">
            <div className="card-header">
              <div className="folder">
                <img src={bbi} alt="Bold Brew Insights" />
              </div>
              <span>UI/UX Designer</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Bold Brew Insights</h5>
              <p className="card-company">March 2022 - July 2022</p>
              <ul className="job-role">
                <li>
                  Collaborated with the team to design and develop software
                  features, ensuring adherence to coding standards.
                </li>

                <li>
                  Researched financial technology concepts to synthesize key
                  findings surrounding the financial market of NFTs, blockchain
                  technology, and national cryptocurrencies for web-content
                  creation by using my written communication and presentation
                  skillset.
                </li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard className="card" data-aos="fade-up">
            <div className="card-header">
              <div className="folder">
                <img src={Mgh} alt="Many Green Hands" />
              </div>
              <span>Vice President (Advocacy)</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Many Green Hands</h5>
              <p className="card-company">July 2022 - Present</p>
              <ul className="job-role">
                <li>
                  Participating in discussions and events related to online
                  advocacy, such as webinars, forums, and social media
                  campaigns.
                </li>
                <li>
                  Creating and managing online content that promotes the club's
                  mission and activities, including blog posts, social media
                  updates, and event listings.
                </li>
              </ul>
            </div>
          </ExperienceCard>

          {/* Card 6 */}
          <ExperienceCard className="card" data-aos="fade-up">
            <div className="card-header">
              <div className="folder">
                <img src={Ssy} alt="Schizophrenia Society York" />
              </div>
              <span> Software Developer </span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Schizophrenia Society York</h5>
              <p className="card-company">September - Present</p>
              <ul className="job-role">
                <li>
                  Developed and maintained the club's website to ensure it was
                  up-to-date, visually appealing, and easy to navigate,
                  resulting in a positive user experience for visitors.
                </li>
                <li>
                  Created and managed online content to promote the club's
                  mission and activities, which increased website traffic and
                  engagement among target audiences.
                </li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard className="card" data-aos="fade-up">
            <div className="card-header">
              <div className="folder">
                <img src={yu} alt="York International" />
              </div>
              <span>Community Engagement Volunteer</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">York International</h5>
              <p className="card-company">September 2022 – May 2023</p>
              <ul className="job-role">
                <li>
                  Promoted events, programs services, and activities to
                  participants using social media and classroom visits to
                  encourage participation for over 25 students on a weekly basis
                  exercising my organization and planning skillset.
                </li>
                <li>
                  Facilitated regular community engagement and global outreach
                  discussions, while providing peer-to-peer support and
                  mentorship to four students over four months, resulting in
                  significant personal and academic growth.
                </li>
              </ul>
            </div>
          </ExperienceCard>
        </CardDeck>
      </Container>
    </Section>
  );
};

export default Experience;
