import React from 'react';
import './index.css'; 

const Featured = () => {
  return (
    <section id="featured" className="featured">
      <div className="featured-content">
        <h2 className="featured-title">Featured Stones</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img src="https://bhandarimarbleworld.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-04-at-10.59.10.jpeg" alt="Stone 1" className="featured-image" />
            <h3 className="featured-name">Marble Stone</h3>
            <p className="featured-description">Perfect for countertops and flooring.</p>
            <a href="https://stonepedia.in/product/italian-statuario/" className="featured-button">View Details</a>
          </div>
          <div className="featured-item">
            <img src="https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Large/20240528101606-7e299287-f3b6-41eb-9176-dd0cde574892.jpg" alt="Stone 2" className="featured-image" />
            <h3 className="featured-name">Granite Stone</h3>
            <p className="featured-description">Durable and elegant for outdoor use.</p>
            <a href="https://stonepedia.in/product/ice-blue-granite/" className="featured-button">View Details</a>
          </div>
          <div className="featured-item">
            <img src="https://loadsofstone.com/cdn/shop/products/limestone-chippings-20mm-226376_800x.jpg?v=1659361373" alt="Stone 3" className="featured-image" />
            <h3 className="featured-name">Limestone</h3>
            <p className="featured-description">Great for construction and landscaping.</p>
            <a href="https://stonepedia.in/product/jaisalmer-yellow-sandstone/" className="featured-button">View Details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
