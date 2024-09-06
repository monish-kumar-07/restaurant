/* src/pages/ContactUs.js */
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const ContactUsContainer = styled.div`
  padding: 0px;
  background-color: ${(props) => props.theme.colors.lightBackground};
  min-height: 0vh;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const FormContainer = styled.form`
  max-width: 600px;
  margin: auto;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 5px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 5px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.primary};
  resize: vertical;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.secondary};
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const SuccessMessage = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your form submission logic (e.g., send data to an API)

    // Simulate a successful submission
    setIsSubmitted(true);

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <ContactUsContainer>
      <Navbar/>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Contact Us</FormTitle>

        {isSubmitted && (
          <SuccessMessage>
            Thank you! Your message has been sent.
          </SuccessMessage>
        )}

        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <TextArea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormContainer>
    </ContactUsContainer>
  );
};

export default ContactUs;
