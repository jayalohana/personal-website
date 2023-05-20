import React from "react";
import styled from "styled-components";

//

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 30vh;
`;

const Container = styled.div`
  z-index= -1;
  width:fit-content;
  display: flex;
  position: fixed;
  // position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    position: fixed;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

const Logo = styled.img`
  margin-top: 30px;
  height: 125px;
  margin-right: 350px;
  flex-grow: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  text-decoration: none;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  span {
    text-decoration: none;
    color: #fff;
    &:hover {
      transform: scale(1.2);
    }
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
