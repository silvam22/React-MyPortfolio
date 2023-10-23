import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const formData = {
      name,
      email,
      message
    };

    // Send the form data to the server
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          // Form submission successful
          console.log('Form submitted successfully!');
          // Reset the form fields
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent successfully');
        } else {
          // Form submission failed
          console.error('Form submission failed.');
          setError('Error occured try again');
        }
      })
      .catch((error) => {
        setError('Error occured try again');
        console.error('Error occurred during form submission:', error);
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <h2 className="success">{success}</h2>
      <h2 className="error">{error}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;



