import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Не расслабляйся</h2>
      <div className="projects">
        <div className="project">
          <h3>Даже когда</h3>
          <p>Долго в теме</p>
        </div>
        <div className="project">
          <h3>Тем более</h3>
          <p>Когда долго в теме</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;