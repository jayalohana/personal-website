import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Section = styled.div`
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  margin-top: 10rem;
`;

const CardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  margin: 10px;
  width: 500px;
  height: 800px;
  overflow: hidden;
`;

const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
// flex-grow: 1;
height: calc(100% - 150px -50px);
overflow-y: auto;
`;

const CardContent = styled.div`
max-height: 200px;
overflow-y:auto;
padding: 10px;
::-webkit-scrollbar{
  display:none;
}
`;

const CardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
`;

const CardImage = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
`;

const CardPosition = styled.div`
color: #000;

`;
 const CardDate = styled.div`
 color: #000;
 `;

const CardTitle = styled.h5`
  margin-top: 10px;
  color: #000;
`;

const CardText = styled.p`
  display: ${(props) => (props.expanded ? "block" : "none")};
  color: #000;
`;

function Test() {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpansion = (cardIndex) => {
    if (expandedCards.includes(cardIndex)) {
      setExpandedCards(expandedCards.filter((index) => index !== cardIndex));
    } else {
      setExpandedCards([...expandedCards, cardIndex]);
    }
  };

  const cardData = [
    {
      imgSrc: "./img/Gaotek.jpeg",
      title: "GaoTek Inc.",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",

      text: [
        "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
        "Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time",
        "Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.",
      ],
    },
    {
      imgSrc: "./img/ssy-logo.jpg",
      title: "yuHacks 2023",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",
      text: [
        "Utilizing React.js and Redux to build scalable and modular components for the merch store website, enabling efficient state management and seamless integration with the backend APIs.",
        "Employing modern frontend frameworks and libraries like Vue.js and GraphQL to develop dynamic and interactive features for the merch store website, enhancing user engagement and providing real-time data updates.",
      ],
    },
    {
      imgSrc: "./img/bbi-logo.png",
      title: "Bold Brew Insights",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",
      text: [
        "Researched financial technology concepts to synthesize key findings surrounding the financial market of NFTs, blockchain technology, and national cryptocurrencies for web-content creation by using my written communication and presentation skillset.",
      ],
    },
    {
      imgSrc: "./img/yu-logo.png",
      title: "York International",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",
      text: [
        " Facilitated regular community engagement and global outreach discussions, while providing peer-to-peer support and mentorship to four students over four months, resulting in significant personal and academic growth.",
      ],
    },
    {
      imgSrc: "./img/mgh-logo.jpg",
      title: "Many Green Hands",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",
      text: [
        "Participating in discussions and events related to online advocacy, such as webinars, forums, and social media campaigns.",

        "Creating and managing online content that promotes the club's mission and activities, including blog posts, social media updates, and event listings.",
      ],
    },
    {
      imgSrc: "./img/ssy-logo.jpg",
      title: "Schizophrenia Society York",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",
      text: [
        " Developed and maintained the club's website to ensure it was up-to-date, visually appealing, and easy to navigate, resulting in a positive user experience for visitors.",

        "Created and managed online content to promote the club's mission and activities, which increased website traffic and engagement among target audiences.",
      ],
    },
  ];

  // Add more card objects to the array as needed

  const renderCards = () => {
    const rows = [];
    let currentRow = [];

    cardData.forEach((card, index) => {
      const isExpanded = expandedCards.includes(index);

      currentRow.push(
        <Card key={index}>
          <CardBody>
          <div className="card">
            <CardImage
              src={card.imgSrc}
              className="card-img-top"
              alt="Card Image"
            />
            <div className="card-body">
              <CardTitle>{card.title}</CardTitle>
              <br />
              <CardPosition>{card.position}</CardPosition>
              
              <CardDate>{card.date}</CardDate>
              <CardContent>
              <CardText expanded={isExpanded}>
                <ul>
                  {card.text.map((item, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardText>
              <CardButtonContainer>
                <CardButton onClick={() => toggleExpansion(index)}>
                  {isExpanded ? "▲" : "▼"}
                </CardButton>
              </CardButtonContainer>
              </CardContent>
            </div>
          </div>
          
          </CardBody>
        </Card>
      );

      if (currentRow.length === 3) {
        rows.push(<CardDeck key={rows.length}>{currentRow}</CardDeck>);
        currentRow = [];
      }
    });

    if (currentRow.length > 0) {
      rows.push(<CardDeck key={rows.length}>{currentRow}</CardDeck>);
    }

    return rows;
  };
  return (
    <Section>
      <Container>{renderCards()}</Container>
    </Section>
  );
}

export default Test;
