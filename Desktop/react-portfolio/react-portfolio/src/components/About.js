import { useState } from 'react';
import './About.css';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about">
      <h2>Я предсказываю</h2>
      <p>Успех неизбежен</p>
      {showMore && (
        <p>
          Только свежесть
        </p>
      )}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Скрыть' : 'Подробнее'}
      </button>
    </section>
  );
}

export default About;