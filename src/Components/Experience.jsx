import React from "react";
import styled from "styled-components";

const Section = styled.div`
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 70px;
  margin-bottom: 100px;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    margin-bottom: 1000px;
  }
`;

const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  // @media only screen and (max-width: 768px) {
  //   padding: 20px;
  // }
`;

const ExperienceTitle = styled.h2`
  margin-top: 200px;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
  color: #fff;
  text-align: center;
  // @media only screen and (max-width: 768px) {
  //   font-size: 32px;
  //   margin-bottom: 30px;
    margin-top: 300px;
  // }
`;

const ExperienceList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  // @media only screen and (max-width: 768px) {
  //   flex-direction: column;
  //   align-items: center;
  // }
`;

const ExperienceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
  width: 45%;
  max-width: 400px;
  // @media only screen and (max-width: 768px) {
  //   width: 100%;
  // }
`;

const ExperienceLogo = styled.img`
  height: 30px;
  margin-bottom: 20px;
`;

const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ExperienceCompany = styled.h3`
  font-size: 28px;
  font-weight: 1000;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
`;

const ExperienceRole = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
`;

const ExperienceDate = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
`;

const ExperienceDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
`;

function Experience() {
  return (
    <Section id="Experience">
      <PageWrapper>
        <ExperienceSection>
          <ExperienceTitle>work experience</ExperienceTitle>
          <ExperienceList>
            <ExperienceItem>
              <ExperienceLogo
                src="./img/bbi-logo.png"
                alt="Company A logo"
              />
              <ExperienceInfo>
                <ExperienceCompany>Bold Brew Insights</ExperienceCompany>
                <ExperienceRole>UI/UX Designer</ExperienceRole>
                <ExperienceDate>March 2022 – July 2022</ExperienceDate>
                <ExperienceDescription>
                  Researched financial technology concepts to synthesize key
                  findings surrounding the financial market of NFTs, blockchain
                  technology, and national cryptocurrencies for web-content
                  creation by using my written communication and presentation
                  skillset.
                </ExperienceDescription>
              </ExperienceInfo>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceLogo
                src="./img/yu-logo.png"
                alt="Company B logo"
              />
              <ExperienceInfo>
                <ExperienceCompany>York International</ExperienceCompany>
                <ExperienceRole>Community Engagement</ExperienceRole>
                <ExperienceDate>July 2022 – Present</ExperienceDate>
                <ExperienceDescription>
                  Facilitated regular community engagement and global outreach
                  discussions, while providing peer-to-peer support and
                  mentorship to four students over four months, resulting in
                  significant personal and academic growth.
                </ExperienceDescription>
              </ExperienceInfo>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceLogo
                src="./img/mgh-logo.jpg"
                alt="Company B logo"
              />
              <ExperienceInfo>
                <ExperienceCompany>Many Green Hands</ExperienceCompany>
                <ExperienceRole>Vice President (Advocacy)</ExperienceRole>
                <ExperienceDate>August 2022 – Present</ExperienceDate>
                <ExperienceDescription>
                  Participating in discussions and events related to online
                  advocacy, such as webinars, forums, and social media
                  campaigns. Creating and managing online content that promotes
                  the club's mission and activities, including blog posts,
                  social media updates, and event listings
                </ExperienceDescription>
              </ExperienceInfo>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceLogo
                src="./img/ssy-logo.jpg"
                alt="Company B logo"
              />
              <ExperienceInfo>
                <ExperienceCompany>
                  {" "}
                  Schizphrenia Society York{" "}
                </ExperienceCompany>
                <ExperienceRole> Marketing Executive </ExperienceRole>
                <ExperienceDate> September 2022 – Present</ExperienceDate>
                <ExperienceDescription>
                  Developed and maintained the club's website to ensure it was
                  up-to-date, visually appealing, and easy to navigate,
                  resulting in a positive user experience for visitors. Created
                  and managed online content to promote the club's mission and
                  activities, which increased website traffic and engagement
                  among target audiences.
                </ExperienceDescription>
              </ExperienceInfo>
            </ExperienceItem>
          </ExperienceList>
        </ExperienceSection>
      </PageWrapper>
    </Section>
  );
}

export default Experience;
