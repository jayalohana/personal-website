import React from "react";
import styled from "styled-components";
import cutout from "../../public/img/cutout.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  z-index: 1;
  // margin-top:1rem;
  display: flex;
  position: fixed;
  backdrop-filter: blur(100px);
  height: 2rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-left: 30rem;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 4rem;
  width: 5rem;
`;

const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const ListItem = styled.li`
  span {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    transform: scale(1.2) translateY(-2px); /* Added translateY for a slight vertical movement */
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container className="container">
        <a href="https://github.com/jayalohana">
          <Logo src={cutout} />
        </a>
        <Links>
          <List>
            <ListItem>
              <a href="#Home">
                <span>Home</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#About">
                <span>About</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#Projects">
                <span>Projects</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#Experience">
                <span>Experience</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#Contact">
                <span>Contact</span>
              </a>
            </ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
