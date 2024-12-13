import React from 'react';
import './index.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Have any questions or need more information? Feel free to reach out to us!
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
