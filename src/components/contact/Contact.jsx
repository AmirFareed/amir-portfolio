import './contact.css';

import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa'; // Correct import for WhatsApp icon
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Thanks, I\'ll reply ASAP :)');
        },
        (error) => {
          console.log(error.text);
          setMessage('Sorry, there was an error. Please try again.');
        }
      );

    e.target.reset(); // Reset form fields after submission
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if a valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>amir2fareed@gmail.com</h5>
            <a href="mailto:amir2fareed@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923125556545</h5> {/* Replace '+1234567890' with your actual WhatsApp number */}
            <a href="https://wa.me/+923125556545" target="_blank" rel="noopener noreferrer">Contact Me</a> {/* Use your actual phone number with international code */}
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>{message}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
