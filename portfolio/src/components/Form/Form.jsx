import React, { useState, useRef } from 'react';
import './Form.css';

export function Form() {
  const emailRef = useRef();
  const messageRef = useRef();
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('email', emailRef.current.value);
    formData.append('message', messageRef.current.value);

    try {
      const response = await fetch('https://formspree.io/f/xknkpqry', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSucceeded(true);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const verifyEmail = (email) => { //Error handling to verify if the email is vallid to proceed
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValidEmail(isValid);
  };

  return (
    <div className="container">
      {succeeded ? (
        <div className="container-success">
          <h3>Thanks for getting in touch!</h3>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to the top
          </button>
        </div>
      ) : (
        <>
          <h2>Get in touch using the form below:</h2> 
          <form onSubmit={handleSubmit}>
            <input
              ref={emailRef}
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              onChange={(e) => verifyEmail(e.target.value)}
              required
            />
            <textarea
              ref={messageRef}
              required
              placeholder="Send a message to get started."
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              disabled={submitting || !validEmail || !message}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Form;
