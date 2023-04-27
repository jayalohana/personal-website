import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  // postion: fixed;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 125px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  span {
    color: #fff;
  }

`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #c73985;
    background-color: #fff;
  }
`;

const Navbar = () => {
  const handleLinkClick = (path) => {
    window.history.pushState(null, null, path);
    // window.location.reload();
  };

  const currentPath = window.location.pathname;

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo-cutout.png" />
          <List>
            <ListItem><a 
              href="#Home"
              onClick={() => handleLinkClick("Home")}
            > <span>Home</span></a></ListItem>
            <ListItem><a 
              href="#About"
              onClick={() => handleLinkClick("About")}
            > <span>About</span></a></ListItem>
            <ListItem><a 
              href="#Projects"
              onClick={() => handleLinkClick("Projects")}
            > <span>Projects</span></a></ListItem>
            <ListItem><a 
              href="#Experience"
              onClick={() => handleLinkClick("Experience")}
            > <span>Experience</span></a></ListItem>
            <ListItem><a 
              href="#Contact"
              onClick={() => handleLinkClick("Contact")}
            > <span>Contact</span></a></ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <a href="jayalohana/portfolio-website/Jaya Lohana (1).pdf">
            <Button>Resume</Button>
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
