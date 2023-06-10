import React, { useEffect } from "react";
import styled from "styled-components";
import { FiFolder } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import Gaotek from "../../public/img/Gaotek.jpeg"
import  Mgh from "../../public/img/Mgh.jpg";
import Ssy from "../../public/img/Ssy.jpg"
import bbi from "../../public/img/bbi.png";
import yu from "../../public/img/yu.png"
import YuHacks from "../../public/img/YuHacks.jpeg"


const Section = styled.section`
  width: 100%;
  height: 100%;

`;

const Container = styled.div`
  margin-bottom: 5%;
  border: 1px solid white;
  @media screen and (max-width:680px) {
    display: flex;
    justify-content: center;
    margin: auto;
    text-align: center;
    height: 50rem;
}

`;

const ProjHeader = styled.div`
  h1 {
    margin: auto;
    text-align: center;
  }
`;

const CardDeck = styled.div`

@media only screen and (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

  display: flex;
  flex-wrap: wrap;

  .card-text {
    color: var(--color-slate);
    font-size: 1rem;
  }

  .card-title {
    font-weight: 400;
    font-size: 1.2rem;
  }

  margin: 0 -1rem;

  .card-header {
    a {
      color: var(--color-slate-light);
    }
    display: flex;

    align-items: center;

    img {
        border-radius: 10px;
        height: 6rem;
        margin-top:1rem;
    }

    .git-share {
      font-size: 1.2rem;
      display: flex;
      justify-content: space-evenly;
    }
    span {
        margin-left: 2rem;
    }
  }

  .card-footer {
    font-family: Space Mono, sans-serif;
    text-transform: uppercase;
    color: var(--color-slate-light);
    font-size: 0.8rem;
  }

  .card {
    color: var(--color-white);
    background-color: rgba(17, 34, 64, 1);
    border-radius: 15px;
    width: calc(33.33% - 2rem); /* Adjust width to display three cards in one row */
    margin: 1rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const CardContainer = styled.div`
// border: 1px solid white;
padding-left: 8rem;

    .card-deck {
      display: flex;
      justify-content: center;
      margin: auto;
      text-align: center;
    }
  }
`;

const ExperienceCard = styled.div`
border: 1px solid white;
max-width: 40rem; 



  width: 5rem;
  .card-body {
    padding: 1rem;
  }

  .card-company {
    color: var(--color-slate-light);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .card-job-title {
    color: var(--color-slate-light);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .card-date {
    color: var(--color-slate-light);
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
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
    <Section>
      <Container className="card-container" id="projects">
        <ProjHeader>
          <h1 data-aos="fade-up">Experience</h1>
        </ProjHeader>
        <CardContainer>
          <CardDeck>
            {/* Card 1 */}
            <ExperienceCard className="card" data-aos="fade-up">
              <div className="card-header">
                <div className="folder">
                  <img src = {Gaotek}></img>
                </div>
                <span>Software Developer Intern</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">GaoTek</h5>
                <p className="card-company">May 2023 - Present</p>
                <ul className="job-role">
                    <li>
                    Collaborated with the team to design and develop software features, ensuring adherence to coding standards.
                    </li>
                    <li>
                    Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time.
                    </li>
                    <li>
                    Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.
                    </li>
                </ul>
              </div>
            </ExperienceCard>

            {/* Card 2 */}
            <ExperienceCard className="card" data-aos="fade-up">
              <div className="card-header">
                <div className="folder">
                  <img src = {YuHacks}></img>
                </div>
                <span>Software Developer Intern</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">yuHacks 2023</h5>
                <p className="card-company">May 2023 - Present</p>
                <ul className="job-role">
                    <li>
                    Utilizing React.js, TypeScript, and Next.js to build scalable and modular components for the hackathon website, enabling efficient state management and seamless integration with the backend APIs.
                    </li>
                    
                    <li>
                    Employing modern frontend frameworks and libraries like Vue.js and GraphQL to develop dynamic and interactive features for the hackathon website, enhancing user engagement and providing real-time data updates.
                    </li>
                </ul>
              </div>
            </ExperienceCard>

            {/* Card 3 */}
            <ExperienceCard className="card" data-aos="fade-up">
              <div className="card-header">
                <div className="folder">
                  <img src = {bbi}></img>
                </div>
                <span>UI/UX Designer</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Bold Brew Insights</h5>
                <p className="card-company">March 2022 - July 2022</p>
                <ul className="job-role">
                    <li>
                    Collaborated with the team to design and develop software features, ensuring adherence to coding standards.
                    </li>
                 ∂
                    <li>
                    Researched financial technology concepts to synthesize key findings surrounding the financial market of NFTs, blockchain technology, and national cryptocurrencies for web-content creation by using my written communication and presentation skillset.
                    </li>
                </ul>
              </div>
            </ExperienceCard>

           
            


        
        <ExperienceCard className="card" data-aos="fade-up">
              <div className="card-header">
                <div className="folder">
                  <img src = {Mgh}></img>
                </div>
                <span>Vice President (Advocacy)</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Many Green Hands</h5>
                <p className="card-company">July 2022 - Present</p>
                <ul className="job-role">
                    <li>
                    Participating in discussions and events related to online advocacy, such as webinars, forums, and social media campaigns.
                    </li>
                    <li>
                    Creating and managing online content that promotes the club's mission and activities, including blog posts, social media updates, and event listings.
                    </li>
                
                </ul>
              </div>
            </ExperienceCard>

            {/* Card 6 */}
            <ExperienceCard className="card" data-aos="fade-up">
              <div className="card-header">
                <div className="folder">
                  <img src = {Ssy}></img>
                </div>
                <span> Software Developer </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Schizophrenia Society York</h5>
                <p className="card-company">September - Present</p>
                <ul className="job-role">
                   
                    <li>
                    Developed and maintained the club's website to ensure it was up-to-date, visually appealing, and easy to navigate, resulting in a positive user experience for visitors.
                    </li>
                    <li>
                    Created and managed online content to promote the club's mission and activities, which increased website traffic and engagement among target audiences.
                    </li>
                </ul>
              </div>
            </ExperienceCard>

            <ExperienceCard className="card" data-aos="fade-up">
              <div className="card-header">
                <div className="folder">
                  <img src = {yu}></img>
                </div>
                <span>Community Engagement Volunteer</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">York International</h5>
                <p className="card-company">September 2022 – May 2023</p>
                <ul className="job-role">
                    
                    <li>
                    Promoted events, programs services, and activities to participants using social media and classroom visits to encourage participation for over 25 students on a weekly basis exercising my organization and planning skillset.
                    </li>
                    <li>
                    Facilitated regular community engagement and global outreach discussions, while providing peer-to-peer support and mentorship to four students over four months, resulting in significant personal and academic growth.
                    </li>
                </ul>
              </div>
            </ExperienceCard>

            {/* Add more cards here */}

          </CardDeck>
        </CardContainer>
      </Container>
    </Section>
  );
};

export default Experience;
