import React from "react";
import styled from "styled-components";

const Section = styled.div``;

const Container = styled.div``;

function Nav() {
  return (
    <Section>
      <Container>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="./img/logo-cutout.png"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              >
                {" "}
              </img>
              Bootstrap
            </a>
          </div>
        </nav>
      </Container>
    </Section>
  );
}

export default Nav;
