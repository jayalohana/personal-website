import React, { useState } from 'react';
import styled from 'styled-components';

const experiences = [
  {
    id: 1,
    date: 'June 2019',
    title: 'Hiking in the Swiss Alps',
    description: 'I went hiking in the Swiss Alps with a group of friends and it was one of the most beautiful experiences of my life. The views were breathtaking and the fresh mountain air was invigorating. We hiked for several hours and stopped for a picnic lunch in a meadow overlooking a glacier. I highly recommend this experience to anyone who loves the outdoors!'
  },
  {
    id: 2,
    date: 'August 2020',
    title: 'Biking through the Netherlands',
    description: 'I rented a bike and rode through the Dutch countryside, stopping in small towns along the way. The scenery was stunning and the bike paths were well-maintained. I even saw some windmills! This was a great way to experience the Netherlands.'
  },
  {
    id: 3,
    date: 'January 2021',
    title: 'Exploring the temples of Angkor Wat',
    description: 'I visited Angkor Wat in Cambodia and it was an incredible experience. The temples were awe-inspiring and the history behind them was fascinating. I hired a guide who explained the significance of each temple and showed me the best spots for photos. This was definitely a bucket-list experience for me.'
  },
  {
    id: 4,
    date: 'July 2019',
    title: 'Safari in Tanzania',
    description: 'I went on a safari in Tanzania and saw so many amazing animals in their natural habitat. We saw lions, elephants, giraffes, and more. Our guide was very knowledgeable and made sure we had a great experience. This was a once-in-a-lifetime trip!'
  },
  {
    id: 5,
    date: 'October 2020',
    title: 'Learning to surf in Hawaii',
    description: 'I took a surf lesson in Hawaii and it was so much fun! The waves were perfect for beginners and the instructor was very patient. I was able to stand up on the board a few times and it was a great feeling. This was a great way to experience the Hawaiian culture and lifestyle.'
  },
  {
    id: 6,
    date: 'May 2021',
    title: 'Skydiving in New Zealand',
    description: 'I went skydiving in New Zealand and it was an adrenaline rush like no other. The views were incredible as we jumped out of the plane and free-fell for what felt like forever. The parachute opened and we gently floated back to the ground. This was a once-in-a-lifetime experience that I will never forget.'
  }
];

const ExperiencesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ExperienceCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 16px;
  width: 300px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  }
`;
const ExperienceDetails = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;
  width: 100%;
`;

const ExperienceTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 8px 0;
`;

const ExperienceDate = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
`;

const ExperienceDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <ExperiencesWrapper>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} onClick={() => handleExperienceClick(experience)}>
          <ExperienceTitle>{experience.title}</ExperienceTitle>
          <ExperienceDate>{experience.date}</ExperienceDate>
        </ExperienceCard>
      ))}
      {selectedExperience && (
        <ExperienceDetails>
          <ExperienceTitle>{selectedExperience.title}</ExperienceTitle>
          <ExperienceDate>{selectedExperience.date}</ExperienceDate>
          <ExperienceDescription>{selectedExperience.description}</ExperienceDescription>
        </ExperienceDetails>
      )}
    </ExperiencesWrapper>
  );
}

export default Experience;