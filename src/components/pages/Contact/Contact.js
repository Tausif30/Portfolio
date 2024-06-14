import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import FormField from './FormField';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isNameValid = () => name !== '';
  const isEmailValid = () => email !== '';
  const isMessageValid = () => message !== '';

  const areAllFieldsValid = () => isNameValid() && isEmailValid() && isMessageValid();

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleMessageChange = e => setMessage(e.target.value);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_koiah3o', 'template_06hv3vj', form.current, '4Ardkd_hx9HFNnSue')
      .then(
        () => {
          console.log('SUCCESS!');
          navigate('/confirmation');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <FormField 
        label="Name"
        htmlFor="name"
        hasError={!isNameValid()}
      >
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder='Name'
          required={true}
          onChange={handleNameChange}
        />
      </FormField>
      <FormField 
        label="E-Mail Address" 
        htmlFor="email" 
        hasError={!isEmailValid()} 
      >
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email Address'
          value={email}
          required={true}
          onChange={handleEmailChange}
        />
      </FormField>
      <FormField 
        label="Message" 
        htmlFor="message" 
        hasError={!isMessageValid()} 
      >
        <textarea
          id="message"
          name="message"
          placeholder='Type your message'
          value={message}
          required={true}
          onChange={handleMessageChange}
        />
      </FormField>
      <button
        className="button-primary"
        type="submit"
        disabled={!areAllFieldsValid()}
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;
