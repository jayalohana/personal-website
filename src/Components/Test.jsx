import React from "react";
import styled from "styled-components";

const Section = styled.div`
height: 100vh;
width:100%;
scroll-snap-align: center;`

function Test() {
  return (
    <Section>
      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Test; 


