import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
 
`;

const Container = styled.div`
  z-index: 1;
  display: flex;
  backdrop-filter: blur(100px);
  // width: 100%;
  position: fixed;
  padding-top: 20px;
  height: 2rem;
  // position: absolute;
  // justify-content: center;
  // padding-left: 140rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    position: fixed;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

`;

const Logo = styled.img`
  // margin-top: 30px;
  height: 125px;
  flex-grow: 1;
  padding-right: 350px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;

  gap: 20px;
  list-style: none;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;

  &:hover {
    transform: scale(1.2) translateY(-2px); /* Added translateY for a slight vertical movement */
  }
  span {
    text-decoration: none;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo-cutout.png" />
          <List>
            <ListItem>
              <a href="#Home">
                {" "}
                <span>Home</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#About">
                {" "}
                <span>About</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#Projects">
                {" "}
                <span>Projects</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#Experience">
                {" "}
                <span>Experience</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#Contact">
                {" "}
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
