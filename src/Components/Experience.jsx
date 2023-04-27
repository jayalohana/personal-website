import React from "react";
import styled from "styled-components";

// const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
// //   background-color: #f5f5f5;
//   scroll-snap-align: center;
// `;

const Section = styled.div``;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
//   background-color: #f7f7f7;
  font-family: 'Open Sans', sans-serif;
  scroll-snap-align: center;
`;

const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
//   background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
`;

const ExperienceTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
  color: #fff;
  text-align: center;
`;

const ExperienceList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
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
`;

const ExperienceLogo = styled.img`
  height: 80px;
  margin-bottom: 20px;
`;

const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ExperienceCompany = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #333;
  text-align: center;
`;

const ExperienceRole = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #666;
  text-align: center;
`;

const ExperienceDate = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #888;
  text-align: center;
`;

const ExperienceDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #666;
  text-align: center;
`;

function Experience() {
  return (
  <Section id = 'Experience'>
    <PageWrapper>
      <ExperienceSection>
        <ExperienceTitle>work experience</ExperienceTitle>
        <ExperienceList>
          <ExperienceItem>
            <ExperienceLogo
              src="/assets/company-a-logo.png"
              alt="Company A logo"
            />
            <ExperienceInfo>
              <ExperienceCompany>Company A</ExperienceCompany>
              <ExperienceRole>Software Engineer</ExperienceRole>
              <ExperienceDate>January 2020 - Present</ExperienceDate>
              <ExperienceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed magna euismod, malesuada est id, aliquet nunc.
              </ExperienceDescription>
            </ExperienceInfo>
          </ExperienceItem>
          <ExperienceItem>
            <ExperienceLogo
              src="/assets/company-b-logo.png"
              alt="Company B logo"
            />
            <ExperienceInfo>
              <ExperienceCompany>Company B</ExperienceCompany>
              <ExperienceRole>Web Developer</ExperienceRole>
              <ExperienceDate>June 2018 - December 2019</ExperienceDate>
              <ExperienceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed magna euismod, malesuada est id, aliquet nunc.
              </ExperienceDescription>
            </ExperienceInfo>
          </ExperienceItem>
          <ExperienceItem>
            <ExperienceLogo
              src="/assets/company-b-logo.png"
              alt="Company B logo"
            />
            <ExperienceInfo>
              <ExperienceCompany>Company B</ExperienceCompany>
              <ExperienceRole>Web Developer</ExperienceRole>
              <ExperienceDate>June 2018 - December 2019</ExperienceDate>
              <ExperienceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed magna euismod, malesuada est id, aliquet nunc.
              </ExperienceDescription>
            </ExperienceInfo>
          </ExperienceItem>
          <ExperienceItem>
            <ExperienceLogo
              src="/assets/company-b-logo.png"
              alt="Company B logo"
            />
            <ExperienceInfo>
              <ExperienceCompany>Company B</ExperienceCompany>
              <ExperienceRole>Web Developer</ExperienceRole>
              <ExperienceDate>June 2018 - December 2019</ExperienceDate>
              <ExperienceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed magna euismod, malesuada est id, aliquet nunc.
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