import React from 'react';
import './index.css'; 

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-content">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p className="testimonial-quote">
              "Stonepedia provided us with high-quality materials that were perfect for our project. Highly recommend!"
            </p>
            <h3 className="testimonial-name">John Doe</h3>
            <p className="testimonial-position">Project Manager, ABC Corp</p>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-quote">
              "Fantastic service and support! The team at Stonepedia guided us throughout the purchase process."
            </p>
            <h3 className="testimonial-name">Jane Smith</h3>
            <p className="testimonial-position">CEO, XYZ Ltd.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
