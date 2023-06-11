import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Section = styled.div`
`;

const Container = styled.div`
margin-top: 4.5rem;
`;

const PageWrapper = styled.div`

`;

const Form = styled.form`
padding-left: 30%;
@media screen and (max-width: 600px) {
  padding-left: 0;
}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;;
  font-weight: bold;
  
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 30%;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 50%;
  height: 30vh;
`;

const SubmitButton = styled.button`
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

const Footer = styled.footer`
  padding: 10px;
  display: flex;
  color: #fff;
 justify-content: center;
  font-weight: bolder;
  margin-top: 2rem;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: #da4ea2;
`;

const ContactLink = styled.a`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: #da4ea2;
  & > * {
    margin: 0 10px;
    font-size: 24px;
    color: #da4ea2;
    cursor: pointer;
  }
  &:hover {
    color: #c73985;
    background-color: #fff;
  }
`;

const Name = styled.div`
  color: #da4ea2;
  font-weight: bolder;
`;

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        ref.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setError(true);
        }
      );
  };

  function handleEmailClick() {
    const email = "jaya24@my.yorku.ca"; // Replace with your email address
    window.location.href = `mailto:${email}`;
  }

  return (
    <Section id="Contact">
      <Container className="container">
          <PageWrapper>
            <Form ref={ref} onSubmit={handleSubmit}>
              <h1>send a message :)</h1>
              <Label htmlFor="name">name:</Label>
              <Input type="text" id="name" name="name" />
              <Label htmlFor="email">email:</Label>
              <Input type="email" id="email" name="email" />
              <Label htmlFor="message">message:</Label>
              <TextArea id="message" name="message" />
              <SubmitButton type="submit">submit</SubmitButton>
              {success && (
                <p>your message has been sent. we'll get back to u asap :)</p>
              )}
              {error && <p>Oops, something went wrong. Please try again.</p>}
              <ContactLinks>
                <ContactLink href="https://github.com/jayalohana">
                  <FaGithub size={32} />
                </ContactLink>
                <ContactLink href="https://www.linkedin.com/in/jaya-lohana/">
                  <FaLinkedin size={32} />
                </ContactLink>
                <ContactLink href="https://www.instagram.com/jayasdigitaldiaryy/">
                  <FaInstagram size={32} />
                </ContactLink>
                <ContactLink onClick={handleEmailClick}>
                  <FaEnvelope size={32} />
                </ContactLink>
              </ContactLinks>
            </Form>
            <Footer>
              developed by -- <Name> jaya lohana </Name> --
            </Footer>
          </PageWrapper>
          </Container>
    </Section>
  );
}

export default Contact;
