import './index.css'; 

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2 className="home-title">Welcome to Stonepedia</h2>
        <p className="home-description">
          Explore a wide variety of high-quality stones for all your construction needs.
        </p>
        <a href="#featured" className="explore-button">
          Explore Featured Stones
        </a>
      </div>
    </section>
  );
};

export default Home;
